const express = require('express');
const Post = require('../models/post.model');
const User = require('../models/user.model');
const HashTag = require('../models/hastag.model');
const Comment = require('../models/comment.model');
const {deleteOne} = require("./crud.controller");

const router = express.Router();

// change tag_id to tag names
function handlePostTags(data) {
    let tagArr = [];
    for (let i = 0; i < data.length; i++) {
        tagArr.push(data[i].tag_name);
    }

    return tagArr;
}

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user').populate('tags').lean().exec();
         let resArr = []
      posts.map( async post => {
            post.tags = handlePostTags(post.tags);
            post.comments_count  = await Comment.find({ post_id: post._id }).count().lean().exec();
            post.published_at = post.createdAt;
            resArr.push(post)
            return post;
        })
        
        console.log(resArr);
        return res.status(200).json({ posts });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

router.post('/', async (req, res) => {
    try {

        let email = req.query.email;
        const user = await User.findOne({ email: email }).exec();

        if (!user) {
            return res.status(400).json({ status: "failed", message: 'user is not defined' });
        }

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

        post.tags = handlePostTags(post.tags);
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
        // Updating likes count
        const isLike = req.query.likes;
        if (isLike !== undefined) {
            let post = await Post.findById(req.params.id).populate("user").populate('tags').lean().exec();

            let liked_users1 = post.liked_users;
            let arrSize = liked_users1.length;
            for (let i = 0; i < liked_users1.length; i++) {
                if (req.query.user_id === liked_users1[i].toString()) {
                    liked_users1.splice(i, 1);
                }
            }

            if (arrSize === liked_users1.length) {
                liked_users1.push(req.query.user_id);
            }
            // console.log(liked_users1);

            post = await Post.findByIdAndUpdate(req.params.id, { likes_count: req.query.likes, liked_users: liked_users1 }, { new: true });

            post = await Post.findById(req.params.id).populate("user").populate('tags').lean().exec();

            post.tags = handlePostTags(post.tags);
            post.published_at = post.createdAt;

            return res.status(200).json({ post });
        }
        else if (req.query.save !== undefined) {
            let post = await Post.findById(req.params.id).populate("user").populate('tags').lean().exec();

            let data = post.saved_user;
            let dataSize = data.length;
            for (let i = 0; i < dataSize; i++) {
                if (data[i].toString() === req.query.user_id) {
                    data.splice(i, 1);
                    break;
                }
            }

            if (dataSize === data.length) {
                data.push(req.query.user_id)
            }

            post = await Post.findByIdAndUpdate(req.params.id, { saved_user: data }, { new: true });
            
            post = await Post.findById(req.params.id).populate("user").populate('tags').lean().exec();

            post.tags = handlePostTags(post.tags);
            post.published_at = post.createdAt;

            return res.status(200).json({ post })
        }

        let tags = req.body.tags;
        if(tags !== undefined){
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
    }

        let post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({post});
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})



module.exports = router;