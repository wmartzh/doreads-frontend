import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function BootstrapButton(props) {
  const BootstrapButton = styled(Button)({
    margin: props.margin,
    boxShadow: 'none',
    textTransform: 'none',
    border: 'none',
    width: props.width,
    height: props.height,
    'border-radius': '10px',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: props.color,
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: props.colorHover
    }
  });
  return (
    <BootstrapButton
      variant="contained"
      disableRipple
      href={props.href}
      onClick={props.onClick}
      type={props.type}>
      {props.TextInButton}
    </BootstrapButton>
  );
}

export default BootstrapButton;
