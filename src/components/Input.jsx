import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

function Form(props) {
  const Input = styled(TextField)({
    width: props.width,
    height: props.height,
    margin: '10px',
    backgroundColor: '#F5F5F5',
    borderRadius: '5px',
    '& label.Mui-focused': {
      color: props.colorHover
    },
    '& .MuiInput-underline:after': {
      border: 'none',
      borderBottom: '2px solid ' + props.colorHover
    },
    '& .MuiOutlinedInput-root': {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '14px',
      '& fieldset': {
        border: 'none'
      },
      height: props.height,
      '&:hover fieldset': {
        border: 'none',
        borderBottom: '2px solid ' + props.colorHover
      },
      '&.Mui-focused fieldset': {
        border: 'none',
        borderBottom: '2px solid ' + props.colorHover
      }
    }
  });

  return (
    <Input
      id={props.id}
      label={props.label}
      variant="outlined"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
export default Form;
