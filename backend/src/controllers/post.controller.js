const express = require('express');
const Post = require('../models/post.model');
const User = require('../models/user.model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user_id').lean().exec();
        return res.status(200).json({ posts });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

router.post('/', async (req, res) => {
    try {

        let email = req?.headers?.email;
        let password = req?.headers?.password;

        const user = await User.findOne({ email: email }).exec();

        if (!user) {
            return res.status(400).json({ status: "failed", message: 'user is not defined' });
        }
        
        const match = user.checkPassword(password);
        if (!match) return res.status(400).json({ status: "failed", message: "Wrong user" });

        req.body.user_id = user._id;
        const post = await Post.create(req.body);

        return res.status(201).json({ post });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})




module.exports = router;