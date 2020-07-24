const cluster = require('cluster');
const crypto = require('crypto');

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    cluster.isMaster ? console.log('Master') : console.log('Slave');

    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        const start = Date.now();
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            const time = Date.now() - start;
            console.log(time);
            res.send(`${time}`);
        });

    });

    app.get('/fast', (req, res) => {
        res.send('YAY how fast was that');
    });

    app.listen(3400);
}
