// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRouter from "./AnimatedRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AnimatedRouter />
  </Router>
);
