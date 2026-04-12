import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, MoveRight } from "lucide-react";
import Navbar from "../components/Navbar";
import ProjectBadge from "../components/ProjectBadge";
import ProjectMark from "../components/ProjectMark";
import { orderedProjects } from "../data/projects";
import "./css/ProjectsNew.css";

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
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
  hidden: { opacity: 0, y: 22 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 + index * 0.06,
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const sluggrProjectSlug = "nativemsg-stats";
const secondaryFeaturedProjectSlug = "lira";
const galleryProjectSlugs = [
  "statscout",
  "personal-portfolio",
  "hof-oracle",
  "portfolipro",
];

const featuredProject =
  orderedProjects.find((project) => project.slug === sluggrProjectSlug) ??
  orderedProjects[0];

const secondaryFeaturedProject =
  orderedProjects.find((project) => project.slug === secondaryFeaturedProjectSlug) ??
  orderedProjects[1];

const galleryProjects = galleryProjectSlugs
  .map((slug) => orderedProjects.find((project) => project.slug === slug))
  .filter(Boolean);

function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

function getTechLabel(tech) {
  return tech.shortLabel || tech.label;
}

function getAccentRgb(project) {
  if (project.accent === "orange") {
    return "249, 115, 22";
  }

  if (project.accent === "neutral") {
    return "148, 163, 184";
  }

  return "59, 130, 246";
}

function getPreviewMedia(project) {
  return (
    project.listMedia ??
    project.detail?.media ??
    project.detail?.workflow?.find((step) => step.media)?.media ??
    null
  );
}

function ProjectPrimaryAction({ project, className = "" }) {
  const actionClassName = classNames("projects-action-link", className);

  if (project.hasDetailPage) {
    return (
      <Link className={actionClassName} to={`/projects/${project.slug}`}>
        Learn more
        <MoveRight size={15} aria-hidden="true" />
      </Link>
    );
  }

  if (!project.repo) {
    return null;
  }

  return (
    <a
      className={actionClassName}
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${project.name} repository`}>
      View repo
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function ProjectRepoAction({ project, className = "" }) {
  if (!project.hasDetailPage || !project.repo) {
    return null;
  }

  return (
    <a
      className={classNames("projects-repo-link", className)}
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${project.name} repository`}>
      <Github size={14} aria-hidden="true" />
      GitHub
    </a>
  );
}

function ProjectTechPills({ project, limit = 4, className = "" }) {
  const visibleTech = project.tech.slice(0, limit);

  if (!visibleTech.length) {
    return null;
  }

  return (
    <div className={classNames("projects-tech-pills", className)}>
      {visibleTech.map((item) => (
        <span key={`${project.slug}-${item.label}`} className="projects-tech-pill">
          {getTechLabel(item)}
        </span>
      ))}
    </div>
  );
}

function ThemePreviewImage({ media, alt, className = "", loading = "lazy" }) {
  if (!media?.lightSrc || !media?.darkSrc) {
    return null;
  }

  return (
    <>
      <img
        className={classNames(className, "projects-theme-image", "projects-theme-image--dark")}
        src={media.lightSrc}
        alt={alt}
        loading={loading}
      />
      <img
        className={classNames(className, "projects-theme-image", "projects-theme-image--light")}
        src={media.darkSrc}
        alt=""
        aria-hidden="true"
        loading={loading}
      />
    </>
  );
}

function ProjectFallbackPreview({ project }) {
  return (
    <div
      className="projects-media-frame projects-media-frame--fallback"
      role="img"
      aria-label={`${project.name} project signal preview`}>
      <div className="projects-media-frame__grid" aria-hidden="true"></div>
      <div className="projects-media-frame__fallback-content">
        <div className="projects-media-frame__fallback-mark">
          <ProjectMark project={project} size="lg" />
        </div>

        <div className="projects-media-frame__bars" aria-hidden="true">
          <span style={{ height: "42%" }}></span>
          <span style={{ height: "68%" }}></span>
          <span style={{ height: "54%" }}></span>
          <span style={{ height: "82%" }}></span>
        </div>

        <div className="projects-media-frame__fallback-copy">
          <span>Pipeline signal</span>
          <strong>Models, data prep, and player insight in one place.</strong>
        </div>
      </div>
    </div>
  );
}

