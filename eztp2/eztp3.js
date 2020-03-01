class EZTP {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(data)
            });
        const resData = await res.json();
        return resData;
    }

    async put(url, data) {
        const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(data)
            });
        const resData = await res.json();
        return resData;
        
    }


    async delete(url) {
        const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': "application/json"
                }
            });

        const resData = "await res.json()";
        return resData;
    }
}

// const http = new EZTP();


// const task = {
//     title: `CREATED VIA API ${Date.now()}`,
//     duration: "44"
// }

// http.post("http://127.0.0.1:4724/tasks", task)
//     .then(console.log)
//     .catch(console.log);

// http.get("http://127.0.0.1:4724/tasks")
//     .then(console.log)
//     .catch(console.log);
