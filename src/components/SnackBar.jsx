import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';

const SnackBar = styled(Snackbar)({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4
});

export default SnackBar;
