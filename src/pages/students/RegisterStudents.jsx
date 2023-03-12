import Sidebar from '../../components/SideBar';
import graduated from '../../assets/graduated.svg';
import BootstrapButton from '../../components/btnBlue.jsx';
import '../../styles/Students.css';
import React from 'react';
import axios from 'axios';
const RegisterStudents = () => {
  const [postStudent, setPostStudent] = React.useState({
    code: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostStudent((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/student/register', postStudent);
      console.log('No resivo nada' + response);
    } catch (error) {
      console.log('No funciono y no estou pasando por axios' + error);
    }
  };

  return (
    <div className="RegiserStuden">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="ViewRegisterStudent">
        <div className="BodyStuden">
          <div className="HeaderStudent">
            <h1 className="Title">Register Student</h1>
          </div>
          <div className="CenterRegister">
            <div className="AlertStudent">
              <form onSubmit={handleSubmit} className="form">
                <div className="studentRegister">
                  <div>
                    <div className="PaddingStudent">
                      <h1 className="TitleRegister">Student Code</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="code"
                          value={postStudent.code}
                          onChange={handleInputChange}
                          id="Code"
                          placeholder="Enter Code"
                        />
                      </div>
                    </div>
                    <div className="PaddingStudent1">
                      <h1 className="TitleRegister">Student Name</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="name"
                          value={postStudent.name}
                          onChange={handleInputChange}
                          id="Name"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="PaddingStudent2">
                      <h1 className="TitleRegister">Student Email</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="email"
                          value={postStudent.email}
                          onChange={handleInputChange}
                          id="Email"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="PaddingStudent3">
                      <h1 className="TitleRegister">Student Phone</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="phone"
                          onChange={handleInputChange}
                          value={postStudent.phone}
                          id="Phone"
                          placeholder="Enter Phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <img className="ImageStudent" src={graduated} alt="register" />
                  <div className="LogiStudent">
                    <BootstrapButton type="submit" id="LogiStudent" text="Register Student" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterStudents;
