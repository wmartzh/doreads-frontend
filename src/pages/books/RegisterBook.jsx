import Form from '../../components/Form';
import '../../styles/Registerbook.css';
import InputLabel from '../../components/Label';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DatePickerComp from '../../components/DatePicker';
// import { DatePicker } from '@mui/x-date-pickers';
// import DatePickerComp from '../../components/DatePicker';
// import Button from '../../components/Button';
// import createBook from '../../services/book';
const RegisterBook = () => {
  return (
    <div className="ContMain">
      <div className="ContHeader">
        <Header TitlePage="Register Book"></Header>
      </div>
      <div className="ContForm">
        <Form width="60%">
          <div className="textFields1">
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
            <DatePickerComp label="Year" />
            <InputLabel InputLabel="Category"></InputLabel>
            <InputLabel InputLabel="Language"></InputLabel>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default RegisterBook;
