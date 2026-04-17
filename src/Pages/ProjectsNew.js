import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Navbar from "../components/Navbar";
import { orderedProjects } from "../data/projects";
import "./css/ProjectsNew.css";


const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.08, duration: 0.44, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.12,
      duration: 0.48,
      ease: "easeOut",
    },
  }),
};

const sluggrSlug = "nativemsg-stats";
const portfolioSlug = "personal-portfolio";
const wideSlug = "statscout";

// Which projects show in the "Other work" grid, in order.
const gridProjectSlugs = [
  wideSlug, // full-width at top
  portfolioSlug,
  "lira",
  "hof-oracle",
  "portfolipro",
];

function getTechLabel(tech) {
  return tech.shortLabel || tech.label;
}

function getPreviewThumb(project) {
  // Uses the lightSrc/darkSrc theme image, or listMedia, or detail.media.
  const media =
    project.listMedia ??
    project.detail?.media ??
    project.detail?.workflow?.find((step) => step.media)?.media ??
    null;
  return media;
}


function ThumbMedia({ project, wide = false }) {
  const media = getPreviewThumb(project);
  const thumbClass = `pn-card__thumb${wide ? " pn-card__thumb--wide" : ""}`;

  if (!media) {
    return (
      <div className={`${thumbClass} pn-card__thumb--fallback`}>
        <div className="pn-card__fallback">
          {project.logo?.src ? <img src={project.logo.src} alt="" /> : null}
          <span className="pn-card__fallback-label">
            {project.kicker || "Project"}
          </span>
        </div>
      </div>
    );
  }

  if (media.type === "video") {
    const mp4 = media.src?.endsWith(".webm")
      ? media.src.replace(".webm", ".mp4")
      : null;
    return (
      <div className="pn-card__thumb">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={media.poster}
          preload="metadata">
          <source src={media.src} type="video/webm" />
          {mp4 ? <source src={mp4} type="video/mp4" /> : null}
        </video>
      </div>
    );
  }

  if (media.type === "theme-image") {
    return (
      <div className="pn-card__thumb">
        <img
          className="pn-theme-image pn-theme-image--dark"
          src={media.darkSrc}
          alt=""
          loading="lazy"
        />
        <img
          className="pn-theme-image pn-theme-image--light"
          src={media.lightSrc}
          alt=""
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="pn-card__thumb">
      <img
        src={media.src}
        alt=""
        loading="lazy"
        style={media.fit ? { objectFit: media.fit } : undefined}
      />
    </div>
  );
}

function ProjectCard({ project, index, wide = false, motionState }) {
  const className = `pn-card${wide ? " pn-card--wide" : ""}`;

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      {...motionState}
      custom={index}>
      <ThumbMedia project={project} wide={wide} />
      <div className="pn-card__body">
        <div className="pn-card__meta">
          <span className="pn-card__kicker">{project.kicker}</span>
          {project.badge?.type === "blocki" ? (
            <span className="pn-badge pn-badge--class">Class project</span>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="pn-card__github-btn"
              aria-label="View repository">
              <Github size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
        <h3 className="pn-card__title">{project.name}</h3>
        <p className="pn-card__outcome">
          {project.compactSummary || project.summary}
        </p>
        <div className="pn-card__tags">
          {project.tech.slice(0, 4).map((t) => (
            <span key={`${project.slug}-${t.label}`} className="pn-tag">
              {getTechLabel(t)}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SluggrHero({ project, motionState }) {
  const media = getPreviewThumb(project);

  return (
    <motion.section
      className="pn-hero"
      variants={itemVariants}
      {...motionState}
      custom={1}>
      <div className="pn-hero__copy">
        <div className="pn-hero__tag">In development · 2026</div>
        <h2 className="pn-hero__title">{project.name}</h2>
        <div className="pn-hero__role"></div>
        <p className="pn-hero__summary">{project.summary}</p>
        <div className="pn-hero__stack">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={`hero-${t.label}`}
              className="pn-stack-pill pn-stack-pill--accent">
              {t.icon ? <img src={t.icon} alt="" /> : null}
              {getTechLabel(t)}
            </span>
          ))}
        </div>
        <div className="pn-hero__cta-row">
          <Link
            to={`/projects/${project.slug}`}
            className="pn-cta pn-cta--primary">
            Learn more
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="pn-hero__visual" aria-hidden="true">
        <span className="pn-hero__badge pn-hero__badge--top">
          <span className="pn-dot pn-dot--orange" />
          Live demo
        </span>
        <span className="pn-hero__badge pn-hero__badge--bottom">
          <span className="pn-dot pn-dot--blue" />
          iMessage-native
        </span>
        {media?.darkSrc && media?.lightSrc ? (
          <>
            <img
              className="pn-hero__phone pn-hero__phone--dark"
              src={media.darkSrc}
              alt="sluggr ai conversation on iPhone"
              loading="eager"
            />
            <img
              className="pn-hero__phone pn-hero__phone--light"
              src={media.lightSrc}
              alt=""
              loading="eager"
            />
          </>
        ) : null}
      </div>
    </motion.section>
  );
}

function ProjectsNew() {
  const shouldReduceMotion = useReducedMotion();
  const motionState = shouldReduceMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  const sluggr =
    orderedProjects.find((p) => p.slug === sluggrSlug) ?? orderedProjects[0];
  const gridProjects = gridProjectSlugs
    .map((slug) => orderedProjects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Navbar />
      <section id="projects" className="page-section pn-page">
        <div className="page-container">
          <div className="pn-shell">
            <motion.header
              className="pn-header"
              variants={headerVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible">
              <span className="section-eyebrow">Projects</span>
              <h1 className="pn-header__title">
                Selected
                <br />
                work.
              </h1>
              <p className="pn-header__lead">
                A small, deliberate catalogue of things I've built — from
                fantasy-sports assistants to financial research tools. Have a
                look!
              </p>
            </motion.header>

            <SluggrHero project={sluggr} motionState={motionState} />

            <section className="pn-section">
              <div className="pn-section__head">
                <h2>Other work</h2>
              </div>

              <div className="pn-grid">
                {gridProjects.map((project, i) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={i + 2}
                    wide={project.slug === wideSlug}
                    motionState={motionState}
                  />
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
