import React from "react";

function getSystemProjectMark(slug) {
  const sharedProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.85,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
  };

  const markMap = {
    "nativemsg-stats": (
      <>
        <path
          {...sharedProps}
          d="M6 6.5A2.5 2.5 0 0 1 8.5 4h7A2.5 2.5 0 0 1 18 6.5v5A2.5 2.5 0 0 1 15.5 14H11l-2.75 2.5V14H8.5A2.5 2.5 0 0 1 6 11.5z"
        />
        <path {...sharedProps} d="M9 8.5h6" />
        <path {...sharedProps} d="M9 11h4.5" />
      </>
    ),
    statscout: (
      <>
        <path {...sharedProps} d="M5.5 18.5h13" />
        <path {...sharedProps} d="M7 17.5v-4.5" />
        <path {...sharedProps} d="M11.5 17.5v-8" />
        <path {...sharedProps} d="M16 17.5v-6" />
        <circle {...sharedProps} cx="16" cy="7" r="2.5" />
      </>
    ),
    lira: (
      <>
        <rect {...sharedProps} x="4" y="6" width="16" height="12" rx="3" />
        <path
          {...sharedProps}
          d="M7.5 13.5c1.2-1.4 2.4-1.4 3.6 0s2.4 1.4 3.6 0 2.4-1.4 3.6 0"
        />
      </>
    ),
    "personal-portfolio": (
      <>
        <rect {...sharedProps} x="4" y="5" width="16" height="14" rx="3" />
        <path {...sharedProps} d="M4 8.5h16" />
        <circle cx="6.8" cy="6.75" r="0.8" fill="currentColor" />
        <circle cx="9.8" cy="6.75" r="0.8" fill="currentColor" />
        <path {...sharedProps} d="M8 12h8" />
        <path {...sharedProps} d="M8 15.25h5.25" />
      </>
    ),
    "hof-oracle": (
      <>
        <path
          {...sharedProps}
          d="M12 4l5 2v5.25c0 3.18-1.95 6.04-5 7.75-3.05-1.71-5-4.57-5-7.75V6z"
        />
        <path {...sharedProps} d="M12 8v6" />
        <path {...sharedProps} d="M9 10.75h6" />
      </>
    ),
    portfolipro: (
      <>
        <path {...sharedProps} d="M5.5 18.5h13" />
        <path {...sharedProps} d="M7.5 14.5 10.25 11.75 12.5 13.25 16.5 9.25" />
        <path {...sharedProps} d="M16.5 9.25h-2.5" />
        <path {...sharedProps} d="M16.5 9.25v2.5" />
        <circle {...sharedProps} cx="7.5" cy="14.5" r="1.4" />
      </>
    ),
  };

  return markMap[slug] || null;
}

function ProjectMark({ project, size = "md" }) {
  const logoSrc = project.logo?.src;
  const imageFit = project.logo?.fit || "contain";
  const systemMark = getSystemProjectMark(project.slug);

  return (
    <span className={`project-mark project-mark--${size} project-mark--system`.trim()}>
      {systemMark ? (
        <svg
          className="project-mark__system-svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false">
          {systemMark}
        </svg>
      ) : logoSrc ? (
        <img
          className="project-mark__asset"
          src={logoSrc}
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
