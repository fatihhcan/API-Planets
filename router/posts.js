const express = require('express');
const planetsPost = require('../models/planets');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is place posts');
});

router.post('/', (req, res) => {
    const post = new planetsPost({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    });

    post.save()
        .then(data => {
            req.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});
//id göre arama
router.get('/post:Id', async (req, res) => {
    try {
        const post = await planetsPost.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//delete post

router.delete('/post:Id', async (req, res) => {
    try {
        const removedPost = await planetsPost.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
//data update post

router.patch('/post:Id', async (req, res) => {
    try {
        const updatedPost = await planetsPost.updateOne(
            { _id: req.params.postId },
            { $set: { name: req.body.name } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
module.exports = router;