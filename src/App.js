import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [scrollLocked, setScrollLocked] = useState(true); // Centralized scroll lock state

  useEffect(() => {
    // Scroll to the top of the page when the component mounts (e.g., on refresh)
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <Router>
      <div id="wrapper">
        {/* Pass scrollLocked and setScrollLocked to Navbar */}
        <Navbar scrollLocked={scrollLocked} setScrollLocked={setScrollLocked} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Pass setScrollLocked to Welcome */}
                <Welcome setScrollLocked={setScrollLocked} />
                <AboutMe />
                <Technologies />
                <Projects />
                <ContactMe />
              </>
            }
          />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
