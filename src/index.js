// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import Background from "./components/Background";
import AnimatedRouter from "./AnimatedRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Background>
      <AnimatedRouter />
    </Background>
  </Router>
);
