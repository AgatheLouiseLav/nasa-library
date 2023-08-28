import sendRequestNasa from "./send-request";
const BASE_URL = '/api/comments';

export function getAll(userId) {
  return sendRequestNasa(`${BASE_URL}/${userId}`);
}

export function createComment(commentData) {
  return sendRequestNasa(`${BASE_URL}`, 'POST', commentData );
}

export function updateComment() {
	return sendRequestNasa();
}

export function editComment() {
	return sendRequestNasa();
}

export function deleteComment() {
	return sendRequestNasa();
}
