const Comment = require('../../models/comment');

module.exports = {
  create,
  index
//  edit,
//  update,
//  delete : deleteComment
};

async function create(req, res) {
	try{
		console.log(req.user);
		const comment = {...req.body, user: req.user._id};
		console.log(comment);
  		const newComment = await Comment.create(comment);
  		res.json(newComment);
	} catch (error) {
		res.status(400).json(error)
	}
}

async function index(req, res) {
	try{
	console.log(req.params)
 	const getAllComment = await Comment.find({user: req.params.userId});
  	res.json(getAllComment);
	} catch(error){
		res.status(400).json(error)
	}
}

//async function update(req, res) {
	//try{
//    const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body);
//	res.json(updateComment);
	//} catch(error) {
	//	res.status(400).json(error)
	//}
//};

//async function edit(req, res) {
	//try{
//    const editComment = await Comment.findById(req.params.id);
//	res.json(editComment);
	//} catch(error) {
	//	res.status(400).json(error)	
	//}
//};

//async function deleteComment(req, res) {
	//try{
//    await Comment.findByIdAndDelete(req.params.id);
	//} catch(error) {
	//	res.status(400).json(error)	
	//}
//};