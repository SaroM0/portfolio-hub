import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
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

  return (
    <nav className="navbar">
      <div className="container">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#about");
          }}
          className="nav-link"
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
          className="nav-link"
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
          className="nav-link"
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
          className="nav-link"
        >
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
