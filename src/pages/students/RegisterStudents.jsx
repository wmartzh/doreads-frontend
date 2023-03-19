import Sidebar from '../../components/SideBar';
import graduated from '../../assets/graduated.svg';
import BootstrapButton from '../../components/btnBlue.jsx';
import '../../styles/Students.css';
import React, { useState } from 'react';
import postStudentData from './SolicitudPostStudent';
import ButtonAppBar from '../../components/Header';
const RegisterStudents = () => {
  const [postDtaStudent, setPostDataStudent] = useState({
    code: '',
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostDataStudent((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(`Input ${name} changed to ${value}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postStudentData(postDtaStudent);
      console.log('La respuesta de la solicitud POST es: ', response);
    } catch (error) {
      console.log('Ocurrio un error al enviar los datos del formularios: ', error);
      setErrors(error);
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
            <ButtonAppBar />
          </div>
          <div className="CenterRegister">
            <div className="AlertStudent">
              <form className="form">
                <div className="studentRegister">
                  <div>
                    <div className="PaddingStudent">
                      <h1 className="TitleRegister">Student Code</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="code"
                          value={postDtaStudent.code}
                          onChange={handleInputChange}
                          id="Code"
                          placeholder="Enter Code"
                        />
                        {errors.code && <span className="ErrorMessage">{errors.code}</span>}
                      </div>
                    </div>
                    <div className="PaddingStudent1">
                      <h1 className="TitleRegister">Student Name</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="name"
                          value={postDtaStudent.name}
                          onChange={handleInputChange}
                          id="Name"
                          placeholder="Enter Name"
                        />
                        {errors.name && <span className="ErrorMessage">{errors.name}</span>}
                      </div>
                    </div>
                    <div className="PaddingStudent2">
                      <h1 className="TitleRegister">Student Email</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="email"
                          value={postDtaStudent.email}
                          onChange={handleInputChange}
                          id="Email"
                          placeholder="Enter Email"
                        />
                        {errors.email && <span className="ErrorMessage">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="PaddingStudent3">
                      <h1 className="TitleRegister">Student Phone</h1>
                      <div className="Input">
                        <input
                          type="text"
                          name="phone"
                          onChange={handleInputChange}
                          value={postDtaStudent.phone}
                          id="Phone"
                          placeholder="Enter Phone"
                        />
                        {errors.phone && <span className="ErrorMessage">{errors.phone}</span>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <img className="ImageStudent" src={graduated} alt="register" />
                  <div className="LogiStudent">
                    <BootstrapButton
                      onClick={handleSubmit}
                      id="LogiStudent"
                      text="Register Student"
                    />
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
