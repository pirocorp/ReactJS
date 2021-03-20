import './Categories.css';

import { useEffect, useState } from 'react';

import petService from '../../services/petService';

import CategoriesNavigation from './CategoryNavigation'
import Pet from '../Pet'

function Categories({
    match    
}) {

    // pets current value of pets, setPets setter for the new value
    const [pets, setPets] = useState([]);

    // The callback in use effect will be executed based on supplied parameter.
    // [] - the callback will be executed only once when component is mounted to DOM just like componentDidMount.
    // When match.params.category is changed useEffect will be executed.
    useEffect(() => {
        const category = match.params.category;

        petService.getAll(category)
            .then(res => setPets(res));

    }, [match.params.category]);

    // console.log(match.params.category);

    return(
        <section className="dashboard">
        <h1>Dashboard</h1>

        <CategoriesNavigation />

        <ul className="other-pets-list">
            {pets.map(x => 
                <Pet key={x.id} {...x} />
            )}
        </ul>
    </section>
    );
}

export default Categories