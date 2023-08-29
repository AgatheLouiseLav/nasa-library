const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');


router.post('/', commentsCtrl.create);

router.get('/user/:userId', commentsCtrl.index);

//router.get('/:id', commentsCtrl.edit);

//router.put('/:id', commentsCtrl.update);

//router.delete('/:id', commentsCtrl.delete);

module.exports = router;