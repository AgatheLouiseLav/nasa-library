const Comment = require('../../models/comment');

module.exports = {
  	create,
  	index,
	update
	//delete : deleteComment
};

async function create(req, res) {
	try{
		const comment = {...req.body, user: req.user._id};
  		const newComment = await Comment.create(comment);
  		res.json(newComment);
	} catch (error) {
		res.status(400).json(error)
	}
}

async function index(req, res) {
	try{
		const getAllComments = await Comment.find({user: req.user._id});
		res.json(getAllComments);
	} catch(error){
		res.status(400).json(error)
	}
}

async function update(req, res) {
	try{
	//new: true is updating the default functionality of findbyIdandUpdate and return the updated document
    const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new:true});
	res.json(updateComment);
	} catch(error) {
		res.status(400).json(error)
	}
};


//async function deleteComment(req, res) {
//	try{
//    await Comment.findByIdAndDelete(req.params.id);
//	} catch(error) {
//		res.status(400).json(error)	
//	}
//};