import './PetDetails.css';

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

    return(
        <section class="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} 
                <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
            </p>
            <p class="img"><img src={pet.imageURL} /></p>
            <p class="description">{pet.Description}</p>
        </section>
    );
}

export default PetDetails;