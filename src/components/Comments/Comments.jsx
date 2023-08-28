import { useState} from 'react';
import './Comments.css';
import { getUser } from '../../utilities/users-service';
import * as commentAPI from '../../utilities/comment-api';
import SingleComment from '../SingleComment/SingleComment';

export default function Comments({addComment, getComments, comments }) {
	const [newComment, setNewComment] = useState("");

	/*Edit Comment */
	async function handleAddComment(evt) {
    	evt.preventDefault();
		const comment = await commentAPI.createComment({text: newComment, user: getUser()._id});
		addComment(comment);
    	setNewComment("");
		getComments();
  	}
	/*End Edit comment */
	console.log(comments, "***");

	const commentItems = comments.map((c) =>(
		<SingleComment comment={c} key={c._id} />
	));
	
	return(
		<div className="Asteroids-comments">
		<form onSubmit={handleAddComment}>
			<h2>New Comment</h2><br/>
			<input 
				value={newComment}
				onChange={(evt) => setNewComment(evt.target.value)}
				placeholder="New Comment"
				required
				pattern=".{4,}"/>
				<button type="submit">Add Comment</button>
		</form>
		{commentItems}
		</div>
	)
}