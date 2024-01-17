import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AirlinesTopbar = ({ getAirlinesData }) => {
  const [airlineInputFields, setAirlineInputFields] = useState({
    icao: "",
    iata: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAirlineInputFields((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    getAirlinesData(airlineInputFields);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0px",
        marginLeft: "0px",
        padding: "10px",
      }}
    >
      <Grid item xs={10} md={3} sx={{ paddingTop: "0 !important" }}>
        <Stack>
          <Typography variant="h6" height="70px" sx={{ my: 2 }}>
            Airline Name:
          </Typography>
          <TextField
            label="Name of the Airline"
            variant="filled"
            type="text"
            name="name"
            value={airlineInputFields.name}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3} sx={{ paddingTop: "0 !important" }}>
        <Stack>
          <Typography height="70px" sx={{ my: 2 }}>
            International Civil Aviation Organization (ICAO) 3-character airline
            code:
          </Typography>
          <TextField
            label="ICAO of the Airline"
            variant="filled"
            type="text"
            name="icao"
            value={airlineInputFields.icao}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3} sx={{ paddingTop: "0 !important" }}>
        <Stack>
          <Typography height="70px" sx={{ my: 2 }}>
            International Air Transport Association (IATA) 2-character airline
            code:
          </Typography>
          <TextField
            label="IATA of the Airline"
            variant="filled"
            type="text"
            name="iata"
            value={airlineInputFields.iata}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid
        item
        xs={10}
        md={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" size="large" onClick={handleGenerate}>
          Generate
        </Button>
      </Grid>
    </Grid>
  );
};

export default AirlinesTopbar;
