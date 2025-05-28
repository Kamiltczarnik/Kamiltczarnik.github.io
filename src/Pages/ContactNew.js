import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./css/ContactNew.css";

function ContactNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="page-section">
        <div className="page-container">
          <div className="section-header">
            <h1>Get In Touch</h1>
            <p>
              Have a project in mind or just want to say hello? I'd love to hear
              from you!
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-bubble form-bubble">
              <h3>Send me a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>

            {/* Email Contact */}
            <div className="contact-bubble email-bubble">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>kamil.czarnik@example.com</p>
              <button className="btn-contact">Send Email</button>
            </div>

            {/* Social Media */}
            <div className="contact-bubble social-bubble">
              <div className="contact-icon">🔗</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#" className="social-link github">
                  GitHub
                </a>
                <a href="#" className="social-link linkedin">
                  LinkedIn
                </a>
                <a href="#" className="social-link twitter">
                  Twitter
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-bubble location-bubble">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Germany</p>
              <p>Available for remote work</p>
            </div>

            {/* Response Time */}
            <div className="contact-bubble response-bubble">
              <div className="contact-icon">⚡</div>
              <h3>Response Time</h3>
              <p>I typically respond within</p>
              <div className="response-time">24 hours</div>
            </div>

            {/* Availability */}
            <div className="contact-bubble availability-bubble">
              <div className="contact-icon">🗓️</div>
              <h3>Availability</h3>
              <p>Currently available for:</p>
              <ul className="availability-list">
                <li>Freelance projects</li>
                <li>Part-time work</li>
                <li>Collaborations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactNew;
