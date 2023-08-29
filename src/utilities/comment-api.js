import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export function getAll(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}

export function createComment(commentData) {
  return sendRequest(`${BASE_URL}`, 'POST', commentData);
}

export function editComment(editData) {
	return sendRequest(`${BASE_URL}/`, editData);
}

//export function updateComment(updateData) {
//	return sendRequest(`${BASE_URL}/:id`, 'PUT', updateData);
//}

//export function deleteComment(deleteData) {
//	return sendRequest(`${BASE_URL}/:id`, 'DELETE', deleteData);
//}
