const Comment = require('../../models/comment');

module.exports = {
  create,
  index
};

async function create(req, res) {
  	const newComment = await Comment.create(req.body);
  	res.json(newComment);
}

async function index(req, res) {
	console.log(req.params)
 	const comment = await Comment.find({user: req.params.userId});
  	res.json(comment);
}
