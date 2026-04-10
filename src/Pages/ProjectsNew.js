import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, MoveRight } from "lucide-react";
import Navbar from "../components/Navbar";
import ProjectBadge from "../components/ProjectBadge";
import ProjectMark from "../components/ProjectMark";
import TechIcon from "../components/TechIcon";
import { orderedProjects } from "../data/projects";
import "./css/ProjectsNew.css";

const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.06 + index * 0.06,
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const highlightedProjects = orderedProjects.filter(
  (project) => project.highlightTier === "highlighted"
);

const moreProjects = orderedProjects.filter(
  (project) => project.highlightTier === "more"
);

function ProjectPrimaryAction({ project }) {
  if (project.hasDetailPage) {
    return (
      <Link
        className="projects-card__link projects-card__link--primary"
        to={`/projects/${project.slug}`}>
        See more
        <MoveRight size={14} aria-hidden="true" />
      </Link>
    );
  }

  if (!project.repo) {
    return null;
  }

  return (
    <a
      className="projects-card__link projects-card__link--primary"
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${project.name} repository`}>
      View repo
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function ProjectRepoAction({ project }) {
  if (!project.hasDetailPage || !project.repo) {
    return null;
  }

  return (
    <a
      className="projects-card__link projects-card__link--secondary"
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${project.name} repository`}>
      <Github size={14} aria-hidden="true" />
      GitHub
    </a>
  );
}

function ProjectTechRow({ project }) {
  const visibleTech = project.tech.slice(0, 4);

  if (!visibleTech.length) {
    return null;
  }

  return (
    <div className="projects-card__tech-row" aria-label={`${project.name} technologies`}>
      {visibleTech.map((item) => (
        <TechIcon
          key={`${project.slug}-${item.label}`}
          tech={item}
          size="xs"
          className="projects-card__tech-chip"
        />
      ))}
    </div>
  );
}

function ProjectCard({ project, index, featured = false }) {
  const hasRepoAction = project.hasDetailPage && project.repo;
  const cardClassName = [
    "projects-card",
    featured ? "projects-card--feature" : "projects-card--compact",
    `projects-card--${project.accent || "neutral"}`,
  ].join(" ");

  return (
    <motion.article
      className={cardClassName}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}>
      <div className="projects-card__meta">
        <span className="projects-card__kicker">{project.kicker}</span>
        <ProjectBadge badge={project.badge} />
      </div>

      <div className="projects-card__identity">
        <div className="projects-card__mark-wrap">
          <ProjectMark project={project} size={featured ? "lg" : "md"} />
        </div>
        <div className="projects-card__body">
          <h3>{project.name}</h3>
          <p>{project.compactSummary}</p>
        </div>
      </div>

      <ProjectTechRow project={project} />

      <div
        className={`projects-card__actions${
          !hasRepoAction ? " projects-card__actions--single" : ""
        }`}>
        <ProjectPrimaryAction project={project} />
        <ProjectRepoAction project={project} />
      </div>
    </motion.article>
  );
}

function ProjectsNew() {
  return (
    <>
      <Navbar />
      <section id="projects" className="page-section projects-page">
        <div className="page-container">
          <div className="projects-shell">
            <motion.header
              className="projects-header"
              variants={headerVariants}
              initial="hidden"
              animate="visible">
              <span className="section-eyebrow">Projects</span>
            </motion.header>

            <section className="projects-section projects-section--featured">
              <div className="projects-feature-grid">
                {highlightedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index + 1}
                    featured
                  />
                ))}
              </div>
            </section>

            <section className="projects-section projects-section--more">
              <div className="projects-more-grid">
                {moreProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index + 3} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsNew;
