import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {PeopleContext} from './PeopleContext';


const PeopleDetails = () => {

    const {id} = useParams();
    const { people } = useContext(PeopleContext);
    const person = people.find(person => person.id === id);

    if (!person){
        return <div> person not found </div>;
    }

    return(
        <div>
            <h1 className='d-flex justify-content-center mt-4'>{person.name}</h1>
            
            <p>Gender: {person.gender}</p>
            <p>Age: {person.age}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Hair Color: {person.hair_color}</p>
        </div>
    );
};

export default PeopleDetails;