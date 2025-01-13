import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for programmatic navigation
import { particlesConfig } from "../particlesConfig"; // Adjust path as needed
import "./css/Welcome.css";

function Welcome({ setScrollLocked }) {
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    } else {
      console.error("particles.js is not loaded.");
    }
  }, []);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    setScrollLocked(false); // Unlock scrolling

    // Navigate to /home and then scroll to #home
    navigate("/home");
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Timeout ensures navigation completes before scrolling
  };

  return (
    <section
      id="welcome"
      className="hero-section wrapper style1 fullscreen fade-up"
    >
      <div className="inner">
        <h1 className="hero-text">
          Hi, I'm <span className="gradient-text">Kamil Czarnik</span>.
          <br />I Develop Software.
        </h1>
        <ul className="actions">
          <li>
            <button className="button scrolly" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Welcome;
