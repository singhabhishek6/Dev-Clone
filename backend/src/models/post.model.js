const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;