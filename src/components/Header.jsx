import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ButtonAppBar(props) {
  const Back = () => {
    window.history.back();
  };

  const Book = {
    color: '#394C73'
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
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={2} color="error">
              {' '}
              <BookIcon style={Book} />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 17 new notifications">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
