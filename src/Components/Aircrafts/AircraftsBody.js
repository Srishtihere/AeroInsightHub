import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import AircraftsTopbar from "./AircraftsTopbar";
import AircraftsDataDisplay from "./AircraftsDataDisplay";

const AircraftsBody = () => {
  const [aircraftsInputData, setAircraftsInputData] = useState({
    manufacturer: "",
    model: "",
    engine_type: "",
    min_Speed: 0,
    max_Speed: 0,
    min_Range: 0,
    max_Range: 0,
    min_Length: 0,
    max_Length: 0,
    min_Height: 0,
    max_Height: 0,
    min_Wingspan: 0,
    max_Wingspan: 0,
    limit: 0,
  });

  const getAircraftsData = (data) => {
    setAircraftsInputData({ ...data });
  };

  return (
    <>
      <AircraftsTopbar getAircraftsData={getAircraftsData} />
      <Box
        component="main"
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AircraftsDataDisplay aircraftsInputData={aircraftsInputData} />
      </Box>
    </>
  );
};

export default AircraftsBody;
