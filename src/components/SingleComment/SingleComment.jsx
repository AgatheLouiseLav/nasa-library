import * as commentAPI from '../../utilities/comment-api';
import {useState} from "react";
import {getUser} from '../../utilities/users-service'


export default function SingleComment({comment }) {
	const [editing, setEditing] = useState(false);
  	const [editedComment, setEditedComment] = useState(comment.text);

	const handleEditClick = () => {
    setEditing(true);
  	};

  	async function handleEditSubmit(evt) {
    	evt.preventDefault();
   		const editData = await commentAPI.editComment();
		setEditedComment(editData);
  	};

  console.log(editedComment, comment._id, "&&&")

	return (
		<div className="SingleComment">
			 {editing ? (
				<form onSubmit={handleEditSubmit}>
				<textarea
					value={editedComment}
					onChange={(e) => setEditedComment(e.target.value)}
					required
					pattern=".{4,}"
				/>
				<button type="submit">Save</button>
				</form>
      		) : (
				<>
					<h3>{comment.text}</h3>
					<button onClick={handleEditClick}><i class="uil uil-edit-alt"></i></button>
					<button><i class="uil uil-trash-alt"></i></button>
				</>
			)}
			
		</div>
	)
}