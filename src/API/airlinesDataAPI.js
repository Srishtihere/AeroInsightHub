import axios from "axios";
const baseURL = "https://api.api-ninjas.com/v1/airlines?";
export const airlinesDataAPI = (icao, iata, name) => {
  let API = `${baseURL}${icao ? `&icao=${icao}` : ""}${
    iata ? `&iata=${iata}` : ""
  }${name ? `&name=${name}` : ""}`;
  return axios.get(API, {
    headers: { "X-Api-Key": `${process.env.REACT_APP_API_KEY}` },
  });
};
