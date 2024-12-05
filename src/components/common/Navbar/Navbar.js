import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Referencia al menú desplegable
  const { t, i18n } = useTranslation();

  // Alternar idioma entre "en" y "es"
  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const nextLang = currentLang === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
  };

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
            {t("navbar.about")}
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
            {t("navbar.education")}
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
            {t("navbar.experience")}
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
            {t("navbar.projects")}
          </a>
        </div>

        {/* Botón único para cambiar idioma */}
        <div className="language-buttons">
          <button onClick={toggleLanguage}>
            {i18n.language === "en" ? "ES" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
