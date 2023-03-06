import Sidebar from '../../components/SideBar';
import graduated from '../../assets/graduated.svg';

const RegisterStudents = () => {
  return (
    <div className="RegiserStuden">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="ViewRegisterStudent">
        <div className="HeaderStudent">
          <h1 className="Title">Register Student</h1>
        </div>
        <div className="BodyStuden">
          <div className="AlertStudent">
            <form className="form">
              <div className="studentRegister">
                <div>
                  <div className="PaddingStudent">
                    <h1 className="TitleRegister">Student Name</h1>
                    <div className="Input">
                      <input type="text" id="Name" placeholder="Enter Name" required />
                    </div>
                  </div>
                  <div className="PaddingStudent1">
                    <h1 className="TitleRegister">Student Last Name</h1>
                    <div className="Input">
                      <input type="text" id="Last Name" placeholder="Enter Last Name" required />
                    </div>
                  </div>
                  <div className="PaddingStudent2">
                    <h1 className="TitleRegister">Student Email</h1>
                    <div className="Input">
                      <input type="text" id="Email" placeholder="Enter Email" required />
                    </div>
                  </div>
                  <div className="PaddingStudent3">
                    <h1 className="TitleRegister">Student Phone</h1>
                    <div className="Input">
                      <input type="text" id="Phone" placeholder="Enter Phone" required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <img className="ImageStudent" src={graduated} alt="register" />
                <button className="LogiStudent" type="submit" id="RegisterButton">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterStudents;
