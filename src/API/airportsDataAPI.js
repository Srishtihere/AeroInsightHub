import axios from "axios";
const baseURL = "https://api.api-ninjas.com/v1/airports?";
export const airportsDataAPI = (airportsObj) => {
  let API = `${baseURL}${airportsObj.icao ? `&icao=${airportsObj.icao}` : ""}${
    airportsObj.iata ? `&iata=${airportsObj.iata}` : ""
  }${airportsObj.name ? `&name=${airportsObj.name}` : ""}${
    airportsObj.country ? `&country=${airportsObj.country}` : ""
  }${airportsObj.region ? `&region=${airportsObj.region}` : ""}
  ${airportsObj.city ? `&city=${airportsObj.city}` : ""}${
    airportsObj.timezone ? `&timezone=${airportsObj.timezone}` : ""
  }${
    airportsObj.min_elevation
      ? `&min_elevation=${airportsObj.min_elevation}`
      : ""
  }${
    airportsObj.max_elevation
      ? `&max_elevation=${airportsObj.max_elevation}`
      : ""
  }${airportsObj.offset ? `&offset=${airportsObj.offset}` : ""}`;
  return axios.get(API, {
    headers: { "X-Api-Key": `${process.env.REACT_APP_API_KEY}` },
  });
};
