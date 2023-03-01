import Alert from '@mui/material/Alert';

const AlertComp = (props) => {
  return (
    <Alert variant="standard" severity={props.severity}>
      {props.message}
    </Alert>
  );
};

export default AlertComp;
