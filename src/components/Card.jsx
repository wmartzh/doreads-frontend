import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '../components/Button';
import Snackbar from '../components/SnackBar';
import Alert from '../components/AlertTest';
import SvgImg from '../assets/noimage.svg';
import { BookContext } from '../providers/book.provider';

export default function ActionAreaCard(props) {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { removeBook, addBook, alert, severity } = useContext(BookContext);

  const BookProps = {
    id: props.id,
    title: props.title,
    author: props.author,
    category: props.category,
    isbn: props.ISBN,
    image: props.img,
    year: props.year,
    language: props.language,
    editorial: props.editorial
  };

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
    console.log(alert);
    console.log(severity);
    addBook(BookProps);
  };

  const handleDeleteBook = () => {
    removeBook(BookProps);
    setOpenSnackbar(true);
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
    left: '50%',
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
            backgroundSize: 'cover',
            height: 310
          }}
          component={'img'}
          border="none"
          image={props.img ? props.img : SvgImg}
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
            <img className="ContModal1" src={props.img ? props.img : SvgImg}></img>
            <div className="ContModal2">
              <h1 className="TitleModal">{props.title}</h1>
              <h1 className="SubTitleModal">ISBN:{props.ISBN}</h1>
              <div className="DescModal">
                <h2 className="ModalDetail">Author:{props.author}</h2>
                <h2 className="ModalDetail">Category:{props.category}</h2>
                <h2 className="ModalDetail">
                  Editorial:{props.editorial ? props.editorial : 'No Editorial'}
                </h2>
                <h2 className="ModalDetail">Language:{props.language}</h2>
                <h2 className="ModalDetail">Year:{props.year}</h2>
              </div>
              <div className="ButModal">
                <Button
                  open={openSnackbar}
                  onClick={handleAddBook}
                  height="44px"
                  width="50%"
                  TextInButton="Add Book"
                  color="#259E5D"
                  colorHover="#056D35"></Button>
                <Button
                  open={openSnackbar}
                  onClick={handleDeleteBook}
                  height="44px"
                  width="50%"
                  TextInButton="Remove Book"
                  color="#F53636"
                  colorHover="#F53640"></Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1700}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
          {alert}
        </Alert>
      </Snackbar>
    </Card>
  );
}
