import Sidebar from '../../Components/SideBar';
import Items from '../../Components/Stack2';
import '../../styles/Students.css';

const Student = () => {
  return (
    <div className="body">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="Cont">
        <div className="DescStudents">
          <h1 className="Title">Description</h1>
        </div>
        <div className="Students">
          <Items text1="Register Students" text2="Penalty Fee" text3="See Student" />
        </div>
      </div>
    </div>
  );
};
export default Student;