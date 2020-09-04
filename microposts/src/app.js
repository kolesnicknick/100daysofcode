import { http } from './http';

// Get posts

document.addEventListener('onLoad', handleLoad);

const handleLoad = function () {
  http.get('http://localhost:3000/posts')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
