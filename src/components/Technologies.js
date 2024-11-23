import React from 'react';
import './Technologies.css';
<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          

function Technologies() {
  return (
    <section id="technologies" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>My Dev Technologies</h2>
        <div className="technologies-container">
          <div className="technology-section">
            <h3>Technologies I Prefer Using</h3>
            <div className="technologies-grid">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <p>React JS/Native</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <p>Python</p>
              </div>
              <div className="tech-item">  
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
                <p>Google Cloud</p>
              </div>
              <div className="tech-item">
                <i class="devicon-azuresqldatabase-plain"></i>
                <p>SQL</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <p>JavaScript</p>
              </div>
              <div className="tech-item">
                <i class="devicon-flask-original"></i>
                <p>Flask</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                <p>Docker</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />
                <p>NumPy</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
                <p>PyTorch</p>
              </div>
              <div className="tech-item">
                <i class="devicon-mysql-original"></i>
                <p>MySQL</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
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