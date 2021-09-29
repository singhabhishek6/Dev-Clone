const express = require('express');

require('dotenv').config();

const connect = require('./configs/db')

//import controller
const hasTag = require('./controllers/hashtag.controller');

const app = express();

//express midleware
app.use(express.json());
app.use("/hastag", hasTag);


const userController = require('./controllers/user.controller');
app.use('/users', userController);

const postController = require('./controllers/post.controller');
app.use('/posts', postController);


const start = async () => {
    await connect();

    app.listen(process.env.SERVER_PORT, () => {
        console.log('listing on port ' + process.env.SERVER_PORT);
    })
}

module.exports = start;