import dodi from '../../assets/2.svg';
import '../../styles/login.css';
const Login = () => {
  return (
    <div className="body">
      <div className="content">
        <form action="" id="form">
          <img src={dodi} alt="" id="logoForm" />
          <input type="text" id="Username" />
          <input type="password" id="Password" />
        </form>
      </div>
    </div>
  );
};
export default Login;
