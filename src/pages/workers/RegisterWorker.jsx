import Sidebar from '../../components/SideBar';
import '../../styles/Registerworker.css';

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
          <h1 className="Title">FORM COMPONENT</h1>
        </div>
      </div>
    </div>
  );
};
export default Book;
