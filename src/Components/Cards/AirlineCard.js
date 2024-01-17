import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

import React, { useEffect } from "react";

const AirlineCard = ({ airlineValue }) => {
  useEffect(() => {
    console.log(typeof airlineValue);
    console.log(Object.entries(airlineValue.fleet));
  }, [airlineValue.fleet]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${airlineValue.logo_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {airlineValue.name}
        </Typography>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          fleet
        </Typography>
        <List>
          {Object.entries(airlineValue.fleet).map(([key, value]) => (
            <ListItem key={key}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText>
                {key} : <strong>{value}</strong>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            IATA:
          </Typography>
          <Typography variant="body1" color="text.dark" gutterBottom>
            {airlineValue.iata}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            ICAO:
          </Typography>
          <Typography variant="body1" color="text.dark" gutterBottom>
            {airlineValue.icao}
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default AirlineCard;
