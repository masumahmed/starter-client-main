import { Link } from "react-router-dom";
import { Nav } from "../Nav";


const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  if (!students.length) {
    return (
      <div>
        <Nav></Nav>
        <div className="student">
          <p>There are no students.</p>
          <Link to={`student/new`}>
            <button>Add New Student</button>
          </Link>
        </div>
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
            </Link>
            <button onClick={() => deleteStudent(student.id)}> ✕ </button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button id="addStudent">Add New Student</button>
      </Link>
    </div>
  );
};

export default AllStudentsView;
