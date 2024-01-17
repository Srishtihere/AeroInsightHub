import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AircraftsBody from "./Components/Aircrafts/AircraftsBody";
import AirlinesBody from "./Components/Airlines/AirlinesBody";
import AirportsBody from "./Components/Airports/AirportsBody";
import { Box } from "@mui/material";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Box
          component="main"
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HOME" element={<Home />} />
            <Route path="/AIRLINES" element={<AirlinesBody />} />
            <Route path="/AIRCRAFTS" element={<AircraftsBody />} />
            <Route path="/AIRPORTS" element={<AirportsBody />} />
          </Routes>
        </Box>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
