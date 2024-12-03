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

      console.log("Active Section:", currentSection);
      setActiveSection(currentSection);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");

      console.log("Sections found:", sections);

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        console.log(`Section: ${section.id}, rect:`, rect);

        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      });

      console.log("Current Section:", currentSection);
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
