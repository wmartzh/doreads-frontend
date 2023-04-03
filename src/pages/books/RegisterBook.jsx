import Form from '../../components/Form';
import '../../styles/Registerbook.css';
import InputLabel from '../../components/Label';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DatePickerComp from '../../components/DatePicker';
import Button from '../../components/Button';
import BasicSelect from '../../components/Select';
import AlertComp from '../../components/Alert';
import { ValidateBook } from '../../services/book';
import { useState } from 'react';
const RegisterBook = () => {
  const [BookTitle, setBookTitle] = useState('');
  const [BookAuthor, setBookAuthor] = useState('');
  const [BookISBN, setBookISBN] = useState('');
  const [BookCategory, setBookCategory] = useState('');
  const [BookYear, setBookYear] = useState('');
  const [BookPicture, setBookPicture] = useState('');
  const [BookEditorial, setBookEditorial] = useState('');
  const [BookLanguage, setBookLanguage] = useState('');
  const resetForm = () => {
    setBookTitle('');
    setBookAuthor('');
    setBookISBN('');
    setBookCategory('');
    setBookYear('');
    setBookPicture('');
    setBookEditorial('');
    setBookLanguage('');
  };
  async function collectBookData(method) {
    try {
      const book = {
        title: document.getElementById('BookTitle').value,
        author: document.getElementById('BookAuthor').value,
        isbn: document.getElementById('BookISBN').value,
        category: document.getElementById('BookCategory').innerHTML.toString(),
        year: document.getElementById('BookYear').getAttribute('value'),
        picture: document.getElementById('BookPicture').value,
        editorial: document.getElementById('BookEditorial').value,
        language: document.getElementById('BookLanguage').innerHTML.toString()
      };
      if (ValidateBook(book)) {
        try {
          const ApiCall = await createBook(book);
          console.log(ApiCall);
          if (ApiCall.status === 200) {
            method({ isOpen: true, message: 'Book Created', severity: 'success' });
          } else if (ApiCall.response.status === 400) {
            method({ isOpen: true, message: 'Book Already Exists', severity: 'error' });
          } else {
            method({ isOpen: true, message: 'Error Creating Book', severity: 'error' });
          }
        } catch (error) {
          throw new Error('Error Creating Book');
        }
      } else {
        throw new Error('Missing Fields');
      }
    } catch (error) {
      if (error.message === 'Missing Fields') {
        method({ isOpen: true, message: 'Missing Fields', severity: 'error' });
      } else {
        method({ isOpen: true, message: 'Error Creating Book', severity: 'error' });
      }
    }
  }
  const Categoria = ['Ficcion', 'Ciencia', 'Arte', 'Tecnologia', 'Ingenieria y Matematicas'];
  const Idiomas = ['ES', 'ENG'];
  const [alert, setAlert] = useState({ isOpen: false, message: '', severity: 'success' });
  return (
    <div className="ContMain">
      <div className="ContHeader">
        <Header TitlePage="Register Book"></Header>
      </div>
      <div className="ContForm">
        <Form width="60%">
          <div className="textFields1">
            <InputLabel InputLabel="ISBN"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookISBN"
              placeholder="Enter ISBN"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Title"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookTitle"
              placeholder="Enter Title"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Author"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookAuthor"
              placeholder="Enter Author"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Picture"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookPicture"
              placeholder="Enter Picture URL"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Editorial"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookEditorial"
              placeholder="Enter Editorial"
              type="text"
              variant="outlined"
            />
          </div>
          <div className="textFields2">
            <InputLabel InputLabel="Year"></InputLabel>
            <DatePickerComp label="Year" dpickerId="BookYear" />
            <InputLabel InputLabel="Category"></InputLabel>
            <BasicSelect label="Category" options={Categoria} width="50%" selectId="BookCategory" />
            <InputLabel InputLabel="Language"></InputLabel>
            <BasicSelect label="Language" options={Idiomas} width="50%" selectId="BookLanguage" />
            <Button
              TextInButton="Register Book"
              color="#394c73"
              width="70%"
              height="44px"
              margin="15px 0px 0px 0px"
              onClick={() => collectBookData(setAlert)}
            />
          </div>
        </Form>
        <div className="errorContainer">
          {alert.isOpen && (
            <AlertComp
              message={alert.message}
              severity={alert.severity}
              onClose={() => setAlert({ isOpen: false, message: '', severity: '' })}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default RegisterBook;
