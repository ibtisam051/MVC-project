const Category = require('../models/category');


exports.createCategory = async (req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.redirect('/categories');
};

exports.getCategories = async (req, res) => {
    const categories = await Category.find().populate('posts');
    res.render('categories', { categories });
};

