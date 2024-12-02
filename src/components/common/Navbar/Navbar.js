import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
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
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
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
        <span className="separator">|</span>
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
        <span className="separator">|</span>
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
        <span className="separator">|</span>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#projects");
          }}
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
        >
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
