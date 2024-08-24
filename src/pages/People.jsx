import { useContext } from "react";
import { Link } from "react-router-dom";
import { PeopleContext } from "./PeopleContext";


const People = () => {
    
    const {people} = useContext(PeopleContext);


    return(
            <div className="col-md-6">
            <ul className="list-group">
                {people.map(person => (
                    <li 
                    key={`film-${person.id}`} 
                    className="list-group-item d-flex justify-content-between align-items-center">
                        {person.name}
                            <Link to={`/people/${person.id}`} className="btn btn-outline-primary">Full Details</Link>
                    </li>
                ))}
            </ul>
            </div>
    );
     
};


export default People;