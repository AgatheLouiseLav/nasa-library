import { useState} from 'react';
import './Comments.css';
import * as commentAPI from '../../utilities/comment-api';
import SingleComment from '../SingleComment/SingleComment';

export default function Comments({addComment, getComments, comments, setComments }) {

	const [newComment, setNewComment] = useState("");
	
	/*Add Comment */
	async function handleAddComment(evt) {
    	evt.preventDefault();
		const comment = await commentAPI.createComment({text: newComment});
		addComment(comment);
    	setNewComment("");
		getComments();
  	}
	/*End Add comment */

	/* Update comment */
		const handleCommentUpdate = (updatedComment) => {
    	const updatedComments = comments.map(comment =>
      		updatedComment._id === comment._id ? updatedComment : comment);
    	setComments(updatedComments); 
  		};
		
	/*End Update comment */

	/*Delete Comment */
		const handleCommentDelete = (deletedComment) => {
		const deleteComments = comments.filter(comment => 
			comment._id !== deletedComment);
		setComments(deleteComments);
		};
	/*End Delete Comment */

	/* SingleComment Component */
	const commentItems = comments.map((c) =>(
		<SingleComment 
			comment={c} 
			key={c._id} 
			handleCommentUpdate={handleCommentUpdate} 
			handleCommentDelete={handleCommentDelete} 
		/>
	));
	/* End SingleComment Component */

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