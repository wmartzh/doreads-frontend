import '../../styles/Home.css';
import worker from '../../assets/employee.svg';
import catalog from '../../assets/service.svg';
import file from '../../assets/documents.svg';
import ModalView from '../../components/ModalView';
import Button from '../../components/Button';

const home = () => {
  return (
    <>
      <div className="Cont2">
        <div className="SearchCont">
          <div className="Welcome">
            <h1 className="Title1">Hi, Welcome back</h1>
            <h4 className="Desc">
              The book catalog is waiting for you, by clicking the button go directly to it and
              Manage your books
            </h4>
            <div className="BtnPos">
              <Button
                href="/search"
                TextInButton="Search"
                color="#394C73"
                width="200px"
                height="44px"
                colorHover="#2E3E5C"
                margin="0"></Button>
            </div>
          </div>
          <div className="ImageBook">
            <img className="IconBook" src={catalog}></img>
          </div>
        </div>
        <div className="Cont3">
          <div className="RegisterWorker">
            <h2 className="Title1">Register New Worker</h2>
            <img className="Worker" src={worker}></img>
            <div className="DescWork">
              <h4 className="Desc">
                This software is guaranteed to do the heavy lifting for you when it comes to
                onboarding a new team member.
              </h4>
            </div>
            <Button
              margin="auto"
              href="/registerworker"
              TextInButton="Register"
              color="#E9BD1F"
              width="200px"
              height="44px"
              colorHover="#D4A20F"></Button>
          </div>
          <div className="Software">
            <h1 className="Title1">Software Overview</h1>
            <img className="Search" src={file}></img>
            <div className="DescWork">
              <h4 className="Desc2"> Student Management Registration of Fines Book Management</h4>
            </div>
            <ModalView></ModalView>
          </div>
        </div>
      </div>
    </>
  );
};
export default home;
