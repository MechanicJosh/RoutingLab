import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {FilmContext} from './FilmContext';


const FilmDetails = () => {

    const {id} = useParams();
    const { films } = useContext(FilmContext);
    const film = films.find(film => film.id === id);

    if (!film){
        return <div> Film not found </div>;
    }

    return(
        <div>
            <h1 className='d-flex justify-content-center'>{film.title}</h1>
            <div>Description:
                <p>{film.description}</p>
            </div>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <p>Release Date: {film.release_date}</p>


        </div>
    );
};

export default FilmDetails;