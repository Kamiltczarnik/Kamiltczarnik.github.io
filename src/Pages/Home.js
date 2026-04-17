import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { IoBaseballOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import TechIcon from "../components/TechIcon";
import "./css/Home.css";

const homeTechnologies = [
  {
    label: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    label: "GCP",
    shortLabel: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    label: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    label: "TypeScript",
    shortLabel: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    label: "JavaScript",
    shortLabel: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    label: "SQL",
    className: "devicon-azuresqldatabase-plain colored",
  },
  {
    label: "Terraform",
    shortLabel: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  },
  {
    label: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    label: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
];

const showcaseTechnologies = [
  {
    label: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    label: "GCP",
    shortLabel: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    label: "SQL",
    className: "devicon-azuresqldatabase-plain colored",
  },
  {
    label: "Terraform",
    shortLabel: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  },
  {
    label: "FastAPI",
    className: "devicon-fastapi-plain colored",
  },
  {
    label: "RCS",
    text: "RCS",
  },
];

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const motionState = shouldReduceMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bubbleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.12 + index * 0.11,
        duration: 0.44,
        ease: "easeOut",
      },
    }),
  };

  const centerVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: 0.12 + index * 0.11,
        duration: 0.44,
        ease: "easeOut",
      },
    }),
  };

  const getOrder = (bubble) => {
    if (isMobile) {
      switch (bubble) {
        case "center":
          return 0;
        case "student":
          return 1;
        case "whoami":
          return 2;
        case "about":
          return 3;
        case "quote":
          return 4;
        case "tech":
          return 5;
        case "edu":
          return 6;
        default:
          return 10;
      }
    }

    switch (bubble) {
      case "whoami":
        return 0;
      case "star":
        return 1;
      case "student":
        return 3;
      case "about":
        return 4;
      case "quote":
        return 5;
      case "tech":
        return 6;
      case "edu":
        return 7;
      case "center":
        return 2;
      default:
        return 10;
    }
  };

  return (
    <>
      <Navbar />
      <section id="home" className="page-section home-page">
        <div className="page-container">
          <div className="grid-6x6-layout">
            <motion.div
              className="bubble who-am-i-box showcase-glow"
              variants={bubbleVariants}
              {...motionState}
              custom={getOrder("whoami")}>
              <h3>Project Spotlight</h3>

              <div className="showcase-content">
                <div className="showcase-copy-column">
                  <div className="showcase-project-name">
                    sluggr ai
                    <IoBaseballOutline className="spotlight-project-icon" />
                  </div>
                  <ul className="about-bullets">
                    <li>
                      Fantasy assistant that delivers{" "}
                      <span className="edu-highlight">NFL + MLB data</span>{" "}
                      directly through RCS conversations.
                    </li>
                    <li>
                      Built to answer all fantasy football questions as your own
                      personal assistant.
                    </li>
                    <li>
                      Focused on a messaging-first experience that feels fast,
                      useful, and native on mobile.
                    </li>
                  </ul>
                </div>

                <div className="showcase-divider" aria-hidden="true"></div>

                <div className="sports-logos showcase-stack-column">
                  <span className="spotlight-stack-label">Tech Stack</span>
                  <div className="showcase-tech-grid">
                    {showcaseTechnologies.map((tech) => (
                      <TechIcon
                        key={tech.label}
                        tech={tech}
                        size="xs"
                        className="showcase-tech-chip"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bubble student-role-box"
              variants={bubbleVariants}
              {...motionState}
              custom={getOrder("student")}>
              <blockquote>Software Engineer</blockquote>
            </motion.div>

            <motion.div
              className="bubble center-reference-box"
              variants={centerVariants}
              {...motionState}
              custom={getOrder("center")}>
              <div className="profile-avatar">
                <a
                  className="profile-social-link"
                  href="https://github.com/Kamiltczarnik"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub">
                  <i className="devicon-github-original profile-social-icon"></i>
                </a>
                <a
                  className="profile-social-link"
                  href="https://www.linkedin.com/in/kamil-czarnik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn">
                  <i className="devicon-linkedin-plain profile-social-icon"></i>
                </a>
              </div>
              <div className="profile-name">Kamil Czarnik</div>
              <div className="profile-location">
                <MapPin size={18} aria-hidden="true" />
                <span>Chicago, IL</span>
              </div>
            </motion.div>

            <motion.header
              className="home-about-header"
              variants={bubbleVariants}
              {...motionState}
              custom={getOrder("about")}>
              <span className="section-eyebrow">Profile</span>
            </motion.header>

            <motion.div
              className="bubble quote-bottom-box"
              variants={bubbleVariants}
              {...motionState}
              custom={getOrder("quote")}>
              <div className="reading-figure-box" aria-hidden="true">
                <img
                  src="/assets/images/coding-figure-right.png"
                  alt=""
                  className="reading-figure-illustration"
                />
              </div>
              <blockquote>
                Water polo player, hackathon enthusiast, and lifelong learner.
              </blockquote>
            </motion.div>

            <motion.div
              className="bubble technologies-vertical-box"
              variants={bubbleVariants}
              {...motionState}
              custom={getOrder("tech")}>
              <h3>Technologies</h3>
              <div className="tech-grid">
                {homeTechnologies.map((tech) => (
                  <TechIcon key={tech.label} tech={tech} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bubble education-bottom-box"
              variants={bubbleVariants}
              {...motionState}
              custom={getOrder("edu")}>
              <h3>
                Education
                <img
                  src="/assets/images/illinois-block-i.svg"
                  alt="Block I icon"
                  className="blocki-icon"
                />
              </h3>

              <div className="education-content">
                <div className="education-column">
                  <div className="education-item">
                    <h4>
                      <span className="education-school">
                        University of Illinois Urbana-Champaign
                      </span>
                      <span className="year">(Aug 2024 - Present)</span>
                    </h4>
                    <ul>
                      <li>
                        Senior at the University of Illinois Urbana-Champaign
                        studying{" "}
                        <span className="edu-highlight">
                          {" "}
                          Computer Science{" "}
                        </span>
                      </li>
                      <li>
                        Mens Water Polo{" "}
                        <span className="edu-highlight">
                          Executive Board Member
                        </span>
                        .
                      </li>
                      <li>
                        <span className="edu-highlight">GPA</span> :{" "}
                        <span className="edu-highlight">3.84 / 4.00</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="education-divider"></div>

                <div className="education-column">
                  <div className="education-item">
                    <h4>
                      <span className="education-school">Oakton College</span>
                      <span className="year">(Aug 2022 - May 2024)</span>
                    </h4>
                    <ul>
                      <li>
                        Completed an Associates Degree in Science with a focus
                        in Computer Science.
                      </li>
                      <li>
                        <span className="edu-highlight">GPA</span> :{" "}
                        <span className="edu-highlight">3.89 / 4.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
