// AnimatedRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectsNew from "./Pages/ProjectsNew";
import ContactNew from "./Pages/ContactNew";
import ProjectDetailPage from "./Pages/ProjectDetailPage";

export default function AnimatedRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsNew />} />
      <Route path="/contact" element={<ContactNew />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}
