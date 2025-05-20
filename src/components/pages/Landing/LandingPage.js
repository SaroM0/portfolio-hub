import React from "react";
import Hero from "./Hero";
import SocialMedia from "./SocialMedia";
import ParticlesBackground from "../../common/ParticlesBackground/ParticlesBackground";
import "./Landing.css";

function LandingPage() {
  return (
    <div id="landing" className="landing-page">
      <ParticlesBackground />
      <Hero />
      <SocialMedia />
    </div>
  );
}

export default LandingPage;
