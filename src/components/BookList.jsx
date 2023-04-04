import { CardActions } from '@mui/material';
import Button from './Button';
import Card from '@mui/material/Card';

const BookList = (props) => {
  const Item = {
    backgroundColor: '#fffff',
    textAlign: 'center',
    fontSize: '21px',
    width: '85%',
    height: '60%',
    minWidth: '400px',
    maxHeight: '400px',
    fontStyle: 'light',
    fontFamily: ['Open Sans', 'sans-serif'],
    cursor: 'pointer',
    color: props.color,
    fontWeight: '100px',
    '&:hover': {
      backgroundColor: '#D6d6d6',
      boxShadow: 'none'
    }
  };
  return (
    <div className="BookListContainer">
      {props.books &&
        props.books.map((el, i) => {
          return (
            <Card value={el} key={i} sx={Item}>
              <CardActions>
                <Button
                  TextInButton="X"
                  color="#394c73"
                  width="10%"
                  height="20px"
                  margin="15px 15px 0px 0px"
                  onClick={() => props.handleDeleteBook(i)}
                />
                isbn: {el.isbn}
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
};

export default BookList;
