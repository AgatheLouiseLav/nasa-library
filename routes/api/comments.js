const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');


router.post('/', commentsCtrl.create);

router.get('/', commentsCtrl.index);

router.put('/:id', commentsCtrl.update);

router.delete('/:id', commentsCtrl.deleteComment);

module.exports = router;