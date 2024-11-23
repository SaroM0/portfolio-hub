import React from "react";
import Hero from "./Hero";
import SocialMedia from "./SocialMedia";
import "./Landing.css";

function LandingPage() {
  return (
    <div id="landing" className="landing">
      <Hero />
      <SocialMedia />
    </div>
  );
}

export default LandingPage;
