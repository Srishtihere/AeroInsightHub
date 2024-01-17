import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AirportsTopbar = ({ getAirportData }) => {
  const [airportInputFields, setAirportInputFields] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAirportInputFields((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    getAirportData(airportInputFields);
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0px",
        marginLeft: "0px",
        padding: "10px",
      }}
    >
      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            height="70px"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Airport Name:
          </Typography>
          <TextField
            label="Name"
            variant="filled"
            type="text"
            name="name"
            value={airportInputFields.name}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height="70px"
          >
            International Civil Aviation Organization (ICAO) 4-character airport
            code:
          </Typography>
          <TextField
            label="ICAO"
            variant="filled"
            type="text"
            name="icao"
            value={airportInputFields.icao}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height="70px"
          >
            International Air Transport Association (IATA) 3-character airport
            code:
          </Typography>
          <TextField
            label="IATA"
            variant="filled"
            type="text"
            name="iata"
            value={airportInputFields.iata}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height="70px"
          >
            Country(Must be 2-character ISO-2 country code):
          </Typography>
          <TextField
            label="country"
            variant="filled"
            type="text"
            name="country"
            value={airportInputFields.country}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height="70px"
          >
            Region(administrative region such as state or province within a
            country (e.g. California)):
          </Typography>
          <TextField
            label="Region"
            variant="filled"
            type="text"
            name="region"
            value={airportInputFields.region}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height="70px"
          >
            airport city (e.g. London):
          </Typography>
          <TextField
            label="city"
            variant="filled"
            type="text"
            name="city"
            value={airportInputFields.city}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height="70px"
          >
            airport timezone (e.g. Europe/London):
          </Typography>
          <TextField
            label="timezone"
            variant="filled"
            type="text"
            name="timezone"
            value={airportInputFields.timezone}
            onChange={handleChange}
          />
        </Stack>
      </Grid>

      <Grid item xs={10} md={3}>
        <Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height="70px"
          >
            Airport Elevation:
          </Typography>
          <Stack direction="row" spacing={4}>
            <TextField
              label="max"
              variant="filled"
              type="number"
              name="max_elevation"
              value={airportInputFields.max_elevation}
              onChange={handleChange}
            />
            <TextField
              label="min"
              variant="filled"
              type="number"
              name="min_elevation"
              value={airportInputFields.min_elevation}
              onChange={handleChange}
            />
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={10} md={3}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            height="70px"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Quantity:
          </Typography>
          <TextField
            label="Qty"
            variant="filled"
            sx={{ width: "100px" }}
            type="number"
            name="offset"
            value={airportInputFields.offset}
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

export default AirportsTopbar;
