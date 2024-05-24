const Comment = require('../models/comment');

exports.createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.redirect('/comments');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('author').populate('post');
        res.render('comments', { comments });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
