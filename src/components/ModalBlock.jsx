import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import BootstrapButtonRed from '../components/BtnRed';
import ButtonSiBlock from '../components/btnBlue';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '4px',
  padding: '4px',
  transform: 'translate(-50%, -60%)',
  width: 600,
  height: 190,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BootstrapButtonRed
        TextBlock="Block"
        width="80px"
        height="40px"
        float="right"
        onClick={handleOpen}></BootstrapButtonRed>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <div className="TituloPrincipal">
              <h1>Are You Sure You Want To Block This Students</h1>
            </div>
            <div className="BuuttoonnNoSi">
              <div>
                <BootstrapButtonRed TextBlock="No" width="180px" height="40px"></BootstrapButtonRed>
              </div>
              <div>
                <ButtonSiBlock TextIdit="Yes" width="180px" height="40px"></ButtonSiBlock>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
