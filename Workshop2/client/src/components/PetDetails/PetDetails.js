import './PetDetails.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import petService from '../../services/petService'

function PetDetails({
    match
}) {
    let [pet, setPet] = useState({}); // State in functional components

    let petId = match.params.petId;

    useEffect(() => {
        petService.getPet(petId)
            .then(res => setPet(res))
    }, [match]); //[] - No dependencies, [match] -  if match changes this function will be executed again

    function onPetButtonClickHandler(e) {
        petService.pet(petId)
            .then((res) => res.json())
            .then(newPet => setPet(newPet))
            .catch(err => console.log(err));
    }

    return(
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} 
                <button 
                    className="button" 
                    style={{"display": "inline-block", "marginLeft": "5px"}}
                    onClick={onPetButtonClickHandler}
                >
                    <i className="fas fa-heart"></i> 
                    Pet
                </button>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/pets/details/${petId}/edit`}><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
            </div>
        </section>
    );
}

export default PetDetails;