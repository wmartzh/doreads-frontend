import Form from '../../components/Form';
import '../../styles/Registerworker.css';
import InputLabel from '../../components/Label';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Worker from '../../assets/employee.svg';
import Button from '../../components/Button';
import { createWorker } from '../../services/Worker';
import { useEffect, useState } from 'react';
import Snackbar from '../../components/SnackBar';
import Alert from '../../components/AlertTest';

const Work = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [severity, setSeverity] = useState('');

  useEffect(() => {}, [email, password, name, ConfirmPassword, alert, severity, open]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const loginClickHandler = async (e) => {
    e.preventDefault();
    setAlert('');
    setSeverity('');

    if (ConfirmPassword == '') {
      setOpenSnackbar(true);
      setSeverity('warning');
      setAlert('Please enter Confirm Password');
    }
    if (password != ConfirmPassword) {
      setAlert('Password and Confirm Password not match');
      setOpenSnackbar(true);
      setSeverity('error');
    } else {
      const { data, error } = await createWorker({ email, password, name }, setAlert);
      if (data) {
        setAlert(data.message);
        setOpenSnackbar(true);
        setSeverity('success');
      }
      if (error.status == 400) {
        setAlert(error.data.error);
        setOpenSnackbar(true);
        setSeverity('warning');
      }
      if (error.status == 401) {
        setAlert('Invalid Credentials');
        setOpenSnackbar(true);
      }
    }
  };

  return (
    <>
      <div className="ContMain">
        <div className="ContHeader">
          <Header TitlePage="Register Worker"></Header>
        </div>
        <div className="ContForm">
          <Form width="60%">
            <div className="textFields1">
              <InputLabel InputLabel="Worker Name"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorhover="#394c73"
                id="WorkerName"
                placeholder="Worker Name"
                type="text"
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <InputLabel InputLabel="Worker Email"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorhover="#394c73"
                id="WorkerEmail"
                placeholder="Enter Worker Email"
                type="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <InputLabel InputLabel="Worker Password"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorhover="#394c73"
                id="WorkerPassword"
                placeholder="Enter Worker Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputLabel InputLabel="Confirm Worker Password"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorhover="#394c73"
                id="ConfirmPassword"
                placeholder="Enter Confirm Password"
                type="password"
                variant="outlined"
                value={ConfirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <div className="textFields2">
              <div className="Center">
                <img src={Worker} className="Worker1"></img>
                <div className="CenterButton">
                  <Button
                    height="44px"
                    width="230px"
                    type="submit"
                    margin="auto"
                    color="#394C73"
                    colorHover="#2E3E5C"
                    TextInButton="Register"
                    onClick={loginClickHandler}
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={1700}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
            {alert}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};
export default Work;
