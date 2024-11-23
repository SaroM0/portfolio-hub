import React, { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this value for when the section is considered "active"
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <a
          href="#about"
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
        >
          About Me
        </a>
        <span className="separator">|</span>
        <a
          href="#education"
          className={`nav-link ${
            activeSection === "education" ? "active" : ""
          }`}
        >
          Education & Certifications
        </a>
        <span className="separator">|</span>
        <a
          href="#experience"
          className={`nav-link ${
            activeSection === "experience" ? "active" : ""
          }`}
        >
          Experience
        </a>
        <span className="separator">|</span>
        <a
          href="#projects"
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
        >
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
