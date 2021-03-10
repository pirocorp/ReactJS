const endpoint = 'http://localhost:3000/books';

function getAll() {
    return fetch(endpoint)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export default {
    getAll
}