import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Welcome from "./Pages/Welcome";
import AboutMe from "./Pages/AboutMe";
import Technologies from "./Pages/Technologies";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";

function App() {
  const [scrollLocked, setScrollLocked] = useState(false); // Centralized scroll lock state

  useEffect(() => {
    // Scroll to the top of the page when the component mounts (e.g., on refresh)
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      {/* Pass scrollLocked and setScrollLocked to Navbar */}
      <Navbar scrollLocked={scrollLocked} setScrollLocked={setScrollLocked} />
      {/* Render all sections of the website on a single page */}
      <Welcome setScrollLocked={setScrollLocked} />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
