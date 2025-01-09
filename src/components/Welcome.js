import React, { useEffect } from "react";
import { particlesConfig } from "../particlesConfig"; // Adjust path as needed
import "./Welcome.css";

function Welcome({ setScrollLocked }) {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    } else {
      console.error("particles.js is not loaded.");
    }
  }, []);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      setScrollLocked(false); // Unlock scrolling
      aboutMeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
            <a
              href="#about-me"
              className="button scrolly"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Welcome;
