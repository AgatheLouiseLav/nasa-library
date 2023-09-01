import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
};

export function createComment(commentData) {
  return sendRequest(`${BASE_URL}`, 'POST', commentData);
};

export function updateComment(commentId, updateData) {
	return sendRequest(`${BASE_URL}/${commentId}`, 'PUT', updateData);
};

export function deleteComment(commentId, deleteData) {
	return sendRequest(`${BASE_URL}/${commentId}`, 'DELETE', deleteData);
};
