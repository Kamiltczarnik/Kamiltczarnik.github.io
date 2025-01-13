import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section id="contact" className="wrapper style1 spotlights">
      <div className="inner">
        <section className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>Kamiltczarnik@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>(224) 875-1095</p>
          </div>
          <div className="contact-item">
            <h3>Profiles</h3>
            <div className="social-icons">
              <a
                href="https://github.com/Kamiltczarnik"
                target="_blank"
                rel="noopener noreferrer">
                <i className="devicon-github-plain"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kamil-czarnik-269492242/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="devicon-linkedin-plain"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Footer;
