import Alert from '@mui/material/Alert';

const AlertComp = (props) => {
  return (
    <Alert
      sx={{
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        '& .MuiAlert-icon': {
          color: 'white'
        },
        backgroundColor: props.color,
        width: '90%'
      }}
      variant="filled"
      severity={props.severity}
      onClose={props.onClose}>
      {props.message}
    </Alert>
  );
};

export default AlertComp;
