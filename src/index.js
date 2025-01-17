// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Background from "./components/Background";
import AnimatedRouter from "./AnimatedRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/">
    <Background>
      <AnimatedRouter />
    </Background>
  </Router>
);
