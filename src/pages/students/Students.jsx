import Items from '../../components/StackItems';
import RegisterStudent from '../../assets/registerstu.svg';
import Penalty from '../../assets/multa.svg';
import SeeStudent from '../../assets/graduated2.svg';
import TextDesc from '../../components/Texts';

const Students = () => {
  return (
    <>
      <div className="ContentStudents">
        <div className="Students">
          <Items
            title="Students"
            href1="/registerstudents"
            href2="/fines"
            href3="/studentsoverview"
            color="#E9BD1F"
            TextFirstItem="Register Student"
            TextSecondItem="Penalty Fee"
            TextThirdItem="View Students"
            ImageFirstItem={RegisterStudent}
            ImageSecondItem={Penalty}
            ImageThirdItem={SeeStudent}
          />
        </div>
        <div className="DescStudents">
          <h1 className="Title">Description</h1>
          <TextDesc
            color="#E9BD1F"
            TextTitle="Register Student"
            TextParagraph="In this section you 
            can register a student manually with
             all their corresponding fields, 
            the system will verify your peace of mind."
            TextTitle2="Penalty Fee"
            TextParagraph2="In this section you can
              see the students who have a penalty
                and the amount of the penalty."
            TextTitle3="View Students"
            TextParagraph3="In this section you can see
              all the students registered in the system."></TextDesc>
        </div>
      </div>
    </>
  );
};
export default Students;
