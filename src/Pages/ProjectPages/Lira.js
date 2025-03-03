import "../css/Projects.css";
import "../css/Technologies.css";
import Footer from "../../components/Footer.js";

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
        <ul className="features-list">
          <li>
            🤖 <strong>AI Banker:</strong> Ask Lira questions like “I need a checking account with low fees and great perks.”
          </li>
          <li>
            📊 <strong>Dashboard:</strong>    View your total balance, monthly changes, and spending trends.
          </li>
          <li>
            💬 <strong>Financial Advice:</strong> Receive personalized financial advice on credit cards, personal loans, and more.
          </li>
        </ul>

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
                Securely sign in to access your personalized financial dashboard.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
            <video className="step img3" autoPlay loop muted playsInline>
                <source src="/assets/images/lira2.webm" type="video/webm" />
              </video>
              <h3>2️⃣ View Your Dashboard</h3>
              <p>
                See an overview of your balances, spending trends, and detailed account breakdowns.
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
                Chat with Lira to get personalized financial advice and manage your finances.
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
                  src="/assets/images/openai.png"
                  alt="OpenAI icon"
                  />
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
              <i class="devicon-tailwindcss-original colored"></i>
                <p>Tailwind</p>
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
        <div className="text">
          <h4>My Contributions: Full Stack Developer</h4>
          <ul className="contributions">
            <li>
              <strong>UI/UX Development:</strong> Designed and implemented a user-friendly financial dashboard and interactive virtual assistant interface.
            </li>
            <li>
              <strong>API Integration:</strong> Connected the frontend with the Nessie API and ChatGPT API to deliver real-time banking data and personalized advice.
            </li>
            <li>
              <strong>Speech-to-Text Integration:</strong> Implemented text-to-speech functionality to enhance user accessibility and interaction.
            </li>
            <li>
              <strong>Data Management:</strong> Ensured seamless data flow between user inputs and backend processing for accurate financial insights.
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

export default Lira;
