import { Nav } from "../Nav";
import { Link } from 'react-router-dom';
import { student } from "../../store/reducers";

const CampusView = (props) => {
  const { campus } = props;

  if (campus.students.length === 0) {
    return (
      <div>
        <Nav></Nav>
        <div className="campus">
          <img src={campus.imageURL} alt="" height="100px" />
          <h1>{campus.name}</h1>
          <h3>{campus.address}</h3>
          <p>{campus.description}</p>
          <ul>
            no students
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav></Nav>
      <div className="campus">
        <img src={campus.imageURL} alt="" height="100px" />
        <h1>{campus.name}</h1>
        <h3>{campus.address}</h3>
        <p>{campus.description}</p>
        <ul>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li key={student.id}>
                <Link to={`/student/${student.id}`} >{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

};

export default CampusView;
