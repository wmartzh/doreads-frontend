import graduated from '../../assets/graduated.svg';
import BootstrapButton from '../../components/btnBlue.jsx';
import Input from '../../components/Input.jsx';
import Form from '../../components/Form';
import Header from '../../components/Header';
import '../../styles/Students.css';
import InputLabel from '../../components/Label';
import React, { useState } from 'react';
import { postStudentData } from '../../services/student';

const RegisterStudents = () => {
  const [postDataStudent, setPostDataStudent] = useState({
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
      const response = await postStudentData(postDataStudent);
      console.log('La respuesta de la solicitud POST es: ', response);
    } catch (error) {
      console.log('Ocurrio un error al enviar los datos del formulario: ', error);
      setErrors(error);
    }
  };

  return (
    <>
      <Header />
      <div className="CenterRegister">
        <Form width="60%">
          <div className="textImputado">
            <InputLabel InputLabel="Enter code"></InputLabel>
            <Input
              type="text"
              name="code"
              value={postDataStudent.code}
              onChange={handleInputChange}
              id="Code"
              placeholder="Enter Code"
            />
            {errors.code && <span className="ErrorMessage">{errors.code}</span>}
            <InputLabel InputLabel="Enter name"></InputLabel>
            <Input
              type="text"
              name="name"
              value={postDataStudent.name}
              onChange={handleInputChange}
              id="Name"
              placeholder="Enter Name"
            />
            {errors.name && <span className="ErrorMessage">{errors.name}</span>}
            <InputLabel InputLabel="Enter email"></InputLabel>
            <Input
              type="text"
              name="email"
              value={postDataStudent.email}
              onChange={handleInputChange}
              id="Email"
              placeholder="Enter Email"
            />
            {errors.email && <span className="ErrorMessage">{errors.email}</span>}
            <InputLabel InputLabel="Enter phone"></InputLabel>
            <Input
              type="text"
              name="phone"
              onChange={handleInputChange}
              value={postDataStudent.phone}
              id="Phone"
              placeholder="Enter Phone"
            />
            {errors.phone && <span className="ErrorMessage">{errors.phone}</span>}
          </div>
          <div className="buttons">
            <img className="ImageStudent" src={graduated} alt="register" />
            <div className="LogiStudent">
              <BootstrapButton onClick={handleSubmit} id="LogiStudent" text="Register Student" />
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};
export default RegisterStudents;
