import Sidebar from '../../components/SideBar';
import Form from '../../components/Form';
import '../../styles/Registerworker.css';
import worker from '../../assets/employee.svg';

const Book = () => {
  return (
    <div className="body">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="ContMain">
        <div className="ContHeader">
          <h1 className="Title">HEADER</h1>
        </div>
        <div className="ContForm">
          <Form
            FirstInputTitleText="Worker Name"
            FirstInputholder="Worker Name"
            SecondInputTitleText="Worker Email"
            SecondInputholder="Worker Email"
            ThirdInputTitleText="Worker Password"
            ThirdInputholder="Worker Password"
            FourthInputTitleText="Confirm Worker Password"
            FourthInputholder="Confirm Password"
            ImageForm={worker}
            colorButton="#394C73"
            colorHoverButton="#2E3E5C"
            colorHover="#2E3E5C"
          />
        </div>
      </div>
    </div>
  );
};
export default Book;
