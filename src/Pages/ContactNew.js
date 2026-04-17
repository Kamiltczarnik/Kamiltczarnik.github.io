import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "./css/ContactNew.css";

const contactVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.13,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const contactCards = [
  {
    label: "Email",
    value: "kamiltczarnik@gmail.com",
    note: "Best for Opportunities, project work, and direct conversations.",
    action: "Copy email",
    icon: Mail,
    kind: "copy",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kamil-czarnik",
    note: "Roles, background, and coursework in one place.",
    href: "https://www.linkedin.com/in/kamil-czarnik/",
    action: "Open LinkedIn",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Kamiltczarnik",
    note: "Code, experiments, and the repos behind the portfolio.",
    href: "https://github.com/Kamiltczarnik",
    action: "Open GitHub",
    icon: Github,
    figure: "/assets/images/waving-character.png",
  },
];

function ContactNew() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const motionState = shouldReduceMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("kamiltczarnik@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="page-section contact-page">
        <div className="page-container">
          <div className="contact-shell">
            <motion.header
              className="contact-header"
              variants={contactVariants}
              {...motionState}
              custom={0}>
              <span className="section-eyebrow">Contact</span>
              <h1>Best ways to reach me</h1>
            </motion.header>

            <div className="contact-grid">
              {contactCards.map((item, index) => {
                const Icon = item.icon;
                const isCopyCard = item.kind === "copy";
                const cardClassName = `contact-card surface-panel${
                  item.figure ? " contact-card--figure" : ""
                }`;

                const cardContent = (
                  <>
                    {item.figure ? (
                      <div className="contact-figure-box" aria-hidden="true">
                        <img
                          src={item.figure}
                          alt=""
                          className="contact-figure-illustration"
                          loading="lazy"
                        />
                      </div>
                    ) : null}

                    {isCopyCard ? (
                      <span
                        className={`contact-card__notice${
                          copied ? " contact-card__notice--visible" : ""
                        }`}
                        aria-live="polite">
                        Link copied
                      </span>
                    ) : null}

                    <span className="contact-card__icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>

                    <div className="contact-card__body">
                      <span className="contact-card__label">{item.label}</span>
                      <h2>{item.value}</h2>
                      <p>{item.note}</p>
                    </div>

                    <span className="contact-card__action">
                      {isCopyCard ? (
                        copied ? (
                          <Check size={15} aria-hidden="true" />
                        ) : (
                          <Copy size={15} aria-hidden="true" />
                        )
                      ) : null}
                      {item.action}
                      {!isCopyCard ? (
                        <ArrowUpRight size={15} aria-hidden="true" />
                      ) : null}
                    </span>
                  </>
                );

                if (isCopyCard) {
                  return (
                    <motion.article
                      key={item.label}
                      className={cardClassName}
                      role="button"
                      tabIndex={0}
                      onClick={copyEmail}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          copyEmail();
                        }
                      }}
                      variants={contactVariants}
                      {...motionState}
                      custom={index + 1}>
                      {cardContent}
                    </motion.article>
                  );
                }

                return (
                  <motion.a
                    key={item.label}
                    className={cardClassName}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={contactVariants}
                    {...motionState}
                    custom={index + 1}>
                    {cardContent}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactNew;
