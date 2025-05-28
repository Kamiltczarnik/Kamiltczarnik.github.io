import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaEnvelope } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import "./css/ContactNew.css";

function ContactNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const email = "kamiltczarnik@gmail.com";

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

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const bubbleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="page-section">
        <div className="page-container">
          <motion.div
            className="section-header"
            variants={headerVariants}
            initial="hidden"
            animate="visible">
            <h1>Get In Touch</h1>
            <p>You can also get in touch with me through the links below.</p>
          </motion.div>
          <div className="contact-grid">
            {/* Email Bubble */}
            <motion.div
              className="contact-bubble email-bubble"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={0}>
              <div className="contact-icon">
                <FaEnvelope style={{ fontSize: "2.2rem", color: "#3b82f6" }} />
              </div>
              <h3>Email</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.2rem",
                  width: "100%",
                }}>
                <a
                  href={`mailto:${email}`}
                  className="btn-contact"
                  style={{
                    whiteSpace: "nowrap",
                    flexShrink: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minWidth: 0,
                  }}>
                  {email}
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(email);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1200);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    marginLeft: "0.1rem",
                    color: copied ? "#2563eb" : "#3b82f6",
                    fontSize: "1em",
                    height: "1.8em",
                    width: "1.8em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-label="Copy email to clipboard"
                  title={copied ? "Copied!" : "Copy email"}>
                  <FaCopy
                    style={{ fontSize: "1em", verticalAlign: "middle" }}
                  />
                </button>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "0.18rem",
                  minHeight: "1.1em",
                  height: "1.1em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                {copied && (
                  <span style={{ color: "#2563eb", fontSize: "0.95rem" }}>
                    Copied!
                  </span>
                )}
              </div>
            </motion.div>

            {/* GitHub Bubble */}
            <motion.div
              className="contact-bubble social-bubble"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={1}>
              <div className="contact-icon">
                <i
                  className="devicon-github-original"
                  style={{ fontSize: "2.2rem" }}></i>
              </div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/Kamiltczarnik"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer">
                github.com/Kamiltczarnik
              </a>
            </motion.div>

            {/* LinkedIn Bubble */}
            <motion.div
              className="contact-bubble social-bubble"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              custom={2}>
              <div className="contact-icon">
                <i
                  className="devicon-linkedin-plain"
                  style={{ fontSize: "2.2rem" }}></i>
              </div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/kamil-czarnik/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer">
                linkedin.com/in/kamil-czarnik
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactNew;
