import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    // Otherwise, use system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }
    return false;
  });

  // Listen for system theme changes if user hasn't chosen manually
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return; // Don't react to system if user chose manually
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Apply the theme on component mount or change
    document.body.classList.toggle("light-mode", !isDarkMode);
    document.documentElement.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    // Set active section based on current route
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
    } else if (pathname === "/contact") {
      setActiveSection("contact");
    }
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    // Apply theme to document body and html
    document.body.classList.toggle("light-mode", !newTheme);
    document.documentElement.classList.toggle("light-mode", !newTheme);
    // Save theme preference to localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        {/* Centered Navigation Items */}
        <div className="navbar-center">
          <ul className="navbar-nav">
            {[
              { id: "home", label: "Home", path: "/" },
              { id: "projects", label: "Projects", path: "/projects" },
              { id: "contact", label: "Contact", path: "/contact" },
            ].map(({ id, label, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  className={`nav-link ${
                    activeSection === id ? "active" : ""
                  }`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme">
            {isDarkMode ? (
              <IoSunnyOutline size={20} strokeWidth={2} />
            ) : (
              <FiMoon size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
