import Form from '../../components/Form';
import '../../styles/Registerbook.css';
import InputLabel from '../../components/Label';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DatePickerComp from '../../components/DatePicker';
import Button from '../../components/Button';
import BasicSelect from '../../components/Select';
import { collectBookData } from '../../services/book';
const RegisterBook = () => {
  const Categoria = ['Ficcion', 'Ciencia', 'Arte', 'Tecnologia', 'Ingenieria y Matematicas'];
  const Idiomas = ['ES', 'ENG'];
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
              colorHover="#394c73"
              id="BookISBN"
              placeholder="Enter ISBN"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Title"></InputLabel>
            <Input
              height="44px"
              width="100%"
              colorHover="#394c73"
              id="BookTitle"
              placeholder="Enter Title"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Author"></InputLabel>
            <Input
              height="44px"
              width="100%"
              colorHover="#394c73"
              id="BookAuthor"
              placeholder="Enter Author"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Picture"></InputLabel>
            <Input
              height="44px"
              width="100%"
              colorHover="#394c73"
              id="BookPicture"
              placeholder="Enter Picture URL"
              type="text"
              variant="outlined"
            />
            <InputLabel InputLabel="Editorial"></InputLabel>
            <Input
              height="44px"
              width="100%"
              colorHover="#394c73"
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
              colorHover="#394c73"
              width="70%"
              height="44px"
              margin="15px 0px 0px 0px"
              onClick={() => collectBookData()}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default RegisterBook;
