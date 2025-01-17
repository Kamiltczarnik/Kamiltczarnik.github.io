import "./css/Welcome.css";

function Welcome() {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();

    const homeSection = document.getElementById("projects");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="welcome"
      className="hero-section wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1 className="hero-text">
          Hi, I'm <span className="gradient-text">Kamil Czarnik</span>.
          <br />I Develop Software.
        </h1>
        <ul className="actions">
          <li>
            <button className="button scrolly" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Welcome;
