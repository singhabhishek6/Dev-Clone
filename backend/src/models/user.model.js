const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name: { type: 'string', required: true },
    last_name: { type: 'string', required: false },
    email: { type: 'string', required: true },
    password: { type: 'String', required: true },
}, {
    versionKey: false,
    timestampKey: true,
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;

    next();
})

userSchema.methods.checkPassword = function (password) {
    const passwordHash = this.password;
    
    return bcrypt.compareSync(password, passwordHash);
}

const User = mongoose.model('user', userSchema);

module.exports = User;