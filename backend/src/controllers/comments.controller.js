const express = require('express');
const Comment = require('../models/comment.model');
const Post = require('../models/post.model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const totalEntries = await Comment.find({ post_id: req.query.post_id }).count().lean().exec();

        const comments = await Comment.find({ post_id: req.query.post_id }).populate('user_id').populate('post_id').limit(10).lean().exec();

        return res.status(200).json({ comments_count: totalEntries, comments });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        req.body.user_id = req?.query?.user_id;
        req.body.post_id = req?.query?.post_id;
        const comment = await Comment.create(req.body); 
        const totalEntries = await Comment.find({ post_id: req.query.post_id }).count().lean().exec();

        const post =  await Post.findByIdAndUpdate(req?.query?.post_id, {comments_count: totalEntries}, {new: true});
       

        return res.status(201).json({ comment: comment })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(200).json({ comment })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})

module.exports = router;