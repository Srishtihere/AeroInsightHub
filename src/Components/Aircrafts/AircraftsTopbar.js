import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Paras = ["Speed", "Range", "Length", "Height", "Wingspan"];

const AircraftsTopbar = ({ getAircraftsData }) => {
  const [aircraftsInputFields, setAircraftsInputFields] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAircraftsInputFields((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    getAircraftsData(aircraftsInputFields);
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
            Aircraft Manufacturer Name:
          </Typography>
          <TextField
            label="Name of the Manufacturer"
            variant="filled"
            type="text"
            name="manufacturer"
            value={aircraftsInputFields.manufacturer}
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
            Aircraft Model Name:
          </Typography>
          <TextField
            label="Model name of the Aircrafts"
            variant="filled"
            type="text"
            name="model"
            value={aircraftsInputFields.model}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
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
            Engine Type:
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Engine Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="engine_type"
              value={aircraftsInputFields.engine_type}
              onChange={handleChange}
            >
              <MenuItem value={"Piston"}>Piston</MenuItem>
              <MenuItem value={"Propjet"}>Propjet</MenuItem>
              <MenuItem value={"Jet"}>Jet</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Grid>
      {Paras.length > 0 &&
        Paras.map((item) => (
          <Grid key={item} item xs={10} md={3}>
            <Stack>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                height="70px"
              >
                Aircraft {item}:
              </Typography>
              <Stack direction="row" spacing={4}>
                <TextField
                  label={` max ${item}`}
                  variant="filled"
                  type="number"
                  name={`max_${item}`}
                  value={aircraftsInputFields[`max_${item}`]}
                  onChange={handleChange}
                />
                <TextField
                  label={` min ${item}`}
                  variant="filled"
                  type="number"
                  name={`min_${item}`}
                  value={aircraftsInputFields[`min_${item}`]}
                  onChange={handleChange}
                />
              </Stack>
            </Stack>
          </Grid>
        ))}

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
            name="limit"
            value={aircraftsInputFields.limit}
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

export default AircraftsTopbar;
