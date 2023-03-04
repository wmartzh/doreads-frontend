import Alert from '@mui/material/Alert';

const AlertComp = (props) => {
  return (
    <Alert
      sx={{
        '& .MuiAlert-icon': {
          color: 'white'
        },
        backgroundColor: props.color
      }}
      variant="filled"
      severity={props.severity}>
      {props.message}
    </Alert>
  );
};

export default AlertComp;
