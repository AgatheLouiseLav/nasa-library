const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');


router.post('/', commentsCtrl.create);

router.get('/:userId', commentsCtrl.index);

module.exports = router;