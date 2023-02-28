import logo from '../../assets/2.svg';
import userIcon from '../../assets/user.svg';
import passwordIcon from '../../assets/password.svg';
import '../../styles/login.css';
import { useState } from 'react';
import BootstrapButton from '../../components/btnBlue.jsx';
import axios from 'axios';
// import axiosApiInstance from '../../components/tokenIntercept';
import AlertComp from '../../components/Alert.jsx';
const Login = () => {
  // const usernameTxtBCh = () => {
  //   console.log('Username clicked');
  // };
  // const passwordTxtBCh = () => {
  //   console.log('Password clicked');
  // };
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const postData = async (url, data) => {
    try {
      const response = axios.post(url, data);
      return response;
      // throw new Error('Error, Invalid Credentials');
    } catch (error) {
      console.log(error);
      setAlertSeverity('error');
      setAlertMessage('Error, Invalid Credentials');
      setAlert(!alert);
    }
  };
  const loginClickHandler = async (e) => {
    e.preventDefault();
    let username = document.getElementById('Username').value;
    let password = document.getElementById('Password').value;
    if (username !== '' && password !== '') {
      let data = await postData('https://doreads-api-dev.onrender.com/auth/login', {
        email: username,
        password: password
      });
      console.log(data);
      if (data) {
        if (data.data) {
          console.log(data.data);
          try {
            if (data.data.response != 'Incorrect Password') {
              console.log(data.data.response);
              localStorage.setItem('user', JSON.stringify(data.data.response));
              window.location.href = '/home';
            } else {
              throw new Error('Error, Invalid Credentials');
            }
          } catch (error) {
            console.log(error);
            setAlertSeverity('error');
            setAlertMessage('Error, Invalid Credentials');
            setAlert(!alert);
          }
        }
      }
    } else {
      if (username == '' && password == '') {
        setAlertSeverity('warning');
        setAlertMessage('Please enter username and password');
        setAlert(true);
        // alert('Please enter username and password');
      } else if (username == '') {
        setAlertSeverity('warning');
        setAlertMessage('Please enter Username');
        setAlert(true);
      } else if (password == '') {
        setAlertSeverity('warning');
        setAlertMessage('Please enter Password');
        setAlert(false);
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
              <input type="text" id="Username" placeholder="Enter Username" />
              <img src={userIcon} alt="" className="loginIcon" />
            </div>
            <div className="iconInput">
              <input type="password" id="Password" placeholder="Enter Password" />
              <img src={passwordIcon} alt="" className="loginIcon" />
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
          {alert && <AlertComp severity={alertSeverity} message={alertMessage} />}
        </div>
      </div>
    </div>
  );
};
export default Login;
