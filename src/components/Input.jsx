import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

function Form(props) {
  const Input = styled(TextField)({
    width: props.width,
    height: props.height,
    margin: '10px',
    'background-color': '#F5F5F5',
    'border-radius': '5px',
    '& label.Mui-focused': {
      color: props.colorHover
    },
    '& .MuiInput-underline:after': {
      border: 'none',
      'border-bottom': '2px solid ' + props.colorHover
    },
    '& .MuiOutlinedInput-root': {
      fontFamily: 'Open Sans, sans-serif',
      'font-size': '14px',
      '& fieldset': {
        border: 'none'
      },
      height: props.height,
      '&:hover fieldset': {
        border: 'none',
        'border-bottom': '2px solid ' + props.colorHover
      },
      '&.Mui-focused fieldset': {
        border: 'none',
        'border-bottom': '2px solid ' + props.colorHover
      }
    }
  });

  return (
    <Input
      id={props.id}
      label={props.label}
      variant="outlined"
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
    />
  );
}
export default Form;
