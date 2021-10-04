const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: 'string', required: true },
    body_html: { type: 'string', required: false, default: '' },
    public_reaction_count: { type: 'number', required: false, default: 0 },
    likes_count: { type: 'number', required: false, default: 0 },
    reading_time_minutes: { type: 'number', required: false, default: 1 },
    cover_image: { type: 'string', required: true },
    comments_count: { type: 'number', required: false, default: 0 },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "hastag",
        required: true
    }],
    liked_users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }],
    saved_user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;

