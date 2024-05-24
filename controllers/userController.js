const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.redirect('/users');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('users', { users });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
