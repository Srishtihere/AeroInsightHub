import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const AirportsCard = ({ airportData }) => {
  return (
    <Card sx={{ minWidth: 275, margin: "10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          IATA : {airportData.iata}
        </Typography>
        <Typography variant="h5" component="div">
          {airportData.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ICAO : {airportData.icao}
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Object.entries(airportData).length &&
            Object.entries(airportData).map(([key, value]) => (
              <Typography sx={{ margin: "3px" }} variant="body2">
                <b>{key} : </b> {value}
              </Typography>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AirportsCard;
