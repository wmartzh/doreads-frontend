import Box from '@mui/material/Box';

function Boxes({ src }) {
  return (
    <Box
      component="img"
      sx={{
        height: 100,
        width: 300,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 }
      }}
      alt="img"
      src={src}
    />
  );
}

export default Boxes;
