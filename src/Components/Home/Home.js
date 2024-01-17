import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import homeimg from "../../Assets/homeImg.jpg";
import HomeCardData from "./HomeCarddata";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#DBECF4", padding: "5px", borderRadius: "10px" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={homeimg}
          width="95%"
          height="95%"
          alt="airoplane with clouds"
          style={{ borderRadius: "20px" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        {HomeCardData.length &&
          HomeCardData.map((item) => (
            <Card
              key={item}
              sx={{
                margin: "5px",
                padding: "5px",
              }}
            >
              <CardMedia
                component="img"
                height="100px"
                width="90px"
                image={item.img_url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActionArea>
                <Link to={`/${item.name}`}>
                  <Button>Click here</Button>
                </Link>
              </CardActionArea>
            </Card>
          ))}
      </Grid>
    </Grid>
  );
};

export default Home;
