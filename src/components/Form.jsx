import { InputLabel, TextField } from '@mui/material';
import BootstrapButton from '../components/Button';
import { styled } from '@mui/material/styles';

function Form(props) {
  const label = {
    'font-family': 'Open Sans, sans-serif',
    color: 'black',
    'font-weight': 'bold',
    'font-size': '16px',
    'margin-top': '17px'
  };

  const CssTextField = styled(TextField)({
    width: '90%',
    height: '50px',
    'background-color': '#F5F5F5',
    'border-radius': '5px',
    '& label.Mui-focused': {
      color: props.colorHover
    },
    '& .MuiInput-underline:after': {
      border: 'none',
      'border-bottom': '2px solid ' + props.colorHover
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      },
      height: '50px',
      '&:hover fieldset': {
        border: 'none',
        'border-bottom': '2px solid ' + props.colorHover
      },
      '&.Mui-focused fieldset': {
        border: 'none',
        'border-bottom': '2px solid ' + props.colorHover
      }
    }
  });

  return (
    <div className="">
      <div className="">
        <form id="form1">
          <div className="textFields1">
            <InputLabel style={label}>{props.FirstInputTitleText}</InputLabel>
            <CssTextField
              id={props.idFirstInput}
              placeholder={props.FirstInputholder}
              type={props.typeFirstInput}
              variant="outlined"
              onChange={props.onChange}
            />
            <InputLabel style={label}>{props.SecondInputTitleText}</InputLabel>
            <CssTextField
              id={props.idSecondInput}
              placeholder={props.SecondInputholder}
              type={props.typeSecondInput}
              variant="outlined"
              onChange={props.onChange}
            />
            <InputLabel style={label}>{props.ThirdInputTitleText}</InputLabel>
            <CssTextField
              id={props.idThirdInput}
              placeholder={props.ThirdInputholder}
              type={props.typeThirdInput}
              variant="outlined"
              onChange={props.onChange}
            />
            <InputLabel style={label}>{props.FourthInputTitleText}</InputLabel>
            <CssTextField
              id={props.idFourthInput}
              placeholder={props.FourthInputholder}
              type={props.typeFourthInput}
              variant="outlined"
              onChange={props.onChange}
            />
          </div>
          <div className="textFields2">
            <img src={props.ImageForm} className="Worker1"></img>
            <BootstrapButton
              height="44px"
              width="240px"
              type="submit"
              margin="auto"
              color={props.colorButton}
              colorHover={props.colorHoverButton}
              TextInButton="Register"
              onClick={props.onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
