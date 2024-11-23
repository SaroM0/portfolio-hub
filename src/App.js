import React from "react";
import Navbar from "./components/common/Navbar/Navbar";
import LandingPage from "./components/pages/Landing/LandingPage";
import About from "./components/pages/about/About";
import Education from "./components/pages/Education/Education";
import Experience from "./components/pages/Experience/Experience";
import Projects from "./components/pages/Projects/Projects";
import Section from "./components/common/Section/Section";
import ScrollToTop from "./components/common/SrollToTop/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <div className="snap-container">
        <Section id="landing">
          <LandingPage />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="education">
          <Education />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
      </div>
    </div>
  );
}

export default App;
