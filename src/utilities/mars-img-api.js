import sendRequestNasa from "./send-request-nasa";
const BASE_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
console.log('API_KEY', process.env.REACT_APP_NASA_API_KEY)
export async function getMarsImages() {
  return sendRequestNasa(BASE_URL);
};
