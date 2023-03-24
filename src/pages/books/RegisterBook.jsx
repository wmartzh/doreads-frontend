import Form from '../../components/Form';

import Header from '../../components/Header';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import createBook from '../../services/book';
const RegisterBook = () => {
  return (
    <div className="ContMain">
      <div className="ContHeader">
        <Header TitlePage="Register Book"></Header>
      </div>
      <div className="ContForm">
        <Form width="60%"></Form>
      </div>
    </div>
  );
};
export default RegisterBook;
