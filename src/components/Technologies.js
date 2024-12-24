import React from "react";
import "./Technologies.css";
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;

function Technologies() {
  return (
    <section id="technologies" className="wrapper style2 spotlights">
      <div className="inner">
        <div className="technologies-container">
          <div className="technology-section">
            <h3>Technologies I Prefer Using</h3>
            <div className="technologies-grid">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React icon"
                />
                <p>React JS/Native</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python icon"
                />
                <p>Python</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
                  alt="GCP icon"
                />
                <p>Google Cloud</p>
              </div>
              <div className="tech-item">
                <i class="devicon-azuresqldatabase-plain"></i>
                <p>SQL</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JS icon"
                />
                <p>JavaScript</p>
              </div>
              <div className="tech-item">
                <i class="devicon-flask-original"></i>
                <p>Flask</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git icon"
                />
                <p>Git</p>
              </div>
              <div className="tech-item">
                <i class="devicon-github-original"></i>
                <p>Github</p>
              </div>
            </div>
          </div>

          <div className="technology-section">
            <h3>Other Technologies</h3>
            <div className="technologies-grid">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker icon"
                />
                <p>Docker</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
                  alt="Numpy icon"
                />
                <p>NumPy</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
                  alt="Pytorch icon"
                />
                <p>PyTorch</p>
              </div>
              <div className="tech-item">
                <i class="devicon-mysql-original"></i>
                <p>MySQL</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java icon"
                />
                <p>Java</p>
              </div>
              <div className="tech-item">
                <i className="fab fa-node"></i>
                <p>Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
