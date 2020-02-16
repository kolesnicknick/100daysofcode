const http = new EZTP();

// Get users
    // http.get("http://jsonplaceholder.typicode.com/users")
    //     .then(console.log)
    //     .catch(console.log);


// User data
const user = {
    name : "Niko",
    username : "Kolesnik",
    email : "viqq@i.ua"
}

http.post("http://jsonplaceholder.typicode.com/users", user)
    .then(console.log)
    .catch(console.log);


http.put("http://jsonplaceholder.typicode.com/users/2", user)
    .then(console.log)
    .catch(console.log);

http.delete("http://jsonplaceholder.typicode.com/users/2")
    .then(console.log)
    .catch(console.log)