import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GitHubCalendar from "react-github-calendar";
import { HopIcon as Hockey } from "lucide-react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import "./css/Home.css";

function Home() {
  // Detect dark mode from body class
  const isDarkMode =
    typeof document !== "undefined" &&
    document.body.classList.contains("light-mode") === false;

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants
  const bubbleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.13,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  const centerVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: 0.15 + i * 0.13, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Animation order: desktop vs mobile
  // Desktop: who-am-i, star-image, student-role, quote, technologies, education, center (fades in last)
  // Mobile: center, student-role, who-am-i, technologies (education, quote, star-image hidden)
  const getOrder = (bubble) => {
    if (isMobile) {
      switch (bubble) {
        case "center":
          return 0;
        case "student":
          return 1;
        case "whoami":
          return 2;
        case "tech":
          return 3;
        default:
          return 10;
      }
    } else {
      switch (bubble) {
        case "whoami":
          return 0;
        case "star":
          return 1;
        case "student":
          return 2;
        case "quote":
          return 3;
        case "tech":
          return 4;
        case "edu":
          return 5;
        case "center":
          return 6;
        default:
          return 10;
      }
    }
  };

  return (
    <>
      <Navbar />
      <section id="home" className="page-section">
        <div className="page-container">
          <div className="grid-6x6-layout">
            {/* "Who am I?" Box */}
            <motion.div
              className="bubble who-am-i-box showcase-glow"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={getOrder("whoami")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.1rem",
                  flexWrap: "nowrap",
                  minWidth: 0,
                }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: 0,
                  }}>
                  <div className="stat-scout-header">
                    <span className="stat-scout-title">
                      Personal Project Spotlight:
                    </span>
                    <span className="stat-scout-project">
                      StatScout
                      <Hockey className="stat-scout-hockey-icon" size={28} />
                    </span>
                  </div>
                </span>
              </div>
              <div
                className="working-on-content"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  flexWrap: "wrap",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}>
                  <ul className="about-bullets" style={{ margin: 0 }}>
                    <li>
                      Predicting sports outcomes using{" "}
                      <span className="edu-highlight">Machine Learning</span>
                    </li>
                    <li>
                      Automating data collection from NFL, NBA, MLB, and NHL
                      using web scrapers and public APIs
                    </li>
                    <li>
                      Designing scalable{" "}
                      <span className="edu-highlight">ETL pipelines</span> and
                      cloud storage with
                      <span className="edu-highlight"> AWS</span>
                    </li>
                    <li>
                      Currently developing predictive models with{" "}
                      <span className="edu-highlight">PyTorch</span> and
                      <span className="edu-highlight"> Spark</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="sports-logos"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                    alignItems: "flex-start",
                  }}>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#3b82f6",
                      marginBottom: "0.2rem",
                    }}>
                    Tech Stack:
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.7rem",
                      alignItems: "center",
                    }}>
                    <div
                      className="tech-item"
                      style={{
                        position: "relative",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        alt="Python"
                        title="Python"
                        style={{
                          height: "32px",
                          width: "32px",
                          objectFit: "contain",
                        }}
                      />
                      <span className="tech-tooltip">Python</span>
                    </div>
                    <div
                      className="tech-item"
                      style={{
                        position: "relative",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}>
                      <i
                        className="devicon-amazonwebservices-plain-wordmark"
                        title="AWS"
                        style={{
                          fontSize: "32px",
                          width: "32px",
                          height: "32px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}></i>
                      <span className="tech-tooltip">AWS</span>
                    </div>
                    <div
                      className="tech-item"
                      style={{
                        position: "relative",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}>
                      <i
                        className="devicon-azuresqldatabase-plain colored"
                        title="SQL"
                        style={{
                          fontSize: "32px",
                          width: "32px",
                          height: "32px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}></i>
                      <span className="tech-tooltip">SQL</span>
                    </div>
                    <div
                      className="tech-item"
                      style={{
                        position: "relative",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
                        alt="Pandas"
                        title="Pandas"
                        style={{
                          height: "32px",
                          width: "32px",
                          objectFit: "contain",
                        }}
                      />
                      <span className="tech-tooltip">Pandas</span>
                    </div>
                    <div
                      className="tech-item"
                      style={{
                        position: "relative",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
                        alt="PyTorch"
                        title="PyTorch"
                        style={{
                          height: "32px",
                          width: "32px",
                          objectFit: "contain",
                        }}
                      />
                      <span className="tech-tooltip">PyTorch</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Star Image Quote Box */}
            <motion.div
              className="bubble star-image-box"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={getOrder("star")}>
              <img src="/assets/images/Headshot.jpg" alt="Headshot" />
            </motion.div>

            {/* Student & Full Stack Developer Box */}
            <motion.div
              className="bubble student-role-box"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={getOrder("student")}>
              <h2> Software Engineer </h2>
              <h2> and Data Analyst</h2>
            </motion.div>

            {/* Center Box */}
            <motion.div
              className="bubble center-reference-box"
              variants={centerVariants}
              initial="hidden"
              animate="visible"
              custom={getOrder("center")}>
              <div
                className="profile-avatar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.7rem",
                }}>
                <a
                  href="https://github.com/Kamiltczarnik"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub">
                  <i
                    className="devicon-github-original profile-social-icon"
                    style={{
                      fontSize: "2.3rem",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kamil-czarnik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn">
                  <i
                    className="devicon-linkedin-plain profile-social-icon"
                    style={{
                      fontSize: "2.3rem",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}></i>
                </a>
              </div>
              <div className="profile-name">Kamil Czarnik</div>
              <div className="profile-location">
                <MapPin size={18} style={{ marginRight: "0.2rem" }} />
                <span>Chicago, IL</span>
              </div>
            </motion.div>

            {/* Quote Box */}
            <motion.div
              className="bubble quote-bottom-box"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={getOrder("quote")}>
              <blockquote>
                Water polo player, hackathon enthusiast, and lifelong learner.
              </blockquote>
            </motion.div>

            {/* Technologies Box */}
            <motion.div
              className="bubble technologies-vertical-box"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={getOrder("tech")}>
              <h3>Technologies</h3>
              <div className="tech-stacks-center">
                <div className="tech-section">
                  <h4>Software Engineering Stack</h4>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        alt="React icon"
                      />
                      <span className="tech-tooltip">React</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        alt="Python icon"
                      />
                      <span className="tech-tooltip">Python</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
                        alt="Google Cloud icon"
                      />
                      <span className="tech-tooltip">Google Cloud</span>
                    </div>
                    <div className="tech-item">
                      <i className="devicon-azuresqldatabase-plain colored"></i>
                      <span className="tech-tooltip">SQL</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        alt="JavaScript icon"
                      />
                      <span className="tech-tooltip">JavaScript</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                        alt="TypeScript icon"
                      />
                      <span className="tech-tooltip">TypeScript</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                        alt="Docker icon"
                      />
                      <span className="tech-tooltip">Docker</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        alt="Java icon"
                      />
                      <span className="tech-tooltip">Java</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                        alt="Git icon"
                      />
                      <span className="tech-tooltip">Git</span>
                    </div>
                    <div className="tech-item">
                      <i className="devicon-fastapi-plain colored"></i>
                      <span className="tech-tooltip">FastAPI</span>
                    </div>
                  </div>
                </div>
                <div className="tech-section">
                  <h4>Data Analysis Stack</h4>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        alt="Python icon"
                      />
                      <span className="tech-tooltip">Python</span>
                    </div>
                    <div className="tech-item">
                      <i
                        className="devicon-amazonwebservices-plain-wordmark"
                        title="AWS"
                        style={{
                          fontSize: "32px",
                          width: "32px",
                          height: "32px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}></i>
                      <span className="tech-tooltip">AWS</span>
                    </div>
                    <div className="tech-item">
                      <i className="devicon-azuresqldatabase-plain colored"></i>
                      <span className="tech-tooltip">SQL</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
                        alt="Pandas icon"
                      />
                      <span className="tech-tooltip">Pandas</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
                        alt="NumPy icon"
                      />
                      <span className="tech-tooltip">NumPy</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
                        alt="PyTorch icon"
                      />
                      <span className="tech-tooltip">PyTorch</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
                        alt="Google Cloud icon"
                      />
                      <span className="tech-tooltip">Google Cloud</span>
                    </div>
                    <div className="tech-item">
                      <img src="/assets/images/excel.png" alt="Excel icon" />
                      <span className="tech-tooltip">Excel</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg"
                        alt="Power BI icon"
                      />
                      <span className="tech-tooltip">Power BI</span>
                    </div>
                    <div className="tech-item">
                      <img
                        src="/assets/images/tableau.png"
                        alt="Tableau icon"
                      />
                      <span className="tech-tooltip">Tableau</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Box */}
            <motion.div
              className="bubble education-bottom-box"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={getOrder("edu")}>
              <h3>
                Education
                <img
                  src="/assets/images/blocki.png"
                  alt="Block I icon"
                  className="blocki-icon"
                />
              </h3>
              <div className="education-content">
                <div className="education-item">
                  <h4>
                    University of Illinois Urbana-Champaign{" "}
                    <span className="year">(Aug 2024 - Present)</span>
                  </h4>
                  <ul>
                    <li>
                      A current senior at the University of Illinois
                      Urbana-Champaign studying
                      <span className="edu-highlight"> Computer Science </span>
                      with a focus on
                      <span className="edu-highlight">
                        {" "}
                        Software Engineering{" "}
                      </span>
                      and
                      <span className="edu-highlight"> Data Science</span>.
                    </li>
                    <li>
                      Mens Club Water Polo{" "}
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

                <div className="education-item">
                  <h4>
                    Oakton College{" "}
                    <span className="year">(Aug 2022 - May 2024)</span>
                  </h4>
                  <ul>
                    <li>
                      Completed an Associates Degree in Science and Mathematics
                      with a focus in Computer Science.
                    </li>
                    <li>
                      Graduated with a Cumulative{" "}
                      <span className="edu-highlight">3.9 Unweighted GPA</span>.
                    </li>
                  </ul>
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
