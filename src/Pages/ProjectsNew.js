import React from "react";
import Navbar from "../components/Navbar";
import "./css/ProjectsNew.css";

function ProjectsNew() {
  return (
    <>
      <Navbar />
      <section id="projects" className="page-section">
        <div className="page-container">
          <div className="section-header">
            <h1>My Projects</h1>
            <p>Here are some of the projects I've worked on recently</p>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-bubble featured-project">
              <div className="project-image">
                <div className="placeholder-image">🚀</div>
              </div>
              <div className="project-content">
                <h3>Featured Project</h3>
                <p>
                  This is a placeholder for a featured project. It showcases
                  modern web development techniques and best practices.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <button className="btn-primary">View Live</button>
                  <button className="btn-secondary">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-bubble">
              <div className="project-image">
                <div className="placeholder-image">💻</div>
              </div>
              <div className="project-content">
                <h3>Web Application</h3>
                <p>
                  A full-stack web application built with modern technologies.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Express</span>
                </div>
                <div className="project-links">
                  <button className="btn-primary">View Live</button>
                  <button className="btn-secondary">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-bubble">
              <div className="project-image">
                <div className="placeholder-image">📱</div>
              </div>
              <div className="project-content">
                <h3>Mobile App</h3>
                <p>A responsive mobile application with clean UI/UX design.</p>
                <div className="project-tech">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Firebase</span>
                </div>
                <div className="project-links">
                  <button className="btn-primary">View Live</button>
                  <button className="btn-secondary">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-bubble">
              <div className="project-image">
                <div className="placeholder-image">🎮</div>
              </div>
              <div className="project-content">
                <h3>Game Development</h3>
                <p>A fun game built with modern game development frameworks.</p>
                <div className="project-tech">
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">Unity</span>
                </div>
                <div className="project-links">
                  <button className="btn-primary">Play Game</button>
                  <button className="btn-secondary">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-bubble">
              <div className="project-image">
                <div className="placeholder-image">🔧</div>
              </div>
              <div className="project-content">
                <h3>Developer Tool</h3>
                <p>A useful tool for developers to improve their workflow.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">CLI</span>
                </div>
                <div className="project-links">
                  <button className="btn-primary">Download</button>
                  <button className="btn-secondary">GitHub</button>
                </div>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="project-bubble coming-soon">
              <div className="project-content">
                <h3>More Projects Coming Soon!</h3>
                <p>
                  I'm always working on new and exciting projects. Stay tuned
                  for updates!
                </p>
                <div className="coming-soon-icon">✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsNew;
