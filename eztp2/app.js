const http = new EZTP();

//Get users
    // http.get("http://jsonplaceholder.typicode.com/users/4")
    //     .then(console.log)
    //     .catch(console.log);


//User data
const user = {
    name : "Niko",
    username : "Kolesnik",
    email : "viqq@i.ua"
}

const task = {
    title: `CREATED VIA API ${Date.now()}`,
    duration: "44"
}

// http.post("http://jsonplaceholder.typicode.com/users", user)
//     .then(console.log)
//     .catch(console.log);



http.post("http://127.0.0.1:4724/tasks", task)
    .then(console.log)
    .catch(console.log);

http.get("http://127.0.0.1:4724/tasks")
    .then(console.log)
    .catch(console.log);

// http.put("http://jsonplaceholder.typicode.com/users/2", user)
//     .then(console.log)
//     .catch(console.log);

// http.delete("http://jsonplaceholder.typicode.com/users/2")
//     .then(console.log)
//     .catch(console.log)