import sendRequestNasa from "./send-request-nasa";
const BASE_URL = `https://images-api.nasa.gov/search?q=supernova`;

export async function getSupernova() {
  return sendRequestNasa(BASE_URL);
};
