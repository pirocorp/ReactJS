import { useEffect, useState } from 'react'; // Hooks
import petService from '../../services/petService';

import InputError from '../Shared/InputError';

import './PetEdit.css';

function PetEdit({
    match,
    history
}) {
    const [pet, setPet] = useState({}); // Functional state with hooks
    const [errorMessage, setErrorMessage] = useState('');

    const petId = match.params.petId;

    useEffect(() => {
        petService.getPet(petId)
            .then(res => setPet(res));
    }, []);

    function onPetEditSubmitHandler(e) {
        e.preventDefault();

        const description = e.target.description.value;
        const updatedPet = { ...pet, description };

        petService.update(updatedPet)
            .then(res => {
                history.push(`/pets/details/${petId}`);
            })
            .catch(err => console.log(err));
    };

    function onDescriptionChangeHandler(e) {
        const description = e.target.value;
        
        if(description.length < 10){
            setErrorMessage('Description must be at least 10 characters long.');
        } else {
            setErrorMessage('');
        }
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img">
                <img src={pet.imageURL} />
            </p>
            <form onSubmit={onPetEditSubmitHandler}>
                <textarea 
                    type="text" 
                    name="description" 
                    defaultValue={pet.description}
                    onBlur={onDescriptionChangeHandler}
                />
                <InputError>{errorMessage}</InputError>
                <button className="button"> Save</button>
            </form>
        </section>
    );
}

export default PetEdit;