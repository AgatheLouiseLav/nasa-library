import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
	// Fetch accepts an options object as the second argument
	// used to include a data payload, set headers, specifiy the method, ect...
	const options = { method };
	console.log(payload)
	if (payload) {
		options.headers = { 'Content-Type': 'application/json'};
		options.body = JSON.stringify(payload);
	}

	const token = getToken();
	if (token) {
		// Need to add an Authorization header
		// Use the logical OR Assigment operator
		options.headers ||= {};
		// Older approach
		// options.headers = options.headers || {};
		options.headers.Authorization = `Bearer ${token}`;
	}

	const res = await fetch(url, options);
	// if res.ok is false then something went wrong
	if (res.ok) return res.json();
	throw new Error('Bad Request');

}