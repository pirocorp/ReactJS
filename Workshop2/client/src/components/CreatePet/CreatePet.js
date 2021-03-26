import './CreatePet.css';

import petService from '../../services/petService'

function CreatePet({
    history,
}) {
    console.log(history);

    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault();

        const {name, description, imageURL, category} = e.target;
        petService
            .create(name.value, description.value, imageURL.value, category.value)
            .then(r => r.json())
            .then(r =>{
                history.push('/');
                // TODO: Add Notification message;
            })
            .catch(err => console.error(err));
    }

    return (
        <section className="create">
            <form action="#" method="post" onSubmit={onCreatePetSubmitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
}

export default CreatePet;