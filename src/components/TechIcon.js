import React from "react";

function TechIcon({ tech, size = "md", className = "" }) {
  return (
    <span className={`tech-icon-chip tech-icon-chip--${size} ${className}`.trim()}>
      <span className="tech-icon-chip__surface" aria-hidden="true">
        <span className="tech-icon-chip__glyph">
          {tech.icon ? (
            <img src={tech.icon} alt="" loading="lazy" />
          ) : tech.className ? (
            <i className={tech.className}></i>
          ) : (
            <span className="tech-icon-chip__text">{tech.text}</span>
          )}
        </span>
      </span>
      <span className="tech-icon-chip__label">{tech.shortLabel || tech.label}</span>
    </span>
  );
}

export default TechIcon;
