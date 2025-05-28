import "../css/Projects.css";
import ".././css/Technologies.css";
import Footer from "../../components/Footer.js";
import {
  FaTrophy,
  FaChartBar,
  FaSearch,
  FaBolt,
  FaPaintBrush,
  FaLink,
  FaSearchPlus,
  FaTachometerAlt,
} from "react-icons/fa";
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;
function HOFOracle({ navigateBack }) {
  return (
    <div className="project-detail">
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>
      <div className="project-content">
        <div className="title-bar">
          <div className="projects-title">Hall of Fame Oracle</div>
          <img
            src="/assets/images/nfl.png"
            alt="logo "
            className="title-image"></img>
        </div>
        <div className="video-wrapper">
        <video  className="gif" autoPlay loop muted playsInline>
        <source src="https://kamiltczarnik.github.io/assets/images/hoforac.webm" type="video/webm" />
        <source src="/assets/images/hoforac.mp4" type="video/mp4" />
       </video>
       </div>
       <h2>Key Features</h2>
       <div className="step-divider"></div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FaTrophy /></div>
            <h3 className="feature-title">HOF Prediction</h3>
            <p className="feature-desc">
              Predicts Hall of Fame chances by comparing stats to legends.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FaChartBar /></div>
            <h3 className="feature-title">Compare Stats</h3>
            <p className="feature-desc">
              Side-by-side career stat comparison with HOF greats.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FaSearch /></div>
            <h3 className="feature-title">Searchable Database</h3>
            <p className="feature-desc">
              Instantly find & analyze players with real-time data.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FaBolt /></div>
            <h3 className="feature-title">Intuitive UI</h3>
            <p className="feature-desc">
              Clean player cards and dashboards for a great UX.
            </p>
          </div>
        </div>
        <hr className="section-divider" />
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <img src="/assets/images/choose.png" alt="Step 1" className="step img3"/>
              <h3>1️⃣ Select a Player</h3>
              <p>Choose any NFL player to analyze from our database.</p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img src="/assets/images/chances.png" alt="Step 2" className="step img3"/>
              <h3>2️⃣ Run Model</h3>
              <p>Our model evaluates their HOF potential along with providing meaningful statistics.</p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img src="/assets/images/compare.png" alt="Step 3" className="step img3"/>
              <h3>3️⃣ Compare </h3>
              <p>Compare with any other player in NFL history</p>
            </div>
          </div>
        </section>
        <hr className="section-divider" />
        {/* Start of Technologies */}
        <div className="techcontainer">
          <div className="technologies-container">
            <h3>Technologies Used</h3>
            <div className="technologies-grid">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React icon"
                />
                <p>React JS</p>
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
                <i className="devicon-flask-original"></i>
                <p>Flask</p>
              </div>
              <div className="tech-item">
                <i className="devicon-github-plain"></i>
                <p>Github</p>
              </div>
              <div className="tech-item">
                <i className="devicon-css3-plain colored"></i>
                <p>CSS</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Technologies */}
        <hr className="section-divider" />

        <h2>My Contributions: Full Stack Developer</h2>
        <div className="step-divider"></div>
        <div className="contributions-grid">
          <div className="contribution-card">
            <div className="contribution-icon"><FaPaintBrush /></div>
            <h3 className="contribution-title">
              Frontend Development & Styling
            </h3>
            <p className="contribution-desc">
              Designed and implemented a clean, interactive UI/UX.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon"><FaLink /></div>
            <h3 className="contribution-title">
              Frontend ↔ Backend Integration
            </h3>
            <p className="contribution-desc">
              Wired up API calls to fetch & display player statistics.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon"><FaSearchPlus /></div>
            <h3 className="contribution-title">
              Search & Compare Features
            </h3>
            <p className="contribution-desc">
              Built robust search and stat‐compare functionality.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon"><FaTachometerAlt /></div>
            <h3 className="contribution-title">
              Optimized Backend Queries
            </h3>
            <p className="contribution-desc">
              Reduced unnecessary API/database calls for speed.
            </p>
          </div>

        </div>
        <Footer />
      </div>
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>
    </div>
  );
}

export default HOFOracle;
