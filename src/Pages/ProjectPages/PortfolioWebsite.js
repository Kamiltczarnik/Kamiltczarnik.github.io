import "../css/Projects.css";
import "../css/Technologies.css";
import Footer from "../../components/Footer.js";
import {
  FaTrophy, // 🏆
  FaChartBar, // 📊
  FaSearch, // 🔍
  FaBolt, // ⚡
  FaPaintBrush, // for design/dev
  FaSyncAlt, // for transitions
  FaTachometerAlt, // for performance
  FaCloudUploadAlt, // for deploy
} from "react-icons/fa";

function PortfolioWebsite({ navigateBack }) {
  return (
    <div className="project-detail">
      {/* Back to Home Button */}
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>

      <div className="project-content">
        {/* Title Bar */}
        <div className="title-bar">
          <h1>My Portfolio Website</h1>
          <img
            src="/assets/images/favicon.png"
            alt="Portfolio Logo"
            className="title-image"
          />
        </div>

        {/* GIF showcasing website */}
        <div className="video-wrapper">
          <video className="gif" autoPlay loop muted playsInline>
            <source src="/assets/images/port2.webm" type="video/webm" />
          </video>
        </div>

        {/* Key Features */}
        <h2>Key Features</h2>
        <div className="step-divider"></div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaTrophy />
            </div>
            <h3 className="feature-title">HOF Prediction</h3>
            <p className="feature-desc">
              Predicts a player's Hall of Fame chances by comparing their stats
              to HOF legends.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaChartBar />
            </div>
            <h3 className="feature-title">Compare Stats</h3>
            <p className="feature-desc">
              Compare any player's career stats side-by-side with all-time
              greats.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaSearch />
            </div>
            <h3 className="feature-title">Searchable Database</h3>
            <p className="feature-desc">
              Find and analyze players instantly with real-time data from our
              API.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaBolt />
            </div>
            <h3 className="feature-title">Intuitive UI</h3>
            <p className="feature-desc">
              Sleek player cards and dashboards that make insights a breeze.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>Website Overview</h2>
          <div className="steps-container">
            <div className="step">
              <img
                src="/assets/images/home.png"
                alt="Homepage"
                className="step img2"
              />
              <h3>1️⃣ Home Page</h3>
              <p>
                A visually engaging hero section introducing myself and my work.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img
                src="/assets/images/projects.png"
                alt="Projects Section"
                className="step img2"
              />
              <h3>2️⃣ Projects Showcase</h3>
              <p>
                Interactive gallery highlighting my best projects with
                animations.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img
                src="/assets/images/contact.png"
                alt="Contact Page"
                className="step img2"
              />
              <h3>3️⃣ Contact Section</h3>
              <p>
                Easy-to-use contact information for professional inquiries and
                networking.
              </p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Technologies Used */}
        <div className="techcontainer">
          <div className="technologies-container">
            <h3>Technologies Used</h3>
            <div className="technologies-grid">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React icon"
                />
                <p>React.js</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript icon"
                />
                <p>JavaScript</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS icon"
                />
                <p>CSS</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML5 icon"
                />
                <p>HTML5</p>
              </div>
              <div className="tech-item">
                <i className="devicon-github-plain"></i>
                <p>GitHub</p>
              </div>
              <div className="tech-item">
                <i className="devicon-photoshop-plain"></i>
                <p>Photoshop</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* My Contributions */}
        <h2>My Contributions: Solo Developer</h2>
        <div className="step-divider"></div>
        <div className="contributions-grid">
          <div className="contribution-card">
            <div className="contribution-icon">
              <FaPaintBrush />
            </div>
            <h3 className="contribution-title">
              Designed & Developed the Website
            </h3>
            <p className="contribution-desc">
              Built a fully responsive portfolio with a custom UI/UX.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon">
              <FaSyncAlt />
            </div>
            <h3 className="contribution-title">
              Implemented Smooth Page Transitions
            </h3>
            <p className="contribution-desc">
              Used React animations and keyframes for seamless navigation.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon">
              <FaTachometerAlt />
            </div>
            <h3 className="contribution-title">Optimized Performance</h3>
            <p className="contribution-desc">
              Minimized render-blocking scripts & added lazy-loading of images.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon">
              <FaCloudUploadAlt />
            </div>
            <h3 className="contribution-title">Deployed the Site</h3>
            <p className="contribution-desc">
              Hosted on GitHub Pages with a custom GoDaddy domain.
            </p>
          </div>
        </div>

        <Footer />
      </div>

      {/* Back to Home Button */}
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>
    </div>
  );
}

export default PortfolioWebsite;
