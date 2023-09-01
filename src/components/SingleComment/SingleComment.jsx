import * as commentAPI from '../../utilities/comment-api';
import {useState} from "react";
import './SingleComment.css';

export default function SingleComment({comment, handleCommentUpdate, handleCommentDelete}) {

	const [update, setUpdate] = useState(false);
  	const [updateComment, setUpdateComment] = useState({ text : comment.text});

	const handleUpdateClick = () => {
    setUpdate(true);
  	};

	/* Function Update */
  	async function handleUpdateSubmit(evt) {
    	evt.preventDefault();
   		 try {
      		const updateData = await commentAPI.updateComment(comment._id, updateComment);
      		handleCommentUpdate(updateData);
      		setUpdate(false); 
    	} catch (error) {
      		console.error("Error updating comment:", error);
    	} 
  	};
	/* End Function Update */

	/* Function Delete */
	 async function handleDeleteClick(evt) {
		evt.preventDefault();
		try {
			await commentAPI.deleteComment(comment._id);
			handleCommentDelete(comment._id);
		} catch (error) {
			console.error("Error delete comment:", error);
		}
  	};
	/* End Function Delete */

	return (
		<div className="SingleComment">
			  {update ? (
        <form onSubmit={handleUpdateSubmit} className='SingleComment-Edit'>
          <textarea
            value={updateComment.text}
            onChange={(e) => setUpdateComment({text: e.target.value})}
            required
            pattern=".{4,}"
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className='SingleComment-text'>
          <h3>{comment.text}</h3>
		  <div>
          	<button onClick={handleUpdateClick}><i className="uil uil-edit-alt"></i></button>
          	<button onClick={handleDeleteClick}><i className="uil uil-trash-alt"></i></button>
		  </div>
        </div>
      )}	
		</div>
	);
};