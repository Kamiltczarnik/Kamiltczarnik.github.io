import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MoveRight } from "lucide-react";
import Navbar from "../components/Navbar";
import ProjectBadge from "../components/ProjectBadge";
import ProjectMark from "../components/ProjectMark";
import TechIcon from "../components/TechIcon";
import { getProjectBySlug, projectsWithDetails } from "../data/projects";
import "./css/ProjectDetail.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + index * 0.06,
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function DetailMedia({ project, media, compact = false }) {
  if (!media) {
    return null;
  }

  const className = `project-detail-media${
    compact ? " project-detail-media--compact" : ""
  }`;

  if (media.type === "video") {
    const mp4Source = media.src.endsWith(".webm")
      ? media.src.replace(".webm", ".mp4")
      : null;

    return (
      <div className={className}>
        <video autoPlay loop muted playsInline poster={media.poster}>
          <source src={media.src} type="video/webm" />
          {mp4Source && <source src={mp4Source} type="video/mp4" />}
        </video>
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <div className={className}>
        <img src={media.src} alt={media.alt || project.name} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`${className} project-detail-media--monogram`}>
      <ProjectMark project={project} size="lg" />
      <p>{media.alt || `${project.name} project mark`}</p>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project || !project.hasDetailPage) {
    return <Navigate to="/projects" replace />;
  }

  const { detail } = project;
  const relatedProjects = projectsWithDetails
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);
  const snapshotCards = [
    ...detail.highlights.map((item) => ({ ...item, kind: "highlight" })),
    ...detail.contributions.map((item) => ({ ...item, kind: "contribution" })),
  ];

  return (
    <>
      <Navbar />
      <section
        className={`page-section project-detail-page project-detail-page--${
          project.accent || "neutral"
        }`}>
        <div className="page-container project-detail-page__container">
          <motion.article
            className="project-detail-hero surface-panel"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={0}>
            <div className="project-detail-hero__copy">
              <Link className="project-detail-back" to="/projects">
                <ArrowLeft size={15} aria-hidden="true" />
                Back to projects
              </Link>

              <div className="project-detail-hero__topline">
                <span className="section-eyebrow">{project.kicker}</span>
                <ProjectBadge badge={project.badge} />
              </div>

              <div className="project-detail-hero__headline">
                <div className="project-detail-hero__title-block">
                  <h1>{project.name}</h1>
                  <p>{project.summary}</p>
                </div>
                <ProjectMark project={project} size="lg" />
              </div>

              <p className="project-detail-hero__lead">{detail.lead}</p>

              <div className="project-detail-meta" aria-label="Project metadata">
                {detail.meta.map((item) => (
                  <div key={`${project.slug}-${item.label}`} className="project-detail-meta__item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <div className="project-detail-hero__stack">
                <span className="section-eyebrow">Technologies</span>
                <div className="project-detail-tech-row">
                  {project.tech.map((item) => (
                    <TechIcon
                      key={`${project.slug}-${item.label}`}
                      tech={item}
                      size="xs"
                    />
                  ))}
                </div>
              </div>

              <div className="project-detail-hero__actions">
                <Link className="button-link button-link--secondary" to="/projects">
                  All projects
                </Link>
                {project.repo && (
                  <a
                    className="button-link button-link--primary"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <DetailMedia project={project} media={detail.media} />
          </motion.article>

          <motion.section
            className="project-detail-section"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={1}>
            <div className="project-detail-section__heading">
              <span className="section-eyebrow">Snapshot</span>
              <h2>Core ideas, product choices, and the work I shaped.</h2>
            </div>

            {project.detailPageType === "placeholder" && (
              <article className="project-detail-status surface-panel">
                <div>
                  <span className="section-eyebrow">Current state</span>
                  <p>
                    This project is visible now with a polished placeholder page
                    so it can stay accessible while the deeper write-up and
                    supporting media are still being assembled.
                  </p>
                </div>
              </article>
            )}

            <div className="project-detail-grid">
              {snapshotCards.map((item) => (
                <article
                  key={`${project.slug}-${item.kind}-${item.title}`}
                  className={`project-detail-card surface-panel${
                    item.kind === "contribution"
                      ? " project-detail-card--contribution"
                      : ""
                  }`}>
                  <span className="section-eyebrow">
                    {item.kind === "contribution" ? "Contribution" : "Highlight"}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="project-detail-section"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={2}>
            <div className="project-detail-section__heading">
              <span className="section-eyebrow">Workflow</span>
              <h2>How the experience unfolds.</h2>
            </div>

            <div className="project-workflow-grid">
              {detail.workflow.map((step, index) => (
                <article
                  key={`${project.slug}-${step.title}`}
                  className={`project-workflow-card surface-panel${
                    !step.media ? " project-workflow-card--text" : ""
                  }`}>
                  <div className="project-workflow-card__topline">
                    <span className="project-workflow-card__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.body}</p>
                  <DetailMedia project={project} media={step.media} compact />
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="project-detail-footer surface-panel"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={3}>
            <div className="project-detail-footer__header">
              <div>
                <span className="section-eyebrow">Other projects</span>
                <h2>Keep moving through the rest of my work.</h2>
                <p>Open another project directly or jump back to the full index.</p>
              </div>
              <Link className="button-link button-link--secondary" to="/projects">
                Back to projects
              </Link>
            </div>

            <div className="project-related-grid">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  className="project-related-card"
                  to={`/projects/${item.slug}`}>
                  <div className="project-related-card__topline">
                    <ProjectMark project={item} size="md" />
                    <span>{item.kicker}</span>
                  </div>
                  <div className="project-related-card__body">
                    <strong>{item.name}</strong>
                    <p>{item.compactSummary}</p>
                  </div>
                  <span className="project-related-card__cta">
                    Open project
                    <MoveRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}

export default ProjectDetailPage;
