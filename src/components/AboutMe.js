import React from 'react';
import './AboutMe.css'; // Import the CSS file

function AboutMe() {
  return (
    <section id="about-me" className="wrapper style2 spotlights">
      <div className="inner">
        <h2>About Me</h2>
        <div className="about-me-container">
          <div className="about-me-text">
            <p>
              Hello! My name is Kamil Czarnik, and I'm a Computer Science student at the University of Illinois Urbana-Champaign.
              I am passionate about solving complex problems through software engineering and data science.
              With a strong foundation in programming and analytical thinking, I strive to create innovative solutions that make a meaningful impact.
              Driven by curiosity and a commitment to continuous learning, I am excited to leverage my skills in technology to contribute to impactful projects and real-world challenges.
            </p>
          </div>
          <div className="about-me-image">
            <img src="../assets/images/Headshot.jpg" alt="Kamil Czarnik" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
