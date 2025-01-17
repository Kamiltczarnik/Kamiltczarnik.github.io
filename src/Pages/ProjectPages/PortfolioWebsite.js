import "../css/Projects.css";
import "../css/Technologies.css";
import Footer from "../../components/Footer.js";

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
            src="/assets/images/logo.png"
            alt="Portfolio Logo"
            className="title-image"
          />
        </div>

        {/* GIF showcasing website */}
        <img
          src="/assets/images/goat.gif"
          alt="Website Preview"
          className="gif"
        />

        {/* Key Features */}
        <h2>Key Features</h2>
        <ul className="features-list">
          <li>
            🖥️ <strong>Responsive Design</strong> Fully optimized for desktop,
            tablet, and mobile views.
          </li>
          <li>
            ⚡ <strong>Optimized UI</strong> Built with React and CSS animations
            for a smooth user experience.
          </li>
          <li>
            🌐 <strong>Projects Showcase</strong> Displays my latest projects
            dynamically.
          </li>
          <li>
            🔗 <strong>Custom Navigation</strong> Includes animated transitions
            between pages.
          </li>
          <li>
            🎨 <strong>Unique Personal Branding</strong> Custom theme,
            animations, and layout to reflect my style.
          </li>
        </ul>

        <hr className="section-divider" />

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>Website Overview</h2>
          <div className="steps-container">
            <div className="step">
              <img src="/assets/images/homepage.gif" alt="Homepage" />
              <h3>1️⃣ Home Page</h3>
              <p>
                A visually engaging hero section introducing myself and my work.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img src="/assets/images/projects.gif" alt="Projects Section" />
              <h3>2️⃣ Projects Showcase</h3>
              <p>
                Interactive gallery highlighting my best projects with
                animations.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <img src="/assets/images/contact.gif" alt="Contact Page" />
              <h3>3️⃣ Contact Section</h3>
              <p>
                Easy-to-use contact form for professional inquiries and
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
        <div className="text">
          <h4>My Contributions: Front End Developer</h4>
          <ul className="contributions">
            <li>
              <strong>Designed & Developed the Website</strong> Built a fully
              responsive portfolio with a custom UI/UX.
            </li>
            <li>
              <strong>Implemented Smooth Page Transitions</strong> Used React
              animations and keyframes for a seamless transition between pages.
            </li>
            <li>
              <strong>Optimized Performance</strong> Minimized render-blocking
              scripts and improved lazy loading of images.
            </li>
            <li>
              <strong>Deployed the Site</strong> Hosted the website using GitHub
              Pages.
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

export default PortfolioWebsite;
