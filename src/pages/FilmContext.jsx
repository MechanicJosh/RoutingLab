import React, { createContext, useState, useEffect } from 'react';

export const FilmContext = createContext();

const FilmProvider = ({ children }) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(error => alert(error.message));
    }, []);

    return (
        <FilmContext.Provider value={{ films }}>
            {children}
        </FilmContext.Provider>
    );
};

export default FilmProvider;