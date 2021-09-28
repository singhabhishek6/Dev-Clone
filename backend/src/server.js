const express = require('express');

const connect = require('./configs/db')

//import controller
const hasTag = require('./controllers/hashtag.controller');

const app = express();

//express midleware
app.use(express.json());
app.use("/hastag", hasTag);






const start = async () => {
    await connect();

    app.listen(2222, () => {
        console.log('listing on port 2222');
    })
}

module.exports = start;