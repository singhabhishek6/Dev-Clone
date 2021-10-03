const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    ip_address: { type: String, required: false },
    country: { type: String, required: false },
    profile_image: { type: String, required: false, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbGrM6LFhkSf171kkRf3Ua6WKdL886A_ndA&usqp=CAU' },
    country:{ type: String, required: false },
    following_users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true,
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