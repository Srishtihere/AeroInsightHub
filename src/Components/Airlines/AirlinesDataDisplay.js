import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { airlinesDataAPI } from "../../API/airlinesDataAPI";
import AirlineCard from "../Cards/AirlineCard";
import CircularProgress from "@mui/material/CircularProgress";

const AirlinesDataDisplay = ({ airlineInputData }) => {
  const [airlineValue, setAirlineValue] = useState({
    icao: "",
    iata: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (
      airlineInputData.icao ||
      airlineInputData.iata ||
      airlineInputData.name
    ) {
      setIsLoading(true);

      airlinesDataAPI(
        airlineInputData.icao,
        airlineInputData.iata,
        airlineInputData.name
      )
        .then((res) => {
          console.log(res.data[0]);
          setAirlineValue({ ...res.data[0] });
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [airlineInputData.iata, airlineInputData.icao, airlineInputData.name]);
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : airlineValue.icao ? (
        <AirlineCard airlineValue={airlineValue} />
      ) : (
        <h1>Nothing to show now kindly give input/correct input for data</h1>
      )}
    </div>
  );
};

export default AirlinesDataDisplay;
