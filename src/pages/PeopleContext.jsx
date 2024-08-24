import React, { createContext, useState, useEffect } from 'react';

export const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(error => alert(error.message));
    }, []);

    return (
        <PeopleContext.Provider value={{ people }}>
            {children}
        </PeopleContext.Provider>
    );
};

export default PeopleProvider;