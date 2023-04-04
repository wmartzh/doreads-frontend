import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const PaginationStyled = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.5vh',
    color: '#394C73',
    margin: '0px 2px',
    padding: '0px 10px'
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: '#394C73',
    color: '#fff'
  }
});
export default PaginationStyled;
