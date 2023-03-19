import Items from '../../components/StackItems';
import ImportBook from '../../assets/online-learning.svg';
import Loan from '../../assets/education1.svg';
import Register from '../../assets/education2.svg';
import '../../styles/Books.css';

const Book = () => {
  return (
    <>
      <div className="ContentBooks">
        <div className="Books">
          <Items
            title="Books"
            href1="/importbook"
            href2="/loanedbooks"
            href3="/registerbook"
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
    </>
  );
};
export default Book;
