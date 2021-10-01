const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: 'string', required: true },
    body_html: { type: 'string', required: false, default: '' },
    public_reaction_count: { type: 'number', required: false, default: 0 },
    likes_count: { type: 'number', required: false, default: 0 },
    reading_time_minutes: { type: 'number', required: false, default: 1 },
    cover_img: { type: 'string', required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    hastags_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "hastag",
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;