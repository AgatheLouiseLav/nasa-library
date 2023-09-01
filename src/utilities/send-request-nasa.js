export default async function sendRequest(url, method = 'GET') {
	const options = { method };
	const res = await fetch(url, options);
	if (res.ok) return res.json();
	throw new Error('Bad Request');
};