import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null); // Referencia al menú desplegable

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    const container = document.querySelector(".snap-container");

    if (section && container) {
      const sectionOffset = section.offsetTop;

      container.scrollTo({
        top: sectionOffset,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Cerrar menú después de hacer clic en un enlace
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Cierra el menú si se hace clic fuera
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) {
      console.error("Snap container not found!");
      return;
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">
        {/* Botón tipo hamburguesa para móviles */}
        <button
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#about");
            }}
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          >
            About Me
          </a>
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#education");
            }}
            className={`nav-link ${
              activeSection === "education" ? "active" : ""
            }`}
          >
            Education & Certifications
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#experience");
            }}
            className={`nav-link ${
              activeSection === "experience" ? "active" : ""
            }`}
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#projects");
            }}
            className={`nav-link ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
