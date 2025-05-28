import "../css/Projects.css";
import "../css/Technologies.css";
import Footer from "../../components/Footer.js";
import {
  FaRobot,
  FaChartPie,
  FaComments,
  FaPaintBrush,
  FaPlug,
  FaMicrophone,
  FaDatabase,
} from "react-icons/fa";

function Lira({ navigateBack }) {
  return (
    <div className="project-detail">
      {/* Back to Home Button */}
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>

      <div className="project-content">
        {/* Title Bar */}
        <div className="title-bar">
          <div className="projects-title">Lira Banking</div>
          <img
            src="/assets/images/lira2.jpg"
            alt="Lira Banking logo"
            className="title-image"
          />
        </div>

        {/* GIF Video */}
        <div className="video-wrapper">
          <video className="gif" autoPlay loop muted playsInline>
            <source src="/assets/images/liragif.webm" type="video/webm" />
            <source src="/assets/images/liragif.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Key Features */}
        <h2>Key Features</h2>
        <div className="step-divider"></div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaRobot />
            </div>
            <h3 className="feature-title">AI Banker</h3>
            <p className="feature-desc">
              Ask Lira questions like “I need a checking account with low fees
              and great perks.”
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartPie />
            </div>
            <h3 className="feature-title">Dashboard</h3>
            <p className="feature-desc">
              View your total balance, monthly changes, and spending trends.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaComments />
            </div>
            <h3 className="feature-title">Financial Advice</h3>
            <p className="feature-desc">
              Receive personalized financial advice on credit cards, personal
              loans, and more.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <img
                src="/assets/images/lira1.png"
                alt="Login screen"
                className="step img3"
              />
              <h3>1️⃣ Login</h3>
              <p>
                Securely sign in to access your personalized financial
                dashboard.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <video className="step img3" autoPlay loop muted playsInline>
                <source src="/assets/images/lira2.webm" type="video/webm" />
              </video>
              <h3>2️⃣ View Your Dashboard</h3>
              <p>
                See an overview of your balances, spending trends, and detailed
                account breakdowns.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img
                src="/assets/images/lira3.png"
                alt="Interact with Lira"
                className="step img3"
              />
              <h3>3️⃣ Interact with Lira</h3>
              <p>
                Chat with Lira to get personalized financial advice and manage
                your finances.
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
                <img src="/assets/images/openai.png" alt="OpenAI icon" />
                <p>OpenAI API</p>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React icon"
                />
                <p>React</p>
              </div>
              <div className="tech-item">
                {" "}
                <i className="devicon-tailwindcss-original colored"></i>{" "}
                <p>Tailwind</p>{" "}
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="TypeScript icon"
                />
                <p>TypeScript</p>
              </div>
              <div className="tech-item">
                <i className="devicon-fastapi-plain colored"></i>
                <p>FastAPI</p>
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
            <div className="contribution-icon">
              <FaPaintBrush />
            </div>
            <h3 className="contribution-title">UI/UX Development</h3>
            <p className="contribution-desc">
              Designed and implemented a user-friendly dashboard and assistant
              interface.
            </p>
          </div>
          <div className="contribution-card">
            <div className="contribution-icon">
              <FaPlug />
            </div>
            <h3 className="contribution-title">API Integration</h3>
            <p className="contribution-desc">
              Connected to the Nessie & ChatGPT APIs for real-time banking data
              and advice.
            </p>
          </div>
          <div className="contribution-card">
            <div className="contribution-icon">
              <FaMicrophone />
            </div>
            <h3 className="contribution-title">Speech-to-Text</h3>
            <p className="contribution-desc">
              Added voice input/output for a more accessible, conversational UI.
            </p>
          </div>
          <div className="contribution-card">
            <div className="contribution-icon">
              <FaDatabase />
            </div>
            <h3 className="contribution-title">Data Management</h3>
            <p className="contribution-desc">
              Ensured seamless data flow between user inputs and backend
              processing.
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

export default Lira;
