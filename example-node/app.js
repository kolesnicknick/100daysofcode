//Create instance of axios

// Create request with axios
const response = axios.get('https://api.icndb.com/jokes/random/22');

for(let i = 0; response.body.value.length; i++){
    response.body.value[i];
    console.log('ID: 1');
}
