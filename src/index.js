import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import PortfoliPro from "./Pages/ProjectPages/PortfoliPro";
import HOFOracle from "./Pages/ProjectPages/HofOracle";
import PersonalPortfolio from "./Pages/ProjectPages/PortfolioWebsite";
import SpotifyDataAnalysis from "./Pages/ProjectPages/SpotifyDataAnalysis";

ReactDOM.render(
  <Router>
    <Routes>
      {/* Main App */}
      <Route path="/" element={<App />} />

      {/* Project-specific routes */}
      <Route path="/projects/portfolipro" element={<PortfoliPro />} />
      <Route path="/projects/hof-oracle" element={<HOFOracle />} />
      <Route path="/projects/personal-portfolio" element={<PersonalPortfolio />} />
      <Route path="/projects/Spotify-Data-Analysis" element={<SpotifyDataAnalysis />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
