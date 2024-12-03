import React, { useState } from "react";
import Navbar from "./components/common/Navbar/Navbar";
import LandingPage from "./components/pages/Landing/LandingPage";
import About from "./components/pages/about/About";
import Education from "./components/pages/Education/Education";
import Experience from "./components/pages/Experience/Experience";
import Projects from "./components/pages/Projects/Projects";
import Footer from "./components/pages/Footer/Footer";

import Section from "./components/common/Section/Section";
import ScrollToTop from "./components/common/SrollToTop/ScrollToTop";
import FloatingWindow from "./components/common/FloatingWindow/FloatingWindow";

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isFloatingWindowVisible, setFloatingWindowVisible] = useState(true);

  const handleClose = () => {
    setFloatingWindowVisible(false);
  };

  return (
    <>
      <div className="app">
        <Navbar />
        <ScrollToTop />
        {isFloatingWindowVisible && (
          <FloatingWindow
            playlistId="0PInCJOxBsO832eLJ7UdPY"
            onClose={handleClose}
          />
        )}
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
          <Section id="experience" className="snap-section experience-section">
            <Experience />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
