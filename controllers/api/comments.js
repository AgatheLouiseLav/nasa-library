const Comment = require('../../models/comment');

module.exports = {
  	create,
  	index,
	update,
	deleteComment
};

async function create(req, res) {
	try{
		const comment = {...req.body, user: req.user._id};
  		const newComment = await Comment.create(comment);
  		res.json(newComment);
	} catch (error) {
		res.status(400).json(error);
	};
};

async function index(req, res) {
	try{
		const getAllComments = await Comment.find({user: req.user._id});
		res.json(getAllComments);
	} catch(error){
		res.status(400).json(error);
	};
};

async function update(req, res) {
	try{
    const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new:true});
	res.json(updateComment);
	} catch(error) {
		res.status(400).json(error);
	};
};


async function deleteComment(req, res) {
	try{
    	const deletedComment = await Comment.findByIdAndDelete(req.params.id);
		res.status(200).json(deletedComment);

	} catch(error) {
		res.status(400).json(error);
	};
};

