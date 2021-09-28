const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { type: 'string', required: true },
    last_name: { type: 'string', required: true },
    age: { type: 'number', required: true },
},{
    versionKey: false,
    timestampKey: true,
})

const User = mongoose.model('user', userSchema);

module.exports = User;