function ProjectPreviewMedia({ project, className = "", priority = false }) {
  const media = getPreviewMedia(project);
  const wrapperClassName = classNames(
    "projects-media-frame",
    `projects-media-frame--${project.listLayout || "default"}`,
    className
  );

  if (!media) {
    return <ProjectFallbackPreview project={project} />;
  }

  if (media.type === "video") {
    const mp4Source = media.src.endsWith(".webm")
      ? media.src.replace(".webm", ".mp4")
      : null;

    return (
      <div
        className={wrapperClassName}
        role="img"
        aria-label={media.alt || `${project.name} preview`}>
        <video autoPlay loop muted playsInline poster={media.poster} preload="metadata">
          <source src={media.src} type="video/webm" />
          {mp4Source ? <source src={mp4Source} type="video/mp4" /> : null}
        </video>
      </div>
    );
  }

  if (media.type === "theme-image") {
    return (
      <div
        className={wrapperClassName}
        role="img"
        aria-label={media.alt || `${project.name} preview`}>
        <ThemePreviewImage
          media={media}
          alt=""
          className="projects-media-frame__asset"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
    );
  }

  return (
    <div
      className={wrapperClassName}
      role="img"
      aria-label={media.alt || `${project.name} preview`}>
      <img
        className="projects-media-frame__asset"
        src={media.src}
        alt=""
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}

function ProjectStatement({ project, className = "" }) {
  return (
    <p className={classNames("projects-card-statement", className)}>
      <strong>{project.listRole}</strong>
      <span>{project.listOutcome}</span>
    </p>
  );
}

function SluggrHeroCard({ project, index, motionState }) {
  const media = getPreviewMedia(project);

  return (
    <motion.article
      className="projects-hero-card"
      variants={cardVariants}
      {...motionState}
      custom={index}
      style={{ "--project-accent-rgb": getAccentRgb(project) }}>
      <div className="projects-hero-card__copy">
        <div className="projects-hero-card__meta">
          <span className="projects-card-kicker">{project.kicker}</span>
          <ProjectBadge badge={project.badge} />
        </div>

        <div className="projects-hero-card__headline">
          <div>
            <span className="projects-card-label">Featured project</span>
            <h2>{project.name}</h2>
          </div>
          <ProjectMark project={project} size="lg" />
        </div>

        <ProjectStatement project={project} className="projects-card-statement--hero" />

        <p className="projects-hero-card__summary">{project.summary}</p>

        <div className="projects-hero-card__notes">
          <article className="projects-hero-note">
            <span>Why it reads stronger now</span>
            <p>
              Recruiters should be able to understand the product surface without
              opening the case study first.
            </p>
          </article>

          <article className="projects-hero-note">
            <span>What I shaped</span>
            <p>
              Messaging-first product thinking backed by Python workflows, cloud
              infrastructure, and delivery design.
            </p>
          </article>
        </div>

        <div className="projects-hero-card__stack">
          <span className="projects-stack-label">Core stack</span>
          <ProjectTechPills project={project} limit={5} />
        </div>

        <div className="projects-hero-card__actions">
          <ProjectRepoAction project={project} />
          <ProjectPrimaryAction
            project={project}
            className="projects-action-link--button"
          />
        </div>
      </div>

      <div className="projects-hero-card__media">
        <div
          className="projects-hero-preview"
          role="img"
          aria-label="sluggr ai readable conversation preview">
          <div className="projects-hero-preview__header">
            <span className="projects-hero-preview__label">Readable chat preview</span>
            <span className="projects-hero-preview__pill">On-device UI</span>
          </div>

          <div className="projects-hero-preview__frame">
            <ThemePreviewImage
              media={media}
              alt=""
              className="projects-hero-preview__crop"
              loading="eager"
            />
          </div>
        </div>

        <div className="projects-hero-phone-stage">
          <span className="projects-hero-preview__label">Mobile surface</span>
          <div
            className="projects-hero-phone-stage__frame"
            role="img"
            aria-label={media?.alt || `${project.name} phone preview`}>
            <ThemePreviewImage
              media={media}
              alt=""
              className="projects-hero-phone"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedWorkCard({ project, index, motionState }) {
  return (
    <motion.article
      className="projects-feature-showcase"
      variants={cardVariants}
      {...motionState}
      custom={index}
      style={{ "--project-accent-rgb": getAccentRgb(project) }}>
      <div className="projects-feature-showcase__media">
        <ProjectPreviewMedia project={project} className="projects-media-frame--feature" />
      </div>

      <div className="projects-feature-showcase__content">
        <div className="projects-feature-showcase__meta">
          <span className="projects-card-kicker">{project.kicker}</span>
          <ProjectBadge badge={project.badge} />
        </div>

        <div className="projects-feature-showcase__headline">
          <div>
            <span className="projects-card-label">Secondary feature</span>
            <h2>{project.name}</h2>
          </div>
          <ProjectMark project={project} size="lg" />
        </div>

        <ProjectStatement project={project} />
        <p className="projects-feature-showcase__summary">{project.summary}</p>

        <div className="projects-feature-showcase__stack">
          <span className="projects-stack-label">Selected tools</span>
          <ProjectTechPills project={project} limit={4} />
        </div>

        <div className="projects-feature-showcase__actions">
          <ProjectPrimaryAction
            project={project}
            className="projects-action-link--button"
          />
          <ProjectRepoAction project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectGalleryCard({ project, index, motionState }) {
  return (
    <motion.article
      className="projects-gallery-card"
      variants={cardVariants}
      {...motionState}
      custom={index}
      style={{ "--project-accent-rgb": getAccentRgb(project) }}>
      <div className="projects-gallery-card__media">
        <ProjectPreviewMedia project={project} />
      </div>

      <div className="projects-gallery-card__content">
        <div className="projects-gallery-card__meta">
          <span className="projects-card-kicker">{project.kicker}</span>
          <ProjectBadge badge={project.badge} />
        </div>

        <div className="projects-gallery-card__headline">
          <h3>{project.name}</h3>
          <ProjectMark project={project} size="md" />
        </div>

        <ProjectStatement project={project} />
        <p className="projects-gallery-card__summary">{project.compactSummary}</p>

        <ProjectTechPills project={project} limit={4} />

        <div className="projects-gallery-card__actions">
          <ProjectPrimaryAction project={project} />
          <ProjectRepoAction project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsNew() {
  const shouldReduceMotion = useReducedMotion();
  const motionState = shouldReduceMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <>
      <Navbar />
      <section id="projects" className="page-section projects-page">
        <div className="page-container">
          <div className="projects-shell">
            <motion.header
              className="projects-page-header"
              variants={headerVariants}
              {...motionState}>
              <span className="section-eyebrow">Projects</span>
              <h1 className="projects-page-title">
                Projects that show the product and the build.
              </h1>
              <p className="projects-page-lead">
                A recruiter should be able to scan what the product is, what I
                contributed, and why the work matters without deciphering a wall
                of tiny cards first.
              </p>
            </motion.header>

            <section className="projects-section" aria-labelledby="projects-featured-heading">
              <div className="projects-section__header">
                <div>
                  <span className="projects-section-label">Featured project</span>
                  <p className="projects-section__copy">
                    The lead piece gets more room because the product itself deserves
                    to read clearly, especially on mobile.
                  </p>
                </div>
              </div>

              <h2 id="projects-featured-heading" className="projects-visually-hidden">
                Featured project
              </h2>

              <SluggrHeroCard
                key={featuredProject.slug}
                project={featuredProject}
                index={1}
                motionState={motionState}
              />
            </section>

            <section className="projects-section" aria-labelledby="projects-selected-heading">
              <div className="projects-section__header">
                <div>
                  <span className="projects-section-label">Selected work</span>
                  <p className="projects-section__copy">
                    The rest of the page shifts from compressed tiles to a gallery with
                    real surfaces, clearer outcomes, and enough breathing room to look
                    intentional.
                  </p>
                </div>
              </div>

              <h2 id="projects-selected-heading" className="projects-visually-hidden">
                Selected work
              </h2>

              <FeaturedWorkCard
                project={secondaryFeaturedProject}
                index={2}
                motionState={motionState}
              />

              <div className="projects-gallery-grid">
                {galleryProjects.map((project, index) => (
                  <ProjectGalleryCard
                    key={project.slug}
                    project={project}
                    index={index + 3}
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
