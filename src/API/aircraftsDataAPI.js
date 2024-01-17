import axios from "axios";
const baseURL = "https://api.api-ninjas.com/v1/aircraft?";
export const aircarftsDataAPI = (aircraftsObj) => {
  console.log(aircraftsObj);
  let API = `${baseURL}${
    aircraftsObj.manufacturer
      ? `&manufacturer=${aircraftsObj.manufacturer}`
      : ""
  }${aircraftsObj.model ? `&model=${aircraftsObj.model}` : ""}${
    aircraftsObj.engine_type ? `&engine_type=${aircraftsObj.engine_type}` : ""
  }${aircraftsObj.min_Speed ? `&min_Speed=${aircraftsObj.min_Speed}` : ""}${
    aircraftsObj.max_Speed ? `&max_Speed=${aircraftsObj.max_Speed}` : ""
  }${aircraftsObj.min_Range ? `&min_Range=${aircraftsObj.min_Range}` : ""}${
    aircraftsObj.max_Range ? `&max_Range=${aircraftsObj.max_Range}` : ""
  }${aircraftsObj.min_Length ? `&min_Length=${aircraftsObj.min_Length}` : ""}${
    aircraftsObj.max_Length ? `&max_Length=${aircraftsObj.max_Length}` : ""
  }${aircraftsObj.min_Height ? `&min_Height=${aircraftsObj.min_Height}` : ""}${
    aircraftsObj.max_Height ? `&max_Height=${aircraftsObj.max_Height}` : ""
  }${
    aircraftsObj.min_Wingspan
      ? `&min_Wingspan=${aircraftsObj.min_Wingspan}`
      : ""
  }${
    aircraftsObj.max_Wingspan
      ? `&max_Wingspan=${aircraftsObj.max_Wingspan}`
      : ""
  }${aircraftsObj.limit ? `&limit=${aircraftsObj.limit}` : ""}`;
  return axios.get(API, {
    headers: { "X-Api-Key": `${process.env.REACT_APP_API_KEY}` },
  });
};
