import React from "react";
import { Link } from "react-router-dom";
import "./css/Projects.css";

// Import images

const projectData = [
  {
    name: "PortfoliPro",
    description: "Machine Learning based stock portfolio optimizer.",
    route: "/projects/portfolipro",
    image: "/assets/images/portfolipro.png",
  },
  {
    name: "HOF Oracle",
    description: "NFL Stat Retreival and Hall of Fame predictor.",
    route: "/projects/hof-oracle",
    image: "/assets/images/nfl.png",
  },
  {
    name: "Personal Portfolio",
    description: "Modern portfolio and personal website built with React.",
    route: "/projects/personal-portfolio",
    image: "/assets/images/logo.png",
  },
  {
    name: "Spotify Data Analysis",
    description: "Data analysis of a Spotify user's listening history.",
    route: "/projects/Spotify-Data-Analysis",
    image: "/assets/images/spotify.png",
  }
];

function Projects() {
  return (
    <section id="projects" className="wrapper style2 spotlights">
      <div className="inner">
        <div className="projects-container">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              {/* Display the project image */}
              <img
                src={project.image}
                alt={`${project.name} Thumbnail`}
                className="project-image"
              />
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <Link to={project.route} className="learn-more-button">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
