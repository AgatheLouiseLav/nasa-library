import { useState} from 'react';
import './Observations.css';
import * as commentAPI from '../../utilities/comment-api';
import SingleComment from '../../components/SingleComment/SingleComment';

export default function Observations({addComment, getComments, comments, setComments }) {

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
			<div className="Observations">
				<form onSubmit={handleAddComment} className='Observations-Form'>
					<h2>New Observation</h2><br/>
					<textarea 
						value={newComment}
						onChange={(evt) => setNewComment(evt.target.value)}
						placeholder="New Observation"
						required
						pattern=".{4,}"/>
						<button type="submit"><i className="uil uil-plus"></i>Add Observation</button>
				</form>
			<div className="Observations-text">
				{commentItems}
			</div>
	</div>
	)
}