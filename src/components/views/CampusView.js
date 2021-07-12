import { Nav } from "../Nav";


const CampusView = (props) => {
  const { campus } = props;
  return (
    <div>
      <Nav></Nav>
      <div className="campus">
        <img src={campus.imageURL} alt="" height="100px"/>
        <h1>{campus.name}</h1>
        <h3>{campus.address}</h3>
        <p>{campus.description}</p>
        <ul>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li key={student.id}>{name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );

};

export default CampusView;
