import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '../components/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ActionAreaCard(props) {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [book, setBook] = useState({});
  const [badgeCount, setBadgeCount] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleAddBook = () => {
    setOpenSnackbar(true);
    setBadgeCount(badgeCount + 1);
    setBook(props);
    console.log(props);
  };

  const StyledCardActionArea = styled(CardActionArea)({
    transition: 'all 0.2s ease-in-out',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.15)',
      filter: 'brightness(0.6)'
    }
  });

  const card = {
    background: 'none',
    boxShadow: 'none',
    padding: '0',
    width: '100%',
    height: '100%',
    marginLeft: '50px',
    maxWidth: '65%',
    minwidth: '20%',
    maxHeight: '100%',
    minHeight: '20%',
    marginTop: '5px'
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    height: 400,
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    overflow: 'scroll',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  };

  return (
    <Card style={card}>
      <StyledCardActionArea onClick={handleOpen}>
        <div>
          <h1 className="TitleBook">{props.title}</h1>
        </div>
        <CardMedia
          sx={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          component={'img'}
          border="none"
          image={props.img}
          alt="BookIMG"
        />
        <CardContent sx={{ padding: 0 }}>
          <h2 className="DescBooks">ISBN:{props.ISBN}</h2>
          <h2 className="DescBooks2">Quantity:1</h2>
        </CardContent>
      </StyledCardActionArea>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="ModalCard">
            <img className="ContModal1" src={props.img}></img>
            <div className="ContModal2">
              <h1 className="TitleModal">{props.title}</h1>
              <h1 className="SubTitleModal">ISBN:{props.ISBN}</h1>
              <div className="DescModal">
                <h2 className="ModalDetail">Author:{props.author}</h2>
                <h2 className="ModalDetail">Category:{props.category}</h2>
                <h2 className="ModalDetail">Editorial:{props.editorial}</h2>
                <h2 className="ModalDetail">language:{props.language}</h2>
                <h2 className="ModalDetail">year:{props.year}</h2>
              </div>
              <Button
                open={openSnackbar}
                badgeCount={badgeCount}
                book={book}
                onClick={handleAddBook}
                height="44px"
                width="100%"
                TextInButton="Add Book"
                color="#259E5D"
                colorHover="#056D35"></Button>
            </div>
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        key={'bottom' + 'left'}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Card>
  );
}
