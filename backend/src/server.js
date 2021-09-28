const express = require('express');

const connect = require('./configs/db')

const app = express();
app.use(express.json());

const start = async () => {
    await connect();

    app.listen(2222, () => {
        console.log('listing on port 2222');
    })
}

module.exports = start;