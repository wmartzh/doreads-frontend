import Sidebar from '../../components/SideBar';
import '../../styles/Home.css';
import worker from '../../assets/employee.svg';
import catalog from '../../assets/service.svg';
import file from '../../assets/documents.svg';
import BtnBlue from '../../components/BtnBlue2';
import BtnYellow from '../../components/BtnYellow';

const home = () => {
  return (
    <div className="body">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="cont">
        <div className="SearchCont">
          <div className="Welcome">
            <h1 className="Title">Hi, Welcome back</h1>
            <h4 className="Desc">
              The book catalog is waiting for you, by clicking the button go directly to it and
              Manage your books
            </h4>
            <div className="BtnPos">
              <BtnBlue href={'/search'} text="Search"></BtnBlue>
            </div>
          </div>
          <div className="ImageBook">
            <img className="IconBook" src={catalog}></img>
          </div>
        </div>
        <div className="Cont2">
          <div className="RegisterWorker">
            <h2 className="Title1">Register New Worker</h2>
            <img className="Worker" src={worker}></img>
            <div className="DescWork">
              <h4 className="Desc">
                This software is guaranteed to do the heavy lifting for you when it comes to
                onboarding a new team member.
              </h4>
            </div>
            <BtnYellow href={'/registerworker'} text="Register"></BtnYellow>
          </div>
          <div className="Software">
            <h1 className="Title1">Software Overview</h1>
            <img className="Search" src={file}></img>
            <div className="DescWork">
              <h4 className="Desc2"> Student Management Registration of Fines Book Management</h4>
            </div>
            <BtnYellow href={'/View'} text="View"></BtnYellow>
          </div>
        </div>
      </div>
    </div>
  );
};
export default home;
