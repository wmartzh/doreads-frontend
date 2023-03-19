import Form from '../../components/Form';
import '../../styles/Registerworker.css';
import InputLabel from '../../components/Label';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Worker from '../../assets/employee.svg';
import Button from '../../components/Button';

const Book = () => {
  return (
    <>
      <div className="ContMain">
        <div className="ContHeader">
          <Header TitlePage="Register Worker"></Header>
        </div>
        <div className="ContForm">
          <Form width="60%">
            <div className="textFields1">
              <InputLabel InputLabel="Worker Name"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorHover="#394c73"
                id="WorkerName"
                placeholder="Worker Name"
                type="text"
                variant="outlined"
              />
              <InputLabel InputLabel="Worker Email"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorHover="#394c73"
                id="WorkerEmail"
                placeholder="Enter Worker Email"
                type="Email"
                variant="outlined"
              />
              <InputLabel InputLabel="Worker Password"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorHover="#394c73"
                id="WorkerPassword"
                placeholder="Enter Worker Password"
                type="password"
                variant="outlined"
              />
              <InputLabel InputLabel="Confirm Worker Password"></InputLabel>
              <Input
                height="44px"
                width="100%"
                colorHover="#394c73"
                id="ConfirmPassword"
                placeholder="Enter Confirm Password"
                type="password"
                variant="outlined"
              />
            </div>
            <div className="textFields2">
              <div className="Center">
                <img src={Worker} className="Worker1"></img>
                <div className="CenterButton">
                  <Button
                    height="44px"
                    width="230px"
                    type="submit"
                    margin="auto"
                    color="#394C73"
                    colorHover="#2E3E5C"
                    TextInButton="Register"
                    onClick={console.log('register')}
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Book;
