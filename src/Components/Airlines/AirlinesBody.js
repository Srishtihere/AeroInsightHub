import React, { useState } from "react";
import AirlinesTopbar from "./AirlinesTopbar";
import { Box } from "@mui/material";
import AirlinesDataDisplay from "./AirlinesDataDisplay";

const AirlinesBody = () => {
  const [airlineInputData, setAirlineInputData] = useState({
    icao: "",
    iata: "",
    name: "",
  });

  const getAirlinesData = (data) => {
    setAirlineInputData({ ...data });
  };

  return (
    <>
      <AirlinesTopbar getAirlinesData={getAirlinesData} />
      <Box
        component="main"
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AirlinesDataDisplay airlineInputData={airlineInputData} />
      </Box>
    </>
  );
};

export default AirlinesBody;
