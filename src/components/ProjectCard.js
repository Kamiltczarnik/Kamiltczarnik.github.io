import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, link, backgroundColor, footer }) => {
  return (
    <div className="project-card" style={{ backgroundColor: backgroundColor }}>
      <a href={link} className="project-link">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
      <div className="project-footer">
        <div className="footer-item">
          <p>{footer.reads}</p>
          <span>Reads</span>
        </div>
        <div className="footer-item">
          <p>{footer.views}</p>
          <span>Views</span>
        </div>
        <div className="footer-item">
          <p>{footer.comments}</p>
          <span>Comments</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
