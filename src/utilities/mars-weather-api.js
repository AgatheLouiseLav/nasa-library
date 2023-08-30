import sendRequestNasa from "./send-request-nasa";
const BASE_URL = `https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`

export async function getMarsWeather() {
  return sendRequestNasa(BASE_URL);
}
