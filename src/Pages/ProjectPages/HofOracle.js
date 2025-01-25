import "../css/Projects.css";
import ".././css/Technologies.css";
import Footer from "../../components/Footer.js";
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
        <source src="/assets/images/hoforac.webm" type="video/webm" />
       </video>
       </div>
        <h2>Key Features</h2>
        <ul className="features-list">
          <li>
            ✅ <strong>HOF Prediction </strong> - Predicts a player’s Hall of Fame chances by comparing their stats to HOF legends.
          </li>
          <li>
            📊 <strong>Compare Stats </strong> - Compare any player’s career stats
            to HOF legends.
          </li>
          <li>
            🔍 <strong>Searchable Database </strong> - Find and analyze players
            instantly with real-time data.
          </li>
          <li>
            ⚡ <strong>Intuitive UI </strong> - Player cards and Intuitive pages
            greatly improve user experience.
          </li>
        </ul>
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

        <div className="text">
          <h4>My Contributions: Full Stack Developer</h4>
          <ul className="contributions">
            <li>
              <strong>Full Frontend Development & Styling</strong> - Designed and
              implemented the entire UI/UX, ensuring a clean and interactive
              experience while seamlessly integrating the frontend with the
              backend.
            </li>
            <li>
              <strong>Connecting Frontend to Backend</strong> - Established API
              calls to fetch and display player statistics, setting up a base
              query for player stats and processing the data dynamically based
              on player positions.
            </li>
            <li>
              <strong>Search & Compare Functionality</strong> - Implemented search
              and comparison features, allowing users to find specific players
              and compare their career stats efficiently.
            </li>
            <li>
              <strong>Optimized Backend Queries for Performance </strong> - Improved query efficiency by reducing unnecessary API calls and
              database queries, ensuring smooth and fast retrieval of player
              statistics across the platform.
            </li>
            <li>
              <strong>
                Handling Technical Challenges in Data Visualization
              </strong>{" "}
               - Attempted to visualize player data using React Charts, but due to
              inconsistent game-to-game data and API limitations, made the
              decision to remove it, optimizing project focus and efficiency.
            </li>
          </ul>
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
