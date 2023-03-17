import logo from '../../assets/2.svg';
import userIcon from '../../assets/user.svg';
import passwordIcon from '../../assets/password.svg';
import '../../styles/login.css';
import { useState } from 'react';
import BootstrapButton from '../../components/btnBlue.jsx';
import AlertComp from '../../components/Alert.jsx';
import { authenticate } from '../../services/auth';

const ErrorAlert = (props) => <AlertComp severity="error" message={props.message} color="F53636" />;
const WarningAlert = (props) => (
  <AlertComp severity="warning" message={props.message} color="E9BD1F" />
);

const Login = () => {
  const [warning, setWarning] = useState();
  const [error, setError] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginClickHandler = async (e) => {
    e.preventDefault();
    setError('');
    setWarning('');

    if (email == '' && password == '') {
      setWarning('Please enter email and password');
    } else if (email == '') {
      setWarning('Please enter email');
    } else if (password == '') {
      setWarning('Please enter Password');
    } else {
      const { data, error } = await authenticate({ email, password }, setError);

      if (data) {
        window.location.href = '/home';
      }
      if (error.status == 404) {
        setError('Credentials not found');
      }
      if (error.status == 401) {
        setError('Invalid Credentials');
      }
    }
  };
  return (
    <div className="body">
      <div className="content">
        <form id="form">
          <div id="logoFormDiv">
            <img src={logo} alt="" id="logoForm" />
          </div>
          <div className="textFields">
            <div className="iconInput">
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={userIcon} alt="" className="loginIcon" />
            </div>
            <div className="iconInput">
              <input
                type="password"
                id="Password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={passwordIcon} alt="" className="loginIcon" id="passwordIcon" />
            </div>
            <BootstrapButton
              type="submit"
              id="loginButton"
              text="Login"
              onClick={loginClickHandler}
            />
          </div>
        </form>
        <div className="errorContainer">
          {warning && <WarningAlert message={warning} />}
          {error && <ErrorAlert message={error} />}
        </div>
      </div>
    </div>
  );
};
export default Login;
