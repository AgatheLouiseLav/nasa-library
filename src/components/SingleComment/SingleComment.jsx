//import * as commentAPI from '../../utilities/comment-api';
import { Link } from 'react-router-dom';
//import { getUser } from '../../utilities/users-service';

export default function SingleComment({comment}) {

	//async function handleCommentUpdate(evt) {
    //	evt.preventDefault();
	//	const comment = await commentAPI.updateComment({text: newComment, user: getUser()._id});
	//	addComment(newComment);
    //	setNewComment("");
	//	getComments();
  	//}

	console.log(comment, "&&&")

	return (
		<div className="SingleComment">
			<h3>{comment.text}</h3>
			<Link to="/comments/edit" ><i class="uil uil-edit-alt"></i></Link>
			<button><i class="uil uil-trash-alt"></i></button>
		</div>
	)
}