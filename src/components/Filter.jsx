import Box from '@mui/material/Box';

function Filter(porps) {
  //   const style = {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     height: 500,
  //     width: 500,
  //     bgcolor: 'background.paper',
  //     boxShadow: 24,
  //     borderRadius: 2,
  //     p: 4,
  //     overflow: 'scroll',
  //     '-ms-overflow-style': 'none',
  //     'scrollbar-width': 'none',
  //     '&::-webkit-scrollbar': {
  //       display: 'none'
  //     }
  //   };

  return (
    <div className="ContFilter">
      <Box>
        <select value={porps.category} onChange={porps.onChange}>
          <option value="">Filtros</option>
        </select>
      </Box>
    </div>
  );
}

export default Filter;
