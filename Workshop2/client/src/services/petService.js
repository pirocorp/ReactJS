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
}

function getPet(id) {
    let url = `${baseUrl}/${id}`

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));  
}

const petService = {
    getAll,
    getPet
}

export default petService;