import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '../components/Label';
import Input from '../components/Input.jsx';
import Form from '../components/Form';
import Modal from '@mui/material/Modal';
import BootstrapButton from '../components/btnBlue';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getStudents } from '../services/student';
import axios from 'axios';

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

export default function ModalEdit(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const statusOptions = ['ACTIVE', 'BLOCKED', 'INACTIVE'];

  const [totalStudents, setTotalStudents] = useState(0);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents(0, 0, { order: 'id', sort: 'asc' }).then((students) => {
      setTotalStudents(students.total);
    });
  }, []);

  const limit = totalStudents > 100 ? 100 : totalStudents;
  useEffect(() => {
    getStudents(0, limit, { order: 'id', sort: 'asc' }).then((students) => {
      setStudents(students);
    });
  }, [totalStudents, limit]);

  const handleOpen = (id) => {
    setSelectedStudentId(id);
    setOpen(true);
  };

  const handleSave = () => {
    const updatedStudent = { code, name, email, phone, status };
    console.log(updatedStudent);

    if (selectedStudentId) {
      axios
        .put(`http://localhost:8000/student/${selectedStudentId}`, updatedStudent)
        .then((response) => {
          console.log(response);
          props.handleSave();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error('No se ha seleccionado un estudiante');
    }
  };

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <BootstrapButton
            TextIdit="Edit"
            width="80px"
            height="40px"
            colorHover="#D4A20F"
            float="left"
            onClick={() => handleOpen(student.id)}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Form width="100%">
                <div className="TextEdit">
                  <InputLabel InputLabel="Enter code"></InputLabel>
                  <Input
                    type="text"
                    name="code"
                    id="Code"
                    placeholder="Code: 1111-1111"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <InputLabel InputLabel="Enter name"></InputLabel>
                  <Input
                    type="text"
                    name="name"
                    id="Name"
                    placeholder="Name: John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputLabel InputLabel="Enter email"></InputLabel>
                  <Input
                    type="text"
                    name="email"
                    id="Email"
                    placeholder="Email: johndoe@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputLabel InputLabel="Enter phone"></InputLabel>
                  <Input
                    type="text"
                    name="phone"
                    id="Phone"
                    placeholder="Phone: +506 88888888"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <InputLabel InputLabel="Select Status"></InputLabel>
                  <Autocomplete
                    value={status}
                    onChange={(event, newValue) => {
                      setStatus(newValue);
                    }}
                    inputValue={status}
                    onInputChange={(event, newInputValue) => {
                      setStatus(newInputValue);
                    }}
                    id="status-autocomplete"
                    options={statusOptions}
                    sx={{ width: 530 }}
                    renderInput={(params) => <TextField {...params} label="Status" />}
                  />
                  <div className="LogiStudentt">
                    <BootstrapButton
                      width="200px"
                      height="44px"
                      id="LogiStudentt"
                      TextIdit="Save Student"
                      onClick={handleSave}
                    />
                  </div>
                </div>
              </Form>
            </Box>
          </Modal>
        </div>
      ))}
    </div>
  );
}
