import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function BootstrapButton2({ text, href }) {
  const BootstrapButton2 = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: 'white',
    border: 'none',
    width: '200px',
    height: '44px',
    'border-radius': '10px',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    margin: 'auto',
    backgroundColor: '#E9BD1F',
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '#D4A20F',
      boxShadow: 'none',
      border: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#D4A20F',
      border: 'none'
    }
  });
  return <BootstrapButton2 href={href}>{text}</BootstrapButton2>;
}

export default BootstrapButton2;
