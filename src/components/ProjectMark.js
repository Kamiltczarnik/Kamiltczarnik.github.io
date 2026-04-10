import React from "react";

function ProjectMark({ project, size = "md" }) {
  const kind = project.logo?.kind || "monogram";
  const imageFit = project.logo?.fit || "contain";
  const logoSrc = project.logo?.src;

  return (
    <span
      className={`project-mark project-mark--${size} project-mark--${
        project.accent || "neutral"
      } project-mark--${kind || "monogram"}`.trim()}>
      {logoSrc ? (
        <img
          className="project-mark__asset"
          src={project.logo.src}
          alt=""
          aria-hidden="true"
          style={{ objectFit: imageFit }}
        />
      ) : (
        <span className="project-mark__monogram" aria-hidden="true">
          {project.logo?.text || project.name.slice(0, 2)}
        </span>
      )}
    </span>
  );
}

export default ProjectMark;
