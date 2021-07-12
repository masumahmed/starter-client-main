import { Nav } from "../Nav";

const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <Nav />
      <div className="student">
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h3>{student.campus.name}</h3>
      </div>
    </div>
  );
};

export default StudentView;
