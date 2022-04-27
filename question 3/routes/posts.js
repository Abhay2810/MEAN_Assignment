const express = require('express');

// Initialization of app
const router = express.Router();
router.get('/', function (req, res) {
    let posts = Post.find({}, function(err, posts){
    if(err){
     console.log(err);
    }
    else {
     res.json(posts);
    }
    });
    });
module.exports = router;
const Post = require('../models/Post');
