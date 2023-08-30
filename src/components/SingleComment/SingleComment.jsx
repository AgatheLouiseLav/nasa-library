import * as commentAPI from '../../utilities/comment-api';
import {useState} from "react";

export default function SingleComment({comment, onUpdate}) {
	const [update, setUpdate] = useState(false);
  	const [updateComment, setUpdateComment] = useState(comment.text);

	const handleUpdateClick = () => {
    setUpdate(true);
  	};

  	async function handleUpdateSubmit(evt) {
    	evt.preventDefault();
   		 try {
      		const updateData = await commentAPI.updateComment(comment._id, updateComment);
      		onUpdate(updateData);
      		setUpdate(false); 
    	} catch (error) {
      		console.error("Error updating comment:", error);
    	} 
  	};

  console.log(updateComment, comment._id, "&&&")

	return (
		<div className="SingleComment">
			  {update ? (
        <form onSubmit={handleUpdateSubmit}>
          <textarea
            value={updateComment}
            onChange={(e) => setUpdateComment(e.target.value)}
            required
            pattern=".{4,}"
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h3>{comment.text}</h3>
          <button onClick={handleUpdateClick}><i className="uil uil-edit-alt"></i></button>
          <button><i className="uil uil-trash-alt"></i></button>
        </>
      )}	
		</div>
	)
}