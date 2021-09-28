const express = require('express');
const User = require('../models/user.model');
const { getAll, getOne } = require('./crud.controller');

const router = express.Router();

router.get('/', getAll(User));

router.post('/register', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user) {
            return res.status(400).json({ status: 'failed', message: `user with ${req.body.email} is already registered` });
        }

        user = await User.create(req.body);
        
        if (!user) {
            return res.status(400).json({ status: 'failed', message: "Something went wrong, Please try again later" });
        }

        return res.status(201).json({ user });
    }
    catch (err) {
        return res.status(400).json({ status: 'failed', message: err.message })
    }

});

router.get('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).exec();
    
        if (!user) {
            return res.status(400).send({ status: "failed", message: "Wrong credentials" });
        }

        const match = user.checkPassword(req.body.password);
        
        if (!match) return res.status(400).json({ status: "failed", message: "Wrong credentials" });

        return res.status(201).json({ user });
    }
    catch (err) {
        return res.status(500).send({ status: "failed", message: err.message });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(200).json({ User: User });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const User = await User.findByIdAndDelete(req.params.id);

        return res.status(200).json({ User: User })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})

router.get('/:id', getOne(User));

module.exports = router;