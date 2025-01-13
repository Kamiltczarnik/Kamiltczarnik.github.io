import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPageWrapper from "./AnimatedPageWrapper";

const RouteWithNavigateBack = ({ Component }) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    // Navigate to /home and then scroll to #projects
    navigate("/home");
    setTimeout(() => {
      const projectsElement = document.getElementById("projects");
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Delay to ensure navigation completes before scrolling
  };

  return (
    <AnimatedPageWrapper>
      <Component navigateBack={navigateBack} />
    </AnimatedPageWrapper>
  );
};

export default RouteWithNavigateBack;
