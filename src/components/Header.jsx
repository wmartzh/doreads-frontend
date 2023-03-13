import { Avatar } from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ButtonAppBar(props) {
  const [anchorEl, setAnchorEl] = [null, React.useState(null)];

  const handleMenu = () => {
    setAnchorEl(false);
  };

  const handleClose = () => {
    setAnchorEl(true);
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
          <Typography variant="h6" style={font} component="div" sx={{ flexGrow: 1 }}>
            Back
          </Typography>
          <Typography variant="h4" style={font} component="div" sx={{ flexGrow: 1 }}>
            {props.TitlePage}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <Avatar />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
