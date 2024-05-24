const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');


router.get('/', commentController.getComments);
router.post('/create', commentController.createComment);

module.exports = router;
