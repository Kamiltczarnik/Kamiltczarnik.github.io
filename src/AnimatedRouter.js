// AnimatedRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectsNew from "./Pages/ProjectsNew";
import ContactNew from "./Pages/ContactNew";
import RouteWithNavigateBack from "./components/RouteWithNavBack";
import PortfoliPro from "./Pages/ProjectPages/PortfoliPro";
import HOFOracle from "./Pages/ProjectPages/HofOracle";
import PersonalPortfolio from "./Pages/ProjectPages/PortfolioWebsite";
import Lira from "./Pages/ProjectPages/Lira";

export default function AnimatedRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsNew />} />
      <Route path="/contact" element={<ContactNew />} />
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
        path="/projects/lira"
        element={<RouteWithNavigateBack Component={Lira} />}
      />
    </Routes>
  );
}
