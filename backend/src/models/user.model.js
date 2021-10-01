const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    ip_address: { type: String, required: false },
    country:{ type: String, required: false },
    profile_pic:{type: String, required: false,default:"https://imgur.com/bbiFt7O.png"}
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