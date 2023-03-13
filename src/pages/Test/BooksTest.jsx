import Sidebar from '../../components/SideBar';
import Items from '../../components/StackItems';
import ImportBook from '../../assets/online-learning.svg';
import Loan from '../../assets/education1.svg';
import Register from '../../assets/education2.svg';
import '../../styles/Books.css';

const Book = () => {
  return (
    <div className="body">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="Cont">
        <div className="Books">
          <Items
            color="#394C73"
            TextFirstItem="Import Book"
            TextSecondItem="On Loan"
            TextThirdItem="Register Book"
            ImageFirstItem={ImportBook}
            ImageSecondItem={Loan}
            ImageThirdItem={Register}
          />
        </div>
        <div className="DescBooks">
          <h1 className="Title">Description</h1>
        </div>
      </div>
    </div>
  );
};
export default Book;
