const Post = require('../models/post');

exports.createPost = async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.redirect('/posts');
};

exports.getPosts = async (req, res) => {
    const posts = await Post.find().populate('author');
    res.render('posts', { posts });
};
