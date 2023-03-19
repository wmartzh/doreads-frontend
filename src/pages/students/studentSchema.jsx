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
export default studentSchema;
