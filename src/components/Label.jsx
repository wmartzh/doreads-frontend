import { InputLabel } from '@mui/material';

function Form(props) {
  const label = {
    fontFamily: 'Open Sans, sans-serif',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '14px',
    marginTop: '10px',
    marginBottom: '5px',
    marginLeft: '10px'
  };

  return <InputLabel style={label}>{props.InputLabel}</InputLabel>;
}
export default Form;
