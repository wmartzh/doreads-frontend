import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../styles/Registerworker.css';

function BootstrapButton2({ text }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 500,
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    overflow: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  };

  const View = {
    margin: 'auto'
  };

  const BootstrapButton2 = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: 'white',
    border: 'none',
    width: '200px',
    height: '44px',
    'border-radius': '10px',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    margin: 'auto',
    backgroundColor: '#E9BD1F',
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '#D4A20F',
      boxShadow: 'none',
      border: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#D4A20F',
      border: 'none'
    }
  });
  return (
    <div className="View">
      <BootstrapButton2 sx={View} onClick={handleOpen}>
        {text}
      </BootstrapButton2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <h1 className="Title2">Software Overview</h1>
          <p className="Text2">
            This student and book management software is a tool that helps educational institutions
            keep track and control of their library and the students who use it. This software can
            have various functionalities, such as book lending management, library cataloging and
            organization, and student data management. Some of the features that could be included
            in this book and student management software are:
          </p>
          <h1 className="Title2">Book catalog</h1>
          <p className="Text2">
            Allows you to add information about the books in the library, such as their title,
            author, year of publication, edition number, ISBN, among other details.
          </p>
          <h1 className="Title2">Loan control</h1>
          <p className="Text2">
            Allows you to keep track of the books that are loaned to students, including the date of
            loan, the date of return and the condition of the book.
          </p>
          <h1 className="Title2">Late Fine</h1>
          <p className="Text2">
            If a student does not return a book on time, the software can automatically calculate
            the appropriate fine.
          </p>
          <h1 className="Title2">Student Management</h1>
          <p className="Text2">
            Allows you to add information about students, such as their name, ID number, email, and
            phone number.
          </p>
          <h1 className="Title2">Loan History</h1>
          <p className="Text2">Allows you to view the loan history of a student</p>
        </Box>
      </Modal>
    </div>
  );
}

export default BootstrapButton2;
