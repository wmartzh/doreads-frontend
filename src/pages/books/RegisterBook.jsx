import Form from '../../components/Form';
import '../../styles/Registerbook.css';
import InputLabel from '../../components/Label';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DatePickerComp from '../../components/DatePicker';
import Button from '../../components/Button';
import BasicSelect from '../../components/Select';
import AlertComp from '../../components/Alert';
import { bookSchema } from '../../models/BookModels';
import { createBook } from '../../services/book';
import { useState, useEffect } from 'react';
import BookList from '../../components/BookList';
const RegisterBook = () => {
  const [books, setBooks] = useState([]);
  const saveBooksToLocalStorage = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };
  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);
  const handleSelectCategory = (newValue) => {
    setBookCategory(newValue);
  };
  const handleSelectLanguage = (newValue) => {
    setBookLanguage(newValue);
  };
  const handleDatePicker = (newValue) => {
    setBookYear(newValue);
  };
  const ValidateBook = async (book) => {
    const value = await bookSchema.validate(book);
    return value;
  };
  const [file, setFile] = useState(null);
  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };
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
    document.getElementById('formLibro').reset();
  };
  useEffect(() => {}, [
    BookTitle,
    BookAuthor,
    BookISBN,
    BookCategory,
    BookYear,
    BookPicture,
    BookEditorial,
    BookLanguage
  ]);
  function handleAddCopy(method) {
    try {
      console.log('CLICKED');
      const book = {
        title: BookTitle,
        author: BookAuthor,
        isbn: BookISBN,
        category: BookCategory,
        year: BookYear,
        editorial: BookEditorial,
        language: BookLanguage
      };
      if (file) {
        book.picture = file;
      }
      if (ValidateBook(book)) {
        console.log(ValidateBook(book));
        console.log('VALID BOOK');
        setBooks([...books, book]);
        resetForm();
      } else {
        throw new Error('Missing Fields or Invalid Fields');
      }
    } catch (error) {
      method({ isOpen: true, message: `${error.message}`, severity: 'error' });
    }
  }
  async function collectBookData(method) {
    try {
      const book = {
        title: BookTitle,
        author: BookAuthor,
        isbn: BookISBN,
        category: BookCategory,
        year: BookYear,
        editorial: BookEditorial,
        language: BookLanguage
      };
      console.log(book);
      if (file) {
        book.picture = file;
      }
      if (ValidateBook(book)) {
        try {
          const ApiCall = await createBook(book);
          console.log(ApiCall);
          if (ApiCall.status === 200) {
            method({ isOpen: true, message: 'Book Created', severity: 'success' });
            resetForm();
          } else {
            method({
              isOpen: true,
              message: `Error Creating Book (${ApiCall.status})`,
              severity: 'error'
            });
          }
        } catch (error) {
          throw new Error('Error Creating Book');
        }
      } else {
        throw new Error('Missing Fields');
      }
    } catch (error) {
      console.log(error);
      if (error.message === 'Missing Fields') {
        method({ isOpen: true, message: 'Missing Fields', severity: 'error' });
      } else {
        method({ isOpen: true, message: 'Error Creating Book', severity: 'error' });
      }
    }
  }
  const handleDeleteBook = (id) => {
    console.log(`Clicked Card with index: ${id}`);
    setBooks(books.filter((book, index) => index !== id));
    console.log(books);
    saveBooksToLocalStorage(books);
  };
  const Categoria = ['Ficcion', 'Ciencia', 'Arte', 'Tecnologia', 'Ingenieria y Matematicas'];
  const Idiomas = ['ES', 'ENG'];
  const [alert, setAlert] = useState({ isOpen: false, message: '', severity: 'success' });
  return (
    <div className="ContMain">
      <div className="ContHeader">
        <Header TitlePage="Register Book"></Header>
      </div>
      <div className="ContForm">
        <Form width="60%" id="formLibro">
          <div className="textFields1">
            <InputLabel InputLabel="ISBN"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookISBN"
              placeholder="Enter ISBN"
              type="text"
              variant="outlined"
              onChange={(e) => setBookISBN(e.target.value)}
            />
            <InputLabel InputLabel="Title"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookTitle"
              placeholder="Enter Title"
              type="text"
              variant="outlined"
              onChange={(e) => setBookTitle(e.target.value)}
            />
            <InputLabel InputLabel="Author"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookAuthor"
              placeholder="Enter Author"
              type="text"
              variant="outlined"
              onChange={(e) => setBookAuthor(e.target.value)}
            />
            <InputLabel InputLabel="Picture (Optional)"></InputLabel>
            <Input
              type="file"
              id="BookPicture"
              inputProps={{ accept: 'image/jpeg, image/png' }}
              onChange={handleFileUpload}
            />
            <InputLabel InputLabel="Editorial"></InputLabel>
            <Input
              height="44px"
              width="100%"
              id="BookEditorial"
              placeholder="Enter Editorial"
              type="text"
              variant="outlined"
              onChange={(e) => setBookEditorial(e.target.value)}
            />
          </div>
          <div className="textFields2">
            <InputLabel InputLabel="Year"></InputLabel>
            <DatePickerComp label="Year" dpickerId="BookYear" onChange={handleDatePicker} />
            <InputLabel InputLabel="Category"></InputLabel>
            <BasicSelect
              label="Category"
              options={Categoria}
              width="50%"
              selectId="BookCategory"
              onChange={handleSelectCategory}
            />
            <InputLabel InputLabel="Language"></InputLabel>
            <BasicSelect
              label="Language"
              options={Idiomas}
              width="50%"
              selectId="BookLanguage"
              onChange={handleSelectLanguage}
            />
            <Button
              TextInButton="Register Book"
              color="#394c73"
              width="70%"
              height="44px"
              margin="15px 0px 0px 0px"
              onClick={() => collectBookData(setAlert)}
            />
            <Button
              TextInButton="Add Copy"
              color="#394c73"
              width="40%"
              height="44px"
              margin="15px 0px 0px 0px"
              onClick={() => handleAddCopy(setAlert)}
            />
          </div>
        </Form>
        <div className="ContTable">
          <BookList books={books} handleDeleteBook={handleDeleteBook} />
        </div>
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
