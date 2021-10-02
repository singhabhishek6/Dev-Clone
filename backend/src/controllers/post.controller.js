const express = require('express');
const Post = require('../models/post.model');
const User = require('../models/user.model');
const HashTag = require('../models/hastag.model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user').populate('tags').lean().exec();

        posts.map(post => {
            let data = post.tags;
            let tagArr = [];
            for (let i = 0; i < data.length; i++) {
                tagArr.push(data[i].tag_name);
            }

            post.tags = tagArr;
            post.published_at = post.createdAt;
            return post;
        })

        return res.status(200).json({ posts });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.query);
        let email = req.query.email;
        const user = await User.findOne({ email: email }).exec();

        if (!user) {
            return res.status(400).json({ status: "failed", message: 'user is not defined' });
        }
        console.log(user);

        let tags = req.body.tags;
        for (let i = 0; i < tags.length; i++) {
            async function getTagId(tag) {
                let tagId = await HashTag.findOne({ tag_name: tag }).lean().exec();
                if (tagId == undefined) {
                    let tagDetails = await HashTag.create({ tag_name: tag });
                    tagId = tagDetails._id;
                }

                return tagId;
            }

            tags[i] = await getTagId(tags[i]);
        }

        req.body.tags = tags;
        req.body.user = user._id;


        const post = await Post.create(req.body);

        return res.status(201).json({ post: post });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})


router.get('/:id', async function (req, res) {
    try {
        const post = await Post.findById(req.params.id).populate("user").populate('tags').lean().exec();

        let data = post.tags;
        let tagArr = [];
        for (let i = 0; i < data.length; i++) {
            tagArr.push(data[i].tag_name);
        }

        post.tags = tagArr;
        post.published_at = post.createdAt;

        return res.status(200).json({ post })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})


module.exports = router;