import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const themeTransitionTimeoutRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    return () => {
      if (themeTransitionTimeoutRef.current) {
        window.clearTimeout(themeTransitionTimeoutRef.current);
      }
      document.body.classList.remove("theme-transitioning");
      document.documentElement.classList.remove("theme-transitioning");
    };
  }, []);

  const startThemeTransition = () => {
    document.body.classList.add("theme-transitioning");
    document.documentElement.classList.add("theme-transitioning");

    if (themeTransitionTimeoutRef.current) {
      window.clearTimeout(themeTransitionTimeoutRef.current);
    }

    themeTransitionTimeoutRef.current = window.setTimeout(() => {
      document.body.classList.remove("theme-transitioning");
      document.documentElement.classList.remove("theme-transitioning");
      themeTransitionTimeoutRef.current = null;
    }, 820);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      startThemeTransition();
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    document.documentElement.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDarkMode;
    startThemeTransition();
    setIsDarkMode(nextThemeIsDark);
    localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
  };

  return (
    <nav className="modern-navbar" aria-label="Primary">
      <div className="navbar-container">
        <div className="navbar-pill">
          <div className="navbar-nav" role="list">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }>
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            aria-pressed={!isDarkMode}>
            <span className="theme-toggle__icon" aria-hidden="true">
              {isDarkMode ? (
                <IoSunnyOutline size={18} strokeWidth={2} />
              ) : (
                <FiMoon size={18} strokeWidth={2} />
              )}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
