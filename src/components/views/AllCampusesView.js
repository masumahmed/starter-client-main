import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {deleteCampus } from "../../store/actions/actionCreators";
import { Nav } from "../Nav";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      <Nav></Nav>
      {props.allCampuses.map((campus) => (
        <div className="campus" key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <img src={campus.imageURL} alt="" height="100px"></img>
            <h1>{campus.name}</h1>
          </Link>
          <button onClick={() => deleteCampus(campus.id)}> ✕ </button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
