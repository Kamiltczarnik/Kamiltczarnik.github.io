import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  project1: {
    title: "Project 1",
    description: "This is an awesome project about X.",
    image: "/images/project1.png",
  },
  project2: {
    title: "Project 2",
    description: "This is a cool project about Y.",
    image: "/images/project2.png",
  },
  project3: {
    title: "Project 3",
    description: "This is a cool project about Z.",
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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} style={{ width: "50%" }} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
