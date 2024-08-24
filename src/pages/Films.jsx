import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilmContext } from "./FilmContext";


const Films = () => {
    
    const {films} = useContext(FilmContext);


    return(
            <div className="col-md-6">
            <ul className="list-group">
                {films.map(film => (
                    <li 
                    key={`film-${film.id}`} 
                    className="list-group-item d-flex justify-content-between align-items-center">
                        {film.title}
                            <Link to={`/films/${film.id}`} className="btn btn-outline-primary">Full Details</Link>
                    </li>
                ))}
            </ul>
            </div>
    );
     
};


export default Films;