const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    description: { type: 'string', required: true },
    likes: { type: 'Number', required: false, default: 0 },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;