import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Img from '../components/Box.jsx';
import ImportBook from '../assets/online-learning.svg';
import Loan from '../assets/education1.svg';
import Register from '../assets/education2.svg';
import '../styles/Books.css';

function Items({ text1, text2, text3, href }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 19px hsl(206, 2%, 85%)',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    fontSize: '21px',
    width: '85%',
    height: '10%',
    'min-width': '300px',
    'max-height': '200px',
    'font-style': 'light',
    fontFamily: ['Open Sans', 'sans-serif'],
    cursor: 'pointer',
    color: '#394C73',
    'font-weight': '100px',
    '&:hover': {
      backgroundColor: '#D6d6d6',
      boxShadow: 'none'
    }
  }));
  const Click = () => {
    console.log('Clicked');
  };
  return (
    <div className="Books1">
      <h1 className="Title">Books</h1>
      <Stack spacing={2}>
        <Item href={href} onClick={Click}>
          <div>
            <Img src={ImportBook} />
          </div>
          {text1}
        </Item>
        <Item>
          <div>
            <Img src={Loan} />
          </div>
          {text2}
        </Item>
        <Item>
          <div>
            <Img src={Register} />
          </div>
          {text3}
        </Item>
      </Stack>
    </div>
  );
}

export default Items;
