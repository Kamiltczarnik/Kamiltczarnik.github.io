import "../css/Projects.css";
import "../css/Technologies.css";
import { 
  FaChartBar,     // Portfolio Manager
  FaBolt,         // AI Prediction
  FaSearch,       // Real-time Data
  FaDatabase,     // Local Storage & Context
  FaPaintBrush,   // Simple UI
  FaPaintBrush as FaDesign,     // for “Designed & Developed”
  FaSyncAlt as FaTransition,    // for transitions
  FaTachometerAlt as FaPerf,    // for performance
} from 'react-icons/fa';
import Footer from "../../components/Footer.js";

function PortfoliPro({ navigateBack }) {
  return (
    <div className="project-detail">
      {/* Back to Home Button */}
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>
      <div className="project-content">
        {/* Title Bar */}
        <div className="title-bar">
          <h1>PortfoliPro</h1>
          <img
            src="/assets/images/Designer.png"
            alt="Portfolio Logo"
            className="title-image"
          />
        </div>

        {/* GIF showcasing website */}
        <div className="video-wrapper">
        <video  className="gif" autoPlay loop muted playsInline>
        <source src="/assets/images/port.webm" type="video/webm" />
       </video>
       </div>
        {/* Key Features */}
        <h2>Key Features</h2>
        <div className="step-divider"></div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FaChartBar /></div>
            <h3 className="feature-title">Portfolio Manager</h3>
            <p className="feature-desc">
              Track and analyze personal stock portfolios.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FaBolt /></div>
            <h3 className="feature-title">AI-Powered Prediction</h3>
            <p className="feature-desc">
              LSTM-based model forecasts market trends.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FaSearch /></div>
            <h3 className="feature-title">Real-Time Stock Data</h3>
            <p className="feature-desc">
              Up-to-date market info via the YFinance API.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FaPaintBrush /></div>
            <h3 className="feature-title">Simple & Intuitive UI</h3>
            <p className="feature-desc">
              Clean design for users of all experience levels.
            </p>
          </div>
        </div>
        <img src="/assets/images/welcome.png" alt="PortfoliPro" className = "step img2"/>

        <hr className="section-divider" />

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <img src="/assets/images/image1.png" alt="Stock Search" />
              <h3>1️⃣ Search for Stocks</h3>
              <p>
                Use the search functionality to find and add stocks to your
                portfolio.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img src="/assets/images/PortManager.png" alt="AI Predictions" />
              <h3>2️⃣ View AI Predictions</h3>
              <p>
                Analyze the stock's historical data and see AI-generated future
                predictions.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img
                src="/assets/images/img3.png"
                alt="Portfolio Management"
              />
              <h3>3️⃣ Manage Portfolio</h3>
              <p>
                Keep track of your stock holdings and performance within your
                portfolio dashboard.
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python icon"
                />
                <p>Python</p>
              </div>
              <div className="tech-item">
                <i className="devicon-django-plain"></i>
                <p>django</p>
              </div>
              <div className="tech-item">
                <i className="devicon-github-plain"></i>
                <p>GitHub</p>
              </div>
              <div className="tech-item">
                <i className="devicon-css3-plain colored"></i>
                <p>CSS</p>
              </div>
              <div className="tech-item">
                <i className="devicon-pandas-plain"></i>
                <p>Pandas</p>
              </div>
              <div className="tech-item">
                <i className="devicon-numpy-plain colored"></i>
                <p>NumPy</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* My Contributions */}
        <h2>My Contributions: Full Stack Developer</h2>
        <div className="step-divider"></div>
        <div className="contributions-grid">
          <div className="contribution-card">
            <div className="contribution-icon"><FaDesign /></div>
            <h3 className="contribution-title">
              Designed & Developed UI
            </h3>
            <p className="contribution-desc">
              Created a responsive interface focused on simplicity.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon"><FaTransition /></div>
            <h3 className="contribution-title">
              Integrated YFinance API
            </h3>
            <p className="contribution-desc">
              Connected real-time stock data to live forecasts.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon"><FaPerf /></div>
            <h3 className="contribution-title">
              Built AI Prediction System
            </h3>
            <p className="contribution-desc">
              LSTM model implementation for forecast accuracy.
            </p>
          </div>

          <div className="contribution-card">
            <div className="contribution-icon"><FaDatabase /></div>
            <h3 className="contribution-title">
              Managed Portfolio Storage
            </h3>
            <p className="contribution-desc">
              Used Context API & Local Storage for user data.
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

export default PortfoliPro;
