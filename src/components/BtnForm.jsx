import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function BootstrapButton(props) {
  const BootstrapButton = styled(Button)({
    margin: 'auto',
    boxShadow: 'none',
    textTransform: 'none',
    border: 'none',
    width: '240px',
    height: '44px',
    'border-radius': '10px',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1,
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
      {props.text}
    </BootstrapButton>
  );
}

export default BootstrapButton;
