import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Projects.css";

// Project data
const projectData = [
  {
    name: "PortfoliPro",
    description: "Machine Learning based stock portfolio optimizer.",
    route: "/projects/portfolipro",
    image: "/assets/images/portfolipro.png",
  },
  {
    name: "HOF Oracle",
    description: "NFL Stat Retrieval and Hall of Fame predictor.",
    route: "/projects/hof-oracle",
    image: "/assets/images/nfl.png",
  },
  {
    name: "Personal Portfolio",
    description: "Modern portfolio and personal website built with React.",
    route: "/projects/personal-portfolio",
    image: "/assets/images/favicon.png",
  },
  {
    name: "Lira",
    description: "Your personal AI banking and financial assistant.",
    route: "/projects/Lira",
    image: "/assets/images/lira2.jpg",
  },
];

function Projects() {
  const navigate = useNavigate();

  // Handle navigation with animation
  const handleLearnMore = (route) => {
    navigate(route);
  };

  return (
    <section id="projects" className="wrapper style2 spotlights">
      <div className="inner">
        <div className="projects-container">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={`${project.name} Thumbnail`}
                className="project-image"
              />
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <button
                className="learn-more-button"
                onClick={() => handleLearnMore(project.route)}>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
