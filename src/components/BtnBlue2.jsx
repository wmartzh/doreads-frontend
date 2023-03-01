import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function BootstrapButton({ href, text }) {
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    border: 'none',
    width: '200px',
    height: '44px',
    'border-radius': '10px',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    'margin-top': '120px',
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
    <BootstrapButton variant="contained" disableRipple href={href}>
      {text}
    </BootstrapButton>
  );
}

export default BootstrapButton;
