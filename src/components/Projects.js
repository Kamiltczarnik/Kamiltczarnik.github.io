import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectCard.css";

const projects = [
  {
    id: 1,
    title: "HOF Oracle",
    description:
      "Simplifying the process of finding the perfect Hall of Fame candidate.",
    image: "../assets/images/NFL.svg.webp", // Path to your image
    link: "/projects/project1", // Path to project-specific page
    backgroundColor: "#013369", // Custom background color
    footer: {
      reads: 7,
      views: 3224,
      comments: 21,
    },
  },
  {
    id: 2,
    title: "PortfolioPro",
    description: "A portfolio management tool for the modern investor.",
    image: "../assets/images/Designer.png",
    link: "/projects/project2",
    backgroundColor: "#00400e", // Custom background color
    footer: {
      reads: 11,
      views: 1699,
      comments: 27,
    },
  },
  {
    id: 3,
    title: "TBD",
    description: "In the works!.",
    image: "../assets/images/tbd.png",
    link: "/projects/project3",
    backgroundColor: "#ffec19", // Custom background color
    footer: {
      reads: 11,
      views: 1699,
      comments: 27,
    },
  },
  // Add more projects here
];

function Projects() {
  return (
    <section id="projects" className="wrapper style2 spotlights">
      <div className="inner">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
