const axios = require('axios');

//Generating random number
const randomNumber = Math.floor(Math.random() * Math.floor(10));
console.log(randomNumber);

axios.get('https://prodota.ru/31sadaf12')
        .then(function (response) {
            response.data.value.forEach(i => console.log(i.joke));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
