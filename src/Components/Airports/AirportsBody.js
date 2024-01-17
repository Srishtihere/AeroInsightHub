import { Box } from "@mui/material";
import React, { useState } from "react";
import AirportsTopbar from "./AirportsTopbar";
import AirportsDataDisplay from "./AirportsDataDisplay";

const AircraftsBody = () => {
  const [airportInputData, setAirportInputData] = useState({
    icao: "",
    iata: "",
    name: "",
    country: "",
    region: "",
    city: "",
    timezone: "",
    min_elevation: 0,
    max_elevation: 0,
    offset: 0,
  });

  const getAirportData = (data) => {
    setAirportInputData(data);
  };
  return (
    <>
      <AirportsTopbar getAirportData={getAirportData} />
      <Box
        component="main"
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AirportsDataDisplay airportInputData={airportInputData} />
      </Box>
    </>
  );
};

export default AircraftsBody;
