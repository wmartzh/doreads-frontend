import CircularProgress from '@mui/material/CircularProgress';

const Circular = {
  color: '#394C73',
  width: '20px',
  marginTop: '10px'
};

export default function CircularIndeterminate() {
  return (
    <div className="Cargando">
      <h1 className="Title">No results found...</h1>
      <CircularProgress style={Circular} />
    </div>
  );
}
