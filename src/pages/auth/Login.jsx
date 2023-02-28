import logo from '../../assets/2.svg';
import userIcon from '../../assets/user.svg';
import passwordIcon from '../../assets/password.svg';
import '../../styles/login.css';
// import axiosApiInstance from '../../components/tokenIntercept';
const Login = () => {
  const postData = async (url, data) => {
    console.log('url', url);
    // const response = await axiosApiInstance.post(url, data);.
    const response = 'hola mundo' + data;
    return response;
  };
  const loginClickHandler = async (e) => {
    e.preventDefault();
    console.log('login');
    let email = document.getElementById('Username').value;
    let password = document.getElementById('Password').value;
    let data = await postData('', { email: email, password: password });
    console.log(data);
    if (data) {
      if (data.data) {
        console.log(data.data);
        if (data.data.response != 'Incorrect Password') {
          console.log(data.data.response);
          localStorage.setItem('user', JSON.stringify(data.data.response));
          window.location.href = '/home';
        } else {
          alert('Incorrect Password');
        }
      }
    }
  };
  return (
    <div className="body">
      <div className="content">
        <form onSubmit={loginClickHandler} id="form">
          <img src={logo} alt="" id="logoForm" />
          <div className="iconInput">
            <input type="text" id="Username" placeholder="Enter Username" />
            <img src={userIcon} alt="" className="loginIcon" />
          </div>
          <div className="iconInput">
            <input type="password" id="Password" placeholder="Enter Password" />
            <img src={passwordIcon} alt="" className="loginIcon" />
          </div>
          <input type="submit" id="login" />
        </form>
      </div>
    </div>
  );
};
export default Login;
