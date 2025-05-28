import React from "react";
import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HopIcon as Hockey, ChartCandlestick, Star } from "lucide-react";
import "./css/ProjectsNew.css";
import { motion } from "framer-motion";

const projects = [
  {
    name: "StatScout",
    desc: "End-to-end sports analytics platform: web scraping, ETL pipelines, and machine learning for player insights.",
    logo: null,
    tech: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        label: "Python",
      },
      {
        icon: "devicon-amazonwebservices-plain-wordmark",
        label: "AWS",
        isIcon: true,
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        label: "PyTorch",
      },
      {
        icon: "devicon-azuresqldatabase-plain colored",
        label: "SQL",
        isIcon: true,
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
        label: "Pandas",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
        label: "NumPy",
      },
    ],
    repo: "https://github.com/Kamiltczarnik/StatScout",
    route: "/projects/statscout",
  },
  {
    name: "PortfoliPro",
    desc: "ML-powered stock portfolio optimizer: LSTM forecasting, real-time stock data, and interactive dashboards.",
    logo: "/assets/images/portfolipro.png",
    tech: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        label: "React",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        label: "JavaScript",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        label: "Python",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        label: "Django",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
        label: "Pandas",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
        label: "NumPy",
      },
    ],
    blocki: true,
    route: "/projects/portfolipro",
  },
  {
    name: "Lira AI",
    desc: "Conversational AI banking assistant: OpenAI-powered advice, up to date financial data, and voice interaction.",
    logo: "/assets/images/lira2.jpg",
    tech: [
      { icon: "/assets/images/openai.png", label: "OpenAI API" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        label: "Python",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        label: "React",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        label: "TypeScript",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        label: "FastAPI",
      },
    ],
    repo: "https://github.com/Kamiltczarnik/Lira",
    route: "/projects/Lira",
  },
  {
    name: "HOF Oracle",
    desc: "NFL Hall of Fame predictor: player stat comparison, search, and HOF probability prediction.",
    logo: "/assets/images/National_Football_League_logo.svg.webp",
    tech: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        label: "React",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        label: "Python",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        label: "Google Cloud",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        label: "Flask",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        label: "JavaScript",
      },
      {
        icon: "devicon-azuresqldatabase-plain colored",
        label: "SQL",
        isIcon: true,
      },
    ],
    blocki: true,
    route: "/projects/hof-oracle",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.18 + i * 0.13,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function ProjectsNew() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section id="projects" className="page-section">
        <div className="page-container">
          <div className="projects-header">
            <h1 className="projects-title-header">Projects</h1>
            <p className="projects-subtitle-header">
              Explore my key projects—each built with modern tools and a focus
              on real-world impact.
            </p>
          </div>
          <motion.div
            className="projects-grid-2x2"
            initial="hidden"
            animate="visible">
            {projects.map((project, idx) => (
              <motion.div
                className={
                  "project-card-minimal" +
                  (project.name === "StatScout" ? " showcase-glow" : "")
                }
                key={project.name}
                variants={cardVariants}
                custom={idx}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    marginBottom: "0.7rem",
                    position: "relative",
                  }}>
                  {/* Profile Icon */}
                  <div
                    className="project-profile-icon"
                    style={{
                      background: "none",
                      borderRadius: 0,
                      width: project.name === "StatScout" ? 30 : 44,
                      height: project.name === "StatScout" ? 30 : 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                    }}>
                    {project.name === "StatScout" ? (
                      <Hockey
                        className="stat-scout-hockey-icon"
                        size={30}
                        style={{
                          background: "none",
                          borderRadius: 0,
                          width: 30,
                          height: 30,
                          display: "block",
                          padding: 0,
                        }}
                      />
                    ) : project.name === "PortfoliPro" ? (
                      <ChartCandlestick
                        className="portfolipro-stock-icon"
                        size={36}
                        style={{
                          background: "none",
                          borderRadius: 0,
                          width: 36,
                          height: 36,
                          display: "block",
                          padding: 0,
                          color: "#3b82f6",
                        }}
                      />
                    ) : (
                      <span className="project-profile-img-circle">
                        <img
                          src={project.logo}
                          alt={project.name + " logo"}
                          style={{
                            width: 44,
                            height: 44,
                            objectFit: "contain",
                            borderRadius: 0,
                            background: "none",
                            boxShadow: "none",
                          }}
                        />
                      </span>
                    )}
                  </div>
                  <div className="project-title">{project.name}</div>
                  {project.repo && (
                    <a
                      className="project-link-icon"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      title="View on GitHub"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        marginLeft: "auto",
                      }}>
                      <FaGithub className="project-github-icon" size={22} />
                    </a>
                  )}
                  {project.blocki && (
                    <span
                      className="blocki-badge"
                      tabIndex={0}
                      style={{
                        marginLeft: project.repo ? 8 : "auto",
                        position: "relative",
                        display: "inline-flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}>
                      <img
                        src="/assets/images/blocki.png"
                        alt="Block I"
                        className="blocki-icon"
                        style={{
                          height: 22,
                          width: "auto",
                          marginLeft: 2,
                          marginRight: 0,
                          verticalAlign: "middle",
                          opacity: 0.85,
                        }}
                      />
                      <span className="blocki-tooltip">
                        (Class project / private github)
                      </span>
                    </span>
                  )}
                </div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-tech-row">
                  {project.tech.map((tech, i) => (
                    <div
                      className="tech-item"
                      key={i}
                      style={{
                        position: "relative",
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "none",
                      }}>
                      {tech.isIcon ? (
                        <i
                          className={tech.icon}
                          style={{
                            fontSize: 28,
                            width: 28,
                            height: 28,
                            display: "block",
                          }}></i>
                      ) : (
                        <img
                          src={tech.icon}
                          alt={tech.label}
                          className="project-tech-icon"
                          style={{
                            width: 28,
                            height: 28,
                            objectFit: "contain",
                            background: "none",
                            borderRadius: 0,
                          }}
                        />
                      )}
                      <span className="tech-tooltip">{tech.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ProjectsNew;
