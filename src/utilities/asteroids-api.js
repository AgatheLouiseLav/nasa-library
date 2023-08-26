import sendRequestNasa from "./send-request-nasa";
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY';

export async function getAllAsteroids() {
  return sendRequestNasa(BASE_URL);
}

export async function getAstById(id) {
  return sendRequestNasa(`${BASE_URL}/${id}`);
}
