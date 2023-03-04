import logo from '../../assets/2.svg';
import userIcon from '../../assets/user.svg';
import passwordIcon from '../../assets/password.svg';
import '../../styles/login.css';
import { useState } from 'react';
import BootstrapButton from '../../components/btnBlue.jsx';
import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// import axiosApiInstance from '../../components/tokenIntercept';
import AlertComp from '../../components/Alert.jsx';
const Login = () => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const [colorAlert, setColorAlert] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const HandlePasswordTxt = () => {
    console.log('showPassword clicked');
    if (showPassword == false) {
      document.getElementById('Password').type = 'text';
      setShowPassword(!showPassword);
    } else {
      document.getElementById('Password').type = 'password';
      setShowPassword(!showPassword);
    }
  };
  const handleChangeTxt = () => {
    if (alert === true) {
      setAlert(!alert);
    }
  };
  const postData = async (url, data) => {
    try {
      const response = axios.post(url, data);
      return response;
      // throw new Error('Error, Invalid Credentials');
    } catch (error) {
      console.log(error);
      setAlertSeverity('error');
      setAlertMessage('Error, Invalid Credentials');
      setColorAlert('red');
      setAlert(!alert);
    }
  };
  const loginClickHandler = async (e) => {
    e.preventDefault();
    let Email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    if (Email !== '' && password !== '') {
      let data = await postData('https://doreads-api-dev.onrender.com/auth/login', {
        email: Email,
        password: password
      });
      console.log(data);
      if (data) {
        if (data.data) {
          console.log(data.data);
          try {
            if (data.data.response != 'Incorrect Password') {
              // console.log(data.data.response);
              // localStorage.setItem('user', JSON.stringify(data.data.response));
              window.location.href = '/home';
            } else {
              throw new Error('Error, Invalid Credentials');
            }
          } catch (error) {
            console.log(error);
            setAlertSeverity('error');
            setAlertMessage('Error, Invalid Credentials');
            setColorAlert('#F53636');
            if (alert === false) {
              setAlert(true);
            }
          }
        }
      }
    } else {
      if (Email == '' && password == '') {
        console.log('Please enter Email and password');
        setAlertSeverity('warning');
        setAlertMessage('Please enter Email and password');
        setColorAlert('#E9BD1F');
        if (alert === false) {
          setAlert(true);
        }
      } else if (Email == '') {
        console.log('Please enter Email');
        setAlertSeverity('warning');
        setAlertMessage('Please enter Email');
        setColorAlert('#E9BD1F');
        if (alert === false) {
          setAlert(true);
        }
      } else if (password == '') {
        console.log('Please enter Password');
        setAlertSeverity('warning');
        setAlertMessage('Please enter Password');
        setColorAlert('#E9BD1F');
        if (alert === false) {
          setAlert(true);
        }
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
              <input type="text" id="Email" placeholder="Enter Email" onChange={handleChangeTxt} />
              <img src={userIcon} alt="" className="loginIcon" />
            </div>
            <div className="iconInput">
              <input
                type="password"
                id="Password"
                placeholder="Enter Password"
                onChange={handleChangeTxt}
              />
              <img
                src={passwordIcon}
                alt=""
                className="loginIcon"
                id="passwordIcon"
                onClick={HandlePasswordTxt}
              />
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
          {alert && (
            <AlertComp severity={alertSeverity} message={alertMessage} color={colorAlert} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
