import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ scrollLocked, setScrollLocked }) {
  const [activeSection, setActiveSection] = useState("welcome");
  const [manualActiveSection, setManualActiveSection] = useState(null); // Tracks manual navigation
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Lock or unlock scrolling
    document.body.style.overflow = scrollLocked ? "hidden" : "auto";
  
    const handleScroll = () => {
      if (manualActiveSection) return; // Ignore scroll if manually set
  
      const sections = ["welcome", "home", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      // Check if the user is at the bottom of the page
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
  
      if (atBottom) {
        setActiveSection("contact"); // Highlight "Contact Me" if at the bottom
      } else {
        // Check which section is currently in view
        const currentSection = sections.find((id) => {
          const section = document.getElementById(id);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            return (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            );
          }
          return false;
        });
  
        // Update active section for highlighting
        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }
  
      // Handle sticky state for the navbar
      const welcomeSection = document.getElementById("welcome");
      if (welcomeSection) {
        const { bottom } = welcomeSection.getBoundingClientRect();
        setIsSticky(bottom <= 0); // Make navbar sticky when Welcome is out of view
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Reset overflow
    };
  }, [scrollLocked, activeSection, manualActiveSection]);
  

  const handleClick = (sectionId) => {
    setManualActiveSection(sectionId); // Set manual navigation state
    setActiveSection(sectionId); // Highlight the clicked section

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Unlock scrolling when a navbar link is clicked
    setScrollLocked(false);

    setTimeout(() => setManualActiveSection(null), 600); // Reset manual navigation after smooth scroll
  };

  return (
    <nav id="navbar" className={isSticky ? "sticky" : ""}>
      <ul>
        {[
          { id: "welcome", label: "Welcome" },
          { id: "home", label: "About Me" },
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
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
