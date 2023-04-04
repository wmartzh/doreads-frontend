function Form(props) {
  const form = {
    fontFamily: 'Open Sans , sans-serif',
    WebkitBorderRadius: '10px 10px 10px 10px',
    borderRadius: '10px 10px 10px 10px',
    backgroundColor: '#FEFEFF',
    padding: '30px',
    margin: 'auto',
    width: props.width,
    height: props.height,
    maxHeight: '80vh',
    boxShadow: '0 0 5px hsl(206, 7%, 81%)',
    display: 'flex',
    overflow: 'hidden'
  };
  const handleReset = () => {
    Document.getElementById(props.id).reset();
  };

  return (
    <form style={form} onSubmit={props.submit} onReset={handleReset} id={props.id}>
      {props.children}
    </form>
  );
}
export default Form;
