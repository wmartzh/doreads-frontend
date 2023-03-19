import graduated from '../../assets/graduated.svg';
import BootstrapButton from '../../components/btnBlue.jsx';
import '../../styles/Students.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const studentSchema = yup.object().shape({
  code: yup
    .string()
    .matches(/^\d{4}-\d{4}$/, 'Invalid student code')
    .required(),
  name: yup.string().required('Please enter a name'),
  email: yup.string().email('Invalid email address').required('Please enter an email'),
  phone: yup
    .string()
    .matches(/^\+\d{1,3}\s\d{3,14}$/, 'Invalid phone number')
    .required()
});
const RegisterStudents = () => {
  const [postStudent, setPostStudent] = useState({
    code: '',
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
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
    console.log(`Input ${name} changed to ${value}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await studentSchema.validate(postStudent, { abortEarly: false });
      setErrors({});
      const response = await axios.post('http://localhost:8000/student/register', postStudent, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('La respuesta de la solicitud POST es: ', response);
    } catch (error) {
      console.log('Ocurrió un error durante la solicitud POST: ', error);
      if (error instanceof yup.ValidationError) {
        setErrors(error.inner.reduce((acc, val) => ({ ...acc, [val.path]: val.message }), {}));
      }
    }
  };

  return (
    <div className="RegiserStuden">
      <div className="ViewRegisterStudent">
        <div className="BodyStuden">
          <div className="HeaderStudent">
            <h1 className="Title">Register Student</h1>
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
                          value={postStudent.code}
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
                          value={postStudent.name}
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
                          value={postStudent.email}
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
                          value={postStudent.phone}
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
