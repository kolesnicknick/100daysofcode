const http = new EZTP;
// http.get('http://jsonplaceholder.typicode.com/posts', function(error, response) {
//     if(error){console.log(error)}
//     else {console.log(response)}
// });

const posts = [
    {
        title: 'First',
        body: 'FBODY',
    },
    {
        title: 'Second',
        body: 'SBODY',
    }
];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(
            function () {
                posts.push(post);
                const error = true;
                !error ? resolve() : reject("Something went wrong");
            }, 2000);
    })
}

function getPosts() {
    setTimeout(
        function () {
            let output = '';
            posts.forEach(post => {
                output += `<li>${post.title}</li>`
            });

            document.body.innerHTML = output;
        },
        1000);
}

createPost({title: "THIRD", body:"TBODY"})
    .then(getPosts)
    .catch(console.log);



//http.post('http://jsonplaceholder.typicode.com/posts', posts[1], eor);


//http.put('http://jsonplaceholder.typicode.com/posts/1', posts[2], eor);


function eor(error, response) {
    error ? console.log(error) : console.log(response);
}



