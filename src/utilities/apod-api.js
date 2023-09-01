import sendRequestNasa from "./send-request-nasa";
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

export async function getApod() {
  return sendRequestNasa(BASE_URL);
};