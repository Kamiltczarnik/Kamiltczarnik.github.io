import React, { useEffect } from "react";
import { particlesConfig } from "../../particlesConfig"; // Adjust path as needed
import "../css/Projects.css";


function HOFOracle({ navigateBack }) {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    } else {
      console.error("particles.js is not loaded.");
    }
  }, []);
  return (
    <div className="project-detail">
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>
      <div className="project-content">
        <div className = "title-bar">
      <h1>Hall of Fame Oracle</h1>
      <img src = "/assets/images/nfl.png" alt = "logo "className = "title-image"></img>
      </div>
      </div>
    </div>
  );
}

export default HOFOracle;
