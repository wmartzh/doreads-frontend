import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import BootstrapButtonRed from '../components/BtnRed';
import ButtonSiBlock from '../components/btnBlue';
import axios from 'axios';
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

export default function TransitionsModal(props) {
  const [open, setOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const handleOpen = () => {
    setSelectedStudentId(props.student.id);
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedStudentId(null);
    setOpen(false);
  };
  const handleBlock = () => {
    const token = localStorage.getItem('token');
    axios
      .get(`http://localhost:8001/student/${selectedStudentId}/change-status/BLOCKED`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log('Estoy en la ruta get', response.data);
        setSelectedStudentId(response.data);
      })
      .catch((error) => {
        console.log(' Estoy en el catch', error);
      });
    handleClose();
  };

  return (
    <div>
      <BootstrapButtonRed
        TextBlock="Block"
        width="80px"
        height="40px"
        float="right"
        onClick={handleOpen}
      />
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
                <BootstrapButtonRed
                  TextBlock="No"
                  id="boton-no"
                  width="180px"
                  height="40px"
                  onClick={handleClose}
                />
              </div>
              <div>
                <ButtonSiBlock
                  TextIdit="Yes"
                  id="boton"
                  width="180px"
                  height="40px"
                  onClick={handleBlock}
                />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
