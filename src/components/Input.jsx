import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)({
  margin: '10px',
  backgroundColor: '#F5F5F5',
  borderRadius: '5px',
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    '& fieldset': {
      border: 'none'
    },

    '&:hover fieldset': {
      border: 'none',
      borderBottom: '2px solid '
    },
    '&.Mui-focused fieldset': {
      border: 'none',
      borderBottom: '2px solid '
    }
  }
});

export default Input;
