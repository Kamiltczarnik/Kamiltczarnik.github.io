import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import RouteWithNavigateBack from "./components/RouteWithNavBack";
import PortfoliPro from "./Pages/ProjectPages/PortfoliPro";
import HOFOracle from "./Pages/ProjectPages/HofOracle";
import PersonalPortfolio from "./Pages/ProjectPages/PortfolioWebsite";
import SpotifyDataAnalysis from "./Pages/ProjectPages/SpotifyDataAnalysis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route
        path="/projects/portfolipro"
        element={<RouteWithNavigateBack Component={PortfoliPro} />}
      />
      <Route
        path="/projects/hof-oracle"
        element={<RouteWithNavigateBack Component={HOFOracle} />}
      />
      <Route
        path="/projects/personal-portfolio"
        element={<RouteWithNavigateBack Component={PersonalPortfolio} />}
      />
      <Route
        path="/projects/spotify-data-analysis"
        element={<RouteWithNavigateBack Component={SpotifyDataAnalysis} />}
      />
    </Routes>
  </Router>
);
