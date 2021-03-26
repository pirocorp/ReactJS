const baseUrl = "http://localhost:5000/pets";

function getAll (category) { 
    let url = baseUrl;

    if(category !== 'all') {
        url += category
            ? `?category=${category}` 
            : '';
    }    

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));        
};

function getPet(id) {
    let url = `${baseUrl}/${id}`

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));  
};

function create(name, description, imageURL, category) {
    let pet = {
        name,
        description,
        imageURL,
        category,
        likes: 0,
    };

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });
};

function update(pet) {
    return fetch(`${baseUrl}/${pet.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });
}

/* Callback Hell */
function pet(petId) {
    return getPet(petId)
        .then(pet => {
            let payload = {
                likes: parseInt(pet.likes) + 1
            };

            return fetch(`${baseUrl}/${petId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
        })
        .catch(err => console.log(err));    
}

const petService = {
    getAll,
    getPet,
    create,
    update,
    pet,
}


export default petService;