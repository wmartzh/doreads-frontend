import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '../components/Label';
import Input from '../components/Input.jsx';
import Form from '../components/Form';
import Modal from '@mui/material/Modal';
import BootstrapButton from '../components/btnBlue';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  height: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  minWidth: '10px',
  maxWidth: '900px',

  p: -3
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [statusValue, setStatusValue] = React.useState(null);
  const statusOptions = ['ACTIVE', 'BLOCKED', 'INACTIVE'];

  return (
    <div>
      <BootstrapButton
        TextIdit="Edit"
        width="80px"
        height="40px"
        colorHover="#D4A20F"
        float="left"
        onClick={handleOpen}></BootstrapButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Form width="100%">
            <div className="TextEdit">
              <InputLabel InputLabel="Enter code"></InputLabel>
              <Input type="text" name="code" id="Code" placeholder="Code: 1111-1111" />
              <InputLabel InputLabel="Enter name"></InputLabel>
              <Input type="text" name="name" id="Name" placeholder="Name: John Doe" />
              <InputLabel InputLabel="Enter email"></InputLabel>
              <Input type="text" name="email" id="Email" placeholder="Email: johndoe@ejemplo.com" />
              <InputLabel InputLabel="Enter phone"></InputLabel>
              <Input type="text" name="phone" id="Phone" placeholder="Phone: +506 88888888" />
              <InputLabel InputLabel="Select Status"></InputLabel>
              <Autocomplete
                value={statusValue}
                onChange={(event, newValue) => {
                  setStatusValue(newValue);
                }}
                inputValue={statusValue}
                onInputChange={(event, newInputValue) => {
                  setStatusValue(newInputValue);
                }}
                id="status-autocomplete"
                options={statusOptions}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Status" />}
              />
              <div className="LogiStudentt">
                <BootstrapButton
                  width="200px"
                  height="44px"
                  id="LogiStudentt"
                  TextIdit="Save Student"
                />
              </div>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}
