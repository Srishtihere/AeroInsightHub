import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { airportsDataAPI } from "../../API/airportsDataAPI";
import hasValue from "../../Assets/hasValue";
import AirportsCard from "../Cards/AirportsCard";

const AirportsDataDisplay = ({ airportInputData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [airportList, setairportList] = useState([]);

  useEffect(() => {
    if (hasValue(airportInputData)) {
      setIsLoading(true);
      airportsDataAPI(airportInputData)
        .then((res) => {
          setairportList(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [airportInputData]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : airportList.length ? (
        airportList.map((item) => (
          <AirportsCard key={item} airportData={item} />
        ))
      ) : (
        <h1>Nothing to show now kindly give input/correct input for data</h1>
      )}
    </div>
  );
};

export default AirportsDataDisplay;
