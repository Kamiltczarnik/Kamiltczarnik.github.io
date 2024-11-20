import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <section id="welcome" className="hero-section wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1 className="hero-text">Kamil Czarnik</h1>
        <p className="hero-text">
          Aspiring Software Developer and Student at the University of Illinois Urbana-Champaign
          <br />
        </p>
        <ul className="actions">
          <li><a href="#about-me" className="button scrolly">Learn More</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Welcome;
