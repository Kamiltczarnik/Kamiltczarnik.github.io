import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [manualActiveSection, setManualActiveSection] = useState(null);

  // Scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      if (manualActiveSection) return; // Ignore scroll if manually set

      const sections = [
        "welcome",
        "about-me",
        "projects",
        "technologies",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2 + 60;

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

  // Click handler for smooth navigation
  const handleClick = (sectionId) => {
    setManualActiveSection(sectionId);
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => setManualActiveSection(null), 500);
  };

  // Hover handler to preview the active section
  const handleHover = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            {[
              { id: "welcome", label: "Welcome" },
              { id: "about-me", label: "About Me" },
              { id: "technologies", label: "Technologies" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact Me" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(id);
                  }}
                  onMouseEnter={() => handleHover(id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
