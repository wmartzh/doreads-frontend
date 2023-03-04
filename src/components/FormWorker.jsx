import { useState } from 'react';
import '../styles/Registerworker.css';
import BootstrapButton from '../components/btnBlue.jsx';
import axios from 'axios';
import AlertComp from '../components/Alert.jsx';
import Worker from '../assets/employee.svg';

function Form() {
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
      document.getElementById('Password1').type = 'text';
      setShowPassword(!showPassword);
    } else {
      document.getElementById('Password').type = 'password';
      setShowPassword(!showPassword);
      document.getElementById('Password1').type = 'password';
      setShowPassword(!showPassword);
    }
  };
  const handleChangeTxt = () => {
    if (alert === true) {
      setAlert(!alert);
    }
  };
  const postData = async (url, data) => {
    const data1 = await axios.post(url, {
      name: data['name'],
      email: data['email'],
      password: data['password']
    });
    return data1;
  };

  const RegisterClickHandler = async (e) => {
    e.preventDefault();
    let Email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let name = document.getElementById('Name').value;
    let password1 = document.getElementById('Password1').value;
    if (Email !== '' && password !== '' && name !== '' && password1 !== '') {
      let data1 = await postData('', {
        email: Email,
        password: password,
        name: name
      });

      console.log(data1);
      if (data1) {
        console.log(data1.status);
        window.location.href = '/registerworker';
        setAlertSeverity('success');
        setAlertMessage('Register Worker Success');
        setColorAlert('#259E5D');
      }
    } else {
      if (Email == '' && password == '' && name == '' && password1 == '') {
        console.log('Please enter Email , password , name and confirm password');
        setAlertSeverity('warning');
        setAlertMessage('Please enter Email, password, email and confirm password');
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
      } else if (name == '') {
        console.log('Please enter Name');
        setAlertSeverity('warning');
        setAlertMessage('Please enter Worker Name');
        setColorAlert('#E9BD1F');
        if (alert === false) {
          setAlert(true);
        }
      } else if (password1 == '') {
        console.log('Please enter Confirm Password');
        setAlertSeverity('warning');
        setAlertMessage('Please enter Confirm Password');
        setColorAlert('#E9BD1F');
        if (alert === false) {
          setAlert(true);
        }
      } else if (password !== password1) {
        console.log('Password and confirm password should be same');
        setAlertSeverity('warning');
        setAlertMessage('Password and confirm password should be same');
        setColorAlert('#F53636');
        if (alert === false) {
          setAlert(true);
        }
      }
    }
  };
  return (
    <div className="">
      <div className="">
        <form id="form1">
          <div className="textFields1">
            <h1 className="Label">Worker Name</h1>
            <input
              className="input1"
              type="text"
              id="Name"
              placeholder="Enter Name of Worker"
              onChange={handleChangeTxt}
            />
            <h1 className="Label">Worker Email</h1>
            <input
              className="input1"
              type="text"
              id="Email"
              placeholder="Enter Email of Worker"
              onChange={handleChangeTxt}
            />
            <h2 className="Label">Worker Password</h2>
            <input
              className="input1"
              type="password"
              id="Password"
              placeholder="Enter Password of Worker"
              onChange={handleChangeTxt}
            />
            <h2 className="Label">Confirm Worker Password</h2>
            <input
              className="input1"
              type="password"
              id="Password1"
              placeholder="Confirm Worker Password"
              onChange={handleChangeTxt}
            />
            <div className="mensaje">
              <p onClick={HandlePasswordTxt} className="show">
                Show Passwords
              </p>
            </div>
          </div>
          <div className="textFields2">
            <img src={Worker} className="Worker1"></img>
            <BootstrapButton type="submit" text="Login" onClick={RegisterClickHandler} />
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
}
export default Form;
