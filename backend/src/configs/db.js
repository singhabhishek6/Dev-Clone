const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://abhi:7992245309@cluster0.8396e.mongodb.net/devTo?retryWrites=true&w=majority');
}

module.exports = connect;