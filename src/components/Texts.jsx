import Stack from '@mui/material/Stack';
import '../styles/Books.css';

function Text(props) {
  const TitleTxt = {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0',
    color: props.color
  };

  const DescriptionTxt = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    margin: '0',
    color2: props.color2 ? props.color2 : 'black',
    width: '60%'
  };
  return (
    <div className="Books1">
      <Stack spacing={2}>
        <div className="DescriptionCont">
          <h1 style={TitleTxt}>{props.TextTitle}</h1>
          <p style={DescriptionTxt}>{props.TextParagraph}</p>
        </div>
        <div className="DescriptionCont">
          <h1 style={TitleTxt}>{props.TextTitle2}</h1>
          <p style={DescriptionTxt}>{props.TextParagraph2}</p>
        </div>
        <div className="DescriptionCont">
          <h1 style={TitleTxt}>{props.TextTitle3}</h1>
          <p style={DescriptionTxt}>{props.TextParagraph3}</p>
        </div>
      </Stack>
    </div>
  );
}

export default Text;
