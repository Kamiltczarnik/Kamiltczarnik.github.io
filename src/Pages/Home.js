import React from "react";
import Navbar from "../components/Navbar";
import GitHubCalendar from "react-github-calendar";
import { HopIcon as Hockey } from "lucide-react";
import "./css/Home.css";

function Home() {
  // Detect dark mode from body class
  const isDarkMode =
    typeof document !== "undefined" &&
    document.body.classList.contains("light-mode") === false;

  return (
    <>
      <Navbar />
      <section id="home" className="page-section">
        <div className="page-container">
          <div className="grid-6x6-layout">
            {/* "Who am I?" Box */}
            <div className="bubble who-am-i-box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.1rem",
                }}>
                <h3 style={{ margin: 0, paddingBottom: "1rem" }}>
                  Personal Project Spotlight : StatScout
                </h3>
                <Hockey className="stat-scout-hockey-icon" size={28} />
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
                      <img
                        src="/assets/images/aws.png.png"
                        alt="AWS"
                        title="AWS"
                        style={{
                          height: "32px",
                          width: "32px",
                          objectFit: "contain",
                        }}
                      />
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
            </div>

            {/* Star Image Quote Box */}
            <div className="bubble star-image-box">
              <img src="/assets/images/Headshot.jpg" alt="Headshot" />
            </div>

            {/* Student & Full Stack Developer Box */}
            <div className="bubble student-role-box">
              <h2> Software Engineer </h2>
              <h2> and Data Analyst</h2>
            </div>

            {/* Center Box */}
            <div className="bubble center-reference-box">
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
            </div>

            {/* Quote Box */}
            <div className="bubble quote-bottom-box">
              <blockquote>
                Water polo player, hackathon enthusiast, and lifelong learner.
              </blockquote>
            </div>

            {/* Technologies Box */}
            <div className="bubble technologies-vertical-box">
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
                      <img src="/assets/images/aws.png.png" alt="AWS icon" />
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
            </div>

            {/* Education Box */}
            <div className="bubble education-bottom-box">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
