import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [manualActiveSection, setManualActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (manualActiveSection) return; // Ignore scroll if manually set

      const sections = ["welcome", "about-me", "projects", "technologies", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualActiveSection]);

  const handleClick = (sectionId) => {
    setManualActiveSection(sectionId);
    setActiveSection(sectionId);

    // Scroll to the section smoothly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Clear manualActiveSection after 1 second to resume scroll-based detection
    setTimeout(() => setManualActiveSection(null), 1000);
  };

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li>
              <a
                href="#welcome"
                className={activeSection === "welcome" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleClick("welcome");
                }}
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className={activeSection === "about-me" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("about-me");
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className={activeSection === "technologies" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("technologies");
                }}
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("contact");
                }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
