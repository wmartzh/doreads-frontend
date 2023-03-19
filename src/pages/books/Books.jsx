import Items from '../../components/StackItems';
import ImportBook from '../../assets/online-learning.svg';
import Loan from '../../assets/education1.svg';
import Register from '../../assets/education2.svg';
import '../../styles/Books.css';
import TextDesc from '../../components/Texts';

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
          <TextDesc
            color="#394C73"
            TextTitle="Import Book"
            TextParagraph="In this section you can
            import a book manually with all
            their corresponding fields, the
            system will verify your peace of mind."
            TextTitle2="On Loan"
            TextParagraph2="In this section you can see
            the books that are on loan and
            the student who has them."
            TextTitle3="Register Book"
            TextParagraph3="In this section you can register a book manually with all
            its corresponding fields, the system will verify your peace of mind"></TextDesc>
        </div>
      </div>
    </>
  );
};
export default Book;
