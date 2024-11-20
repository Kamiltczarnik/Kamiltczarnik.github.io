import React from 'react';
import "./Contact.css";

function ContactMe() {
  return (
    <section id="contact" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>
          Thank you so much for taking a look at my porfolio website! I'm open to any opportunities and conversations and would love to hear from you!
        </p>
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
      <a href="https://github.com/Kamiltczarnik" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/kamil-czarnik-269492242/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>
</section>

      </div>
    </section>
  );
}

export default ContactMe;

