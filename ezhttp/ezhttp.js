class EZTP {
    constructor() {
        this.eztp = new XMLHttpRequest();
    }

    get(url, callback) {
        this.eztp.open('GET', url, true);

        this.eztp.onload = () => {
            this.eztp.status.toString()[0] === '2' ?
                callback(null, this.eztp.responseText) :
                callback('Error: ' + this.eztp.status);
        };
        this.eztp.send();
    }

    post(url, data, callback) {
        this.eztp.open('POST', url, true);
        this.eztp.setRequestHeader('Content-type', 'application/json');
        this.eztp.onload = () => {return callback(null, this.eztp.responseText)};
        this.eztp.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.eztp.open('PUT', url, true);
        this.eztp.setRequestHeader('Content-type', 'application/json');
        this.eztp.onload = () => {return callback(null, this.eztp.responseText)};
        this.eztp.send(JSON.stringify(data));
    }

    delete(url, callback) {
        this.eztp.open('DELETE', url, true);
        this.eztp.onload = () => {
            this.eztp.status.toString()[0] === '2' ?
                callback(null, "POST DELETED") : callback('Error: ' + this.eztp.status);
        };
        this.eztp.send();
    }
}

