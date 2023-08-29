import sendRequestNasa from "./send-request-nasa";
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=lJZkUb5h640L1onlhf1B73OfW6YPoG8KddW0IGIM';

export async function getMarsImages() {
  return sendRequestNasa(BASE_URL);
}
