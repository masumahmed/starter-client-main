import { Nav } from "../Nav";
import { Link } from 'react-router-dom';
import { campus } from "../../store/reducers";

const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <Nav />
      <div className="student">
        <img src={student.imageURL} alt="" height="100px"></img>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h3>{student.email}</h3>
        <h3>GPA: {student.gpa}</h3>
        <h3>
          <Link to={`/campus/${student.campusId}`} >{student.campus.name}</Link>
        </h3>
      </div>
    </div>
  );
};

export default StudentView;
