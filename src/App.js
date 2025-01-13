import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Welcome from "./Pages/Welcome";
import AboutMe from "./Pages/AboutMe";
import Technologies from "./Pages/Technologies";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const [scrollLocked, setScrollLocked] = useState(true); // Centralized scroll lock state
  const location = useLocation(); // Access the current route

  useEffect(() => {
    // Enable scrolling if the current route is '/home'
    if (location.pathname === "/home") {
      setScrollLocked(false);
    } else {
      setScrollLocked(true);
    }
  }, [location.pathname]);

  return (
    <div id="wrapper">
      {/* Pass scrollLocked and setScrollLocked to Navbar */}
      <Navbar scrollLocked={scrollLocked} setScrollLocked={setScrollLocked} />
      <Welcome setScrollLocked={setScrollLocked} />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
