import { Link } from "react-router-dom";
import { Nav } from "../Nav";


const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`student/new`}>
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Nav></Nav>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div className="student" key={student.id}>
            <Link to={`/student/${student.id}`}>
              <img src={student.imageURL} alt="" height="100px"></img>
              <h1>{name}</h1>
              <p>GPA: {student.gpa}</p>
            </Link>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};

export default AllStudentsView;
