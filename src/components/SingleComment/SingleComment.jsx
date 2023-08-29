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
   		const updateData = await commentAPI.updateComment();
		setUpdateComment(updateData);
		onUpdate(updateComment);
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
					<button onClick={handleUpdateClick}><i class="uil uil-edit-alt"></i></button>
					<button><i class="uil uil-trash-alt"></i></button>
				</>
			)}
			
		</div>
	)
}