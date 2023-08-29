import sendRequestNasa from "./send-request-nasa";
const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=lJZkUb5h640L1onlhf1B73OfW6YPoG8KddW0IGIM';

export async function getApod() {
  return sendRequestNasa(BASE_URL);
}