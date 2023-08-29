import sendRequestNasa from "./send-request-nasa";
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=lJZkUb5h640L1onlhf1B73OfW6YPoG8KddW0IGIM';

export async function getAllAsteroids() {
  return sendRequestNasa(BASE_URL);
}

export async function getAstById(id) {
  return sendRequestNasa(`${BASE_URL}/${id}`);
}
