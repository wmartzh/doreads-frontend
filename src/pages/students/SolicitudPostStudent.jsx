import axios from 'axios';
import * as yup from 'yup';
import studentSchema from './studentSchema';
const baseURL = `${process.env.REACT_APP_API_HOST}/student/register`;
const postStudentData = async (data) => {
  const token = localStorage.getItem('token');
  try {
    await studentSchema.validate(data, { abortEarly: false });
    const response = await axios.post(`${baseURL}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('La respuesta de la solicitud POST es: ', response);
    return response;
  } catch (error) {
    console.log('Ocurrió un error durante la solicitud POST: ', error);
    if (error instanceof yup.ValidationError) {
      throw error.inner.reduce((acc, val) => ({ ...acc, [val.path]: val.message }), {});
    }
    throw error;
  }
};
export default postStudentData;
