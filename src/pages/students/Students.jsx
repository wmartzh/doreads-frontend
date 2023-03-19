import Items from '../../components/Stack2';
import '../../styles/Students.css';

const Student = () => {
  return (
    <>
      <div className="DescStudents">
        <div>
          <h1 className="Title">
            <span>Register Student:</span> ipsum dolor sit amet consectetur adipisicing elit. Ut
            minima fugiat beatae soluta doloribus. Nostrum impedit obcaecati fugiat laborum vero
            nesciunt minima nisi, voluptatibus ullam hic sint deserunt officia corporis. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Eaque possimus exercitationem
            maiores autem libero? Fuga, repellendus ut unde porro fugiat earum nesciunt
            exercitationem, consequuntur aliquid cupiditate sequi saepe suscipit numquam!
          </h1>
        </div>
        <div>
          <h1 className="Title">
            <span>Student Fines:</span> ipsum dolor sit amet consectetur adipisicing elit. Ut minima
            fugiat beatae soluta doloribus. Nostrum impedit obcaecati fugiat laborum vero nesciunt
            minima nisi, voluptatibus ullam hic sint deserunt officia corporis. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Perferendis ducimus possimus odit eos deserunt
            neque quia, adipisci laudantium accusantium alias earum dolorem expedita molestiae
            voluptas perspiciatis sapiente cum quae fugiat.
          </h1>
        </div>
        <div>
          <h1 className="Title">
            <span>View Student:</span> ipsum dolor sit amet consectetur adipisicing elit. Ut minima
            fugiat beatae soluta doloribus. Nostrum impedit obcaecati fugiat laborum vero nesciunt
            minima nisi, voluptatibus ullam hic sint deserunt officia corporis. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Explicabo beatae eius sequi doloribus fuga vitae
            ratione sit, unde repellendus ex excepturi minus, neque reiciendis corrupti recusandae,
            assumenda praesentium odit labore?
          </h1>
        </div>
      </div>
      <div className="Students">
        <Items text1="Register Students" text2="Penalty Fee" text3="See Student" />
      </div>
    </>
  );
};
export default Student;
