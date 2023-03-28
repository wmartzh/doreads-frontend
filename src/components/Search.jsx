import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1.2, 1),
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  color: '#394C73',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '13px',
    color: '#394C73',
    borderRadius: '5px',
    border: '1px solid #D6D6D6',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: 'Open Sans, sans-serif',
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    width: '40vh',
    height: '30px'
  }
}));

export default function SearchAppBar(props) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" onChange={props.onChange} />
    </Search>
  );
}
