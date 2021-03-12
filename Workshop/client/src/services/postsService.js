import api from './api';

function getAll() {
    return fetch(api.posts)
        .then(res => res.json())
        .catch(err => console.log(err));
} 

let postService = {
    getAll
};

export default postService;