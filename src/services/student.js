import axios from './axios';
import * as yup from 'yup';
const studentsBase = '/student';
const postDataStudenRegister = '/student/register';

export async function getStudents(page, perPage, sortOptions) {
  try {
    const response = await axios.get(
      `${studentsBase}?order=${sortOptions.order}&sort=${sortOptions.sort}&page=${
        page + 1
      }&limit=${perPage}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

export const postStudentData = async (data) => {
  const token = localStorage.getItem('token');
  try {
    await studentSchema.validate(data, { abortEarly: false });
    const response = await axios.post(`${postDataStudenRegister}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('La respuesta de la solicitud POST es: ', response);
    return response;
  } catch (error) {
    console.log('Ocurrió un error durante la solicitud POST: ', error);
    if (error instanceof yup.ValidationError) {
      error.inner.reduce((acc, val) => ({ ...acc, [val.path]: val.message }), {});
    }
    throw error;
  }
};
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
