import Sidebar from '../../components/SideBar';
import registerstu from '../../assets/registerstu.svg';
const RegisterStudents = () => {
  return (
    <div className="RegiserStuden">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="ViewRegisterStudent">
        <form className="form">
          <div className="studentRegister">
            <div>
              <div className="PaddingStudent">
                <h1 className="TitleRegister">Student Name</h1>
                <div className="Input">
                  <input type="text" id="Email" placeholder="Enter Name" />
                </div>
              </div>
              <div className="PaddingStudent1">
                <h1 className="TitleRegister">Student Last Name</h1>
                <div className="Input">
                  <input type="text" id="Last Name" placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="PaddingStudent2">
                <h1 className="TitleRegister">Student Email</h1>
                <div className="Input">
                  <input type="text" id="Email" placeholder="Enter Email" />
                </div>
              </div>
              <div className="PaddingStudent3">
                <h1 className="TitleRegister">Student Phone</h1>
                <div className="Input">
                  <input type="text" id="Phone" placeholder="Enter Phone" />
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <img className="LogiStudent" src={registerstu} />
            <button className="LogiStudent" type="submit" id="RegisterButton">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterStudents;
