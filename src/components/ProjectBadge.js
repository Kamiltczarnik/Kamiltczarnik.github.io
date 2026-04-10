import React from "react";

function ProjectBadge({ badge }) {
  if (!badge) {
    return null;
  }

  if (badge.type === "blocki") {
    return (
      <span className="project-badge project-badge--blocki">
        <img src="/assets/images/illinois-block-i.svg" alt="" aria-hidden="true" />
        <span>{badge.label}</span>
      </span>
    );
  }

  return (
    <span className={`project-badge project-badge--${badge.type}`}>
      {badge.label}
    </span>
  );
}

export default ProjectBadge;
