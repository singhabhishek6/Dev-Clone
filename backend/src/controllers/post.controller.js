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

// query handling

router.patch('/:id', async (req, res) => {
    try {
        console.log(req.query);
        const isLike = req.query.likes;
        if (isLike !== undefined) {
            let post = await Post.findById(req.params.id).populate("user").populate('tags').lean().exec();
            console.log(post);
            let liked_users1 = post.liked_users;
            let arrSize = liked_users1.length;
            for(let i = 0; i < liked_users1.length; i++) {
                if(req.query.user_id === liked_users1[i].toString()) {
                    liked_users1.splice(i, 1);
                }
            }
            
            if(arrSize === liked_users1.length){
                liked_users1.push(req.query.user_id);
            }
            // console.log(liked_users1);

            post = await Post.findByIdAndUpdate(req.params.id, { likes_count: req.query.likes, liked_users: liked_users1 }, { new: true });

            post = await Post.findById(req.params.id).populate("user").populate('tags').lean().exec();

            let data = post.tags;
            let tagArr = [];
            for (let i = 0; i < data.length; i++) {
                tagArr.push(data[i].tag_name);
            }

            post.tags = tagArr;
            post.published_at = post.createdAt;

            return res.status(200).json({ post })
        }

        return res.status(200).json({ message: "Nothing updated" });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})

module.exports = router;