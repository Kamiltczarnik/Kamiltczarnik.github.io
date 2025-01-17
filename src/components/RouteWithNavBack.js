import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouteWithNavigateBack = ({ Component }) => {
  const navigate = useNavigate();

  // Ensure it scrolls to the top when entering a project page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // No smooth scrolling here to avoid animation conflicts
  }, []);

  const navigateBack = () => {
    navigate("/");

    // Scroll to the projects section after home page renders
    setTimeout(() => {
      const projectsElement = document.getElementById("projects");
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: "instant", block: "start" }); // Avoid smooth to prevent flickering
      }
    }, 100); // Delay ensures page is fully loaded
  };

  return <Component navigateBack={navigateBack} />;
};

export default RouteWithNavigateBack;
