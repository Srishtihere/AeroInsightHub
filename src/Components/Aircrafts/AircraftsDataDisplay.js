import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { aircarftsDataAPI } from "../../API/aircraftsDataAPI";
import AircraftsCard from "../Cards/AircraftsCard";
import hasValue from "../../Assets/hasValue";

const AircraftsDataDisplay = ({ aircraftsInputData }) => {
  const [aircraftList, setaircraftList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (hasValue(aircraftsInputData)) {
      setIsLoading(true);
      aircarftsDataAPI(aircraftsInputData)
        .then((res) => {
          setaircraftList(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [aircraftsInputData]);

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
      ) : aircraftList.length ? (
        aircraftList.map((item) => (
          <AircraftsCard key={item} aircraftData={item} />
        ))
      ) : (
        <h1>Nothing to show now kindly give input/correct input for data</h1>
      )}
    </div>
  );
};

export default AircraftsDataDisplay;
