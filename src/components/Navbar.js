import React from "react";

function Navbar() {
  return (
    <nav className="navbar animated-navbar">
      <div className="container">
        <div className="nav-links">
          <a href="#about" className="nav-link">
            About Me
          </a>
          <span className="separator">|</span>
          <a href="#education" className="nav-link">
            Education & Certifications
          </a>
          <span className="separator">|</span>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <span className="separator">|</span>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
