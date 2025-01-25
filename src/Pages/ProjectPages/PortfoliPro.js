import "../css/Projects.css";
import "../css/Technologies.css";
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
        <ul className="features-list">
          <li>
            📈 <strong>Portfolio Manager </strong> - Allows users to track and
            analyze their personal stock portfolios.
          </li>
          <li>
            🏆 <strong>AI-Powered Prediction </strong> - Uses an LSTM model trained
            on market data to forecast stock trends.
          </li>
          <li>
            🔍 <strong>Real-Time Stock Data </strong> - Fetches up-to-date market
            information using the YFinance API.
          </li>
          <li>
            💾 <strong>Local Storage & Context API </strong> - Saves user
            preferences and stock selections between sessions.
          </li>
          <li>
            🎨 <strong>Simple & Intuitive UI </strong> - Designed to be easy to
            navigate for users of all experience levels.
          </li>
        </ul>
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
        <div className="text">
          <h4>My Contributions: Full Stack Developer</h4>
          <ul className="contributions">
            <li>
              <strong>Designed & Developed the UI </strong> - Created a
              user-friendly interface with a focus on simplicity and
              responsiveness.
            </li>
            <li>
              <strong>Integrated YFinance API </strong> - Connected real-time stock
              data to dynamically update stock information and predictions.
            </li>
            <li>
              <strong>Built AI Prediction System </strong> - Implemented an LSTM
              model to provide stock price forecasting.
            </li>
            <li>
              <strong>Managed Portfolio Storage </strong> - Used Local Storage and
              Context API to retain user selections and preferences.
            </li>
            <li>
              <strong>Debugged & Optimized Performance </strong> - Improved
              application performance by reducing redundant API calls and
              optimizing database queries.
            </li>
          </ul>
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
