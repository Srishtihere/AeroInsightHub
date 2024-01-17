import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";

const AircraftsCard = ({ aircraftData }) => {
  return (
    <Card sx={{ minWidth: 275, margin: "10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {aircraftData.manufacturer}
        </Typography>
        <Typography variant="h5" component="div">
          {aircraftData.model}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          engine type : {aircraftData.engine_type}
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Object.entries(aircraftData).length &&
            Object.entries(aircraftData).map(([key, value]) => (
              <Typography sx={{ margin: "3px" }} variant="body2">
                <b>{key} : </b> {value}
              </Typography>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AircraftsCard;
