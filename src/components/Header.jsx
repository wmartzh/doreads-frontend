import { Avatar } from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

export default function ButtonAppBar(props) {
  const Back = () => {
    window.history.back();
  };

  const Header = {
    backgroundColor: '#F5F5F5',
    height: '100%',
    border: '1px solid #E0E0E0',
    boxShadow: 'none'
  };
  const font = {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontSize: '20px',
    color: 'black'
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={Header} position="static">
        <Toolbar style={Header}>
          <Link
            onClick={Back}
            style={font}
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', color: 'white', 'text-decoration': 'none' }}>
            Back
          </Link>
          <Typography variant="h4" style={font} component="div" sx={{ flexGrow: 1 }}>
            {props.TitlePage}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit">
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
