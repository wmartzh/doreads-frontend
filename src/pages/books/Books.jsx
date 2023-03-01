import Sidebar from '../../components/SideBar';
import Items from '../../components/Stack';
import '../../styles/Books.css';

const Book = () => {
  return (
    <div className="body">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="Cont">
        <div className="Books">
          <Items text1="Import Book" text2="On Loan" text3="Register Book" />
        </div>
        <div className="DescBooks">
          <h1 className="Title">Description</h1>
        </div>
      </div>
    </div>
  );
};
export default Book;
