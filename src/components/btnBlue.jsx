import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function BootstrapButton(props) {
  const BootstrapButton = styled(Button)({
    margin: 'auto',
    boxShadow: 'none',
    textTransform: 'none',
    border: 'none',
    width: props.width,
    height: props.height,
    borderRadius: '10px',
    fontSize: 16,
    padding: '2px 4px',
    float: props.float,
    lineHeight: 1.5,
    backgroundColor: '#394C73',
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '#2E3E5C',
      boxShadow: 'none',
      border: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2E3E5C',
      border: 'none'
    }
  });
  return (
    <BootstrapButton variant="contained" disableRipple href={props.href} onClick={props.onClick}>
      {props.TextIdit}
    </BootstrapButton>
  );
}

export default BootstrapButton;
