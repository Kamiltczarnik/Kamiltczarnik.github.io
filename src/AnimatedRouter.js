// AnimatedRouter.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./animation.css";
import App from "./App";
import RouteWithNavigateBack from "./components/RouteWithNavBack";
import PortfoliPro from "./Pages/ProjectPages/PortfoliPro";
import HOFOracle from "./Pages/ProjectPages/HofOracle";
import PersonalPortfolio from "./Pages/ProjectPages/PortfolioWebsite";
import SpotifyDataAnalysis from "./Pages/ProjectPages/SpotifyDataAnalysis";

export default function AnimatedRouter() {
  // get the current location so we can animate route changes
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname} // re-mount when path changes
        classNames="page" // base classname for CSS
        timeout={500} // match your CSS animation duration
      >
        {/* 
          We pass location to Routes so it animates the route that is leaving 
          and the route that is entering 
        */}
        <Routes location={location}>
          <Route path="/" element={<App />} />
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
      </CSSTransition>
    </TransitionGroup>
  );
}
