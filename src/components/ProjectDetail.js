import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  project1: {
    title: "HOF Oracle",
    description: "This is a detailed description of Project 1.",
    image: "../assets/images/HOForacle.png",
  },
  project2: {
    title: "Project 2",
    description: "This is a detailed description of Project 2.",
    image: "/images/project2.png",
  },
  project3: {
    title: "Project 3",
    description: "This is a detailed description of Project 3.",
    image: "/images/project3.png",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
