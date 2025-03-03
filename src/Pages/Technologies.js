import React from "react";
import "./css/Technologies.css";
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
            <h3>Preferred Technologies</h3>
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
                <i className="devicon-azuresqldatabase-plain"></i>
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
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
                  alt="Numpy icon"
                />
                <p>NumPy</p>
              </div>
              <div className="tech-item">
                <i className="devicon-pandas-plain"></i>
                <p>Pandas</p>
              </div>
              <div className="tech-item">
                <i className="devicon-github-original"></i>
                <p>Github</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
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
                <i className="devicon-fastapi-plain colored"></i>
                <p>FastAPI</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
                  alt="Pytorch icon"
                />
                <p>PyTorch</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java icon"
                />
                <p>Java</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git icon"
                />
                <p>Git</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="TypeScript icon"
                />
                <p>TypeScript</p>
              </div>
              <div className="tech-item">
                <i className="devicon-c-plain colored"></i>
                <p>C</p>
              </div>
              <div className="tech-item">
              <i class="devicon-tailwindcss-original colored"></i>
                <p>Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
