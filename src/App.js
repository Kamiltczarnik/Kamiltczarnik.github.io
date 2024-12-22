import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail"; 

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Welcome />
                <AboutMe />
                <Technologies />
                <Projects />
                <ContactMe />
              </>
            }
          />

          {/* Dynamic Project Page */}
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
