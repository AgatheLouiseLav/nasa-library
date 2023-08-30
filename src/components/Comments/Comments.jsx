import { useState} from 'react';
import './Comments.css';
import * as commentAPI from '../../utilities/comment-api';
import SingleComment from '../SingleComment/SingleComment';

export default function Comments({addComment, getComments, comments }) {

	const [newComment, setNewComment] = useState("");
	const [commentsChange, setCommentsChange] = useState([]);
	
	/*Add Comment */
	async function handleAddComment(evt) {
    	evt.preventDefault();
		const comment = await commentAPI.createComment({text: newComment});
		addComment(comment);
    	setNewComment("");
		getComments();
  	}
	/*End Add comment */

	/* Updatecomment */
		const handleCommentUpdate = (commentId, updatedComment) => {
    	const updatedComments = comments.map(comment =>
      	comment._id === commentId ? { ...comment, text: updatedComment } : comment
    	);
		console.log(updatedComments, "It's here")
    	setCommentsChange(updatedComments); 
  		};
		
	/*End Update comment */

	const commentItems = comments.map((c) =>(
		<SingleComment comment={c} key={c._id} onUpdate={handleCommentUpdate} />
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