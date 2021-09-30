const express = require('express');
const cors = require("cors");
require('dotenv').config();
var cookieParser = require('cookie-parser');
const connect = require('./configs/db')

//import controller
const hasTag = require('./controllers/hashtag.controller');

const app = express();

//express midleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/hastag", hasTag);
app.use(cookieParser());
app.use(function (req, res, next) {
    console.log(req.cookies.auth_token);
    next()
});

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