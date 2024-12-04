import React, { useState, useEffect } from "react";

function Hero() {
  const [currentWord, setCurrentWord] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const staticPartFull = "My name is Santiago, a passionate ";
  const staticPart = "My name is Santiago,";
  const passionatePart = "a passionate ";
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const words = ["Developer", "Researcher", "Engineer", "Human"];

    let wordIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let timeout;

    const handleTypingEffect = () => {
      const currentWordFull = words[wordIndex];

      if (!isErasing && charIndex <= currentWordFull.length) {
        setCurrentWord(currentWordFull.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(handleTypingEffect, typingSpeed);
      } else if (!isErasing && charIndex > currentWordFull.length) {
        isErasing = true;
        timeout = setTimeout(handleTypingEffect, delayBetweenWords);
      } else if (isErasing && charIndex >= 0) {
        setCurrentWord(currentWordFull.slice(0, charIndex));
        charIndex--;
        timeout = setTimeout(handleTypingEffect, erasingSpeed);
      } else if (isErasing && charIndex < 0) {
        isErasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeout = setTimeout(handleTypingEffect, typingSpeed);
      }
    };

    timeout = setTimeout(handleTypingEffect, typingSpeed);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-container">
      {isSmallScreen ? (
        <>
          <p className="static-text large">Hi there!</p>
          <h1 className="animated-text small">{staticPart}</h1>
          <h2 className="passionate-text small">
            {passionatePart}

            <span className="dynamic-text small">{currentWord}</span>
          </h2>

          <p className="subtext small">
            Driven by a passion for artificial intelligence, programming, and
            lifelong learning, I strive to innovate, enhance, and contribute to
            the world through groundbreaking AI applications and research.
          </p>
        </>
      ) : (
        <>
          <p className="static-text">Hi there!</p>
          <h1 className="animated-text">
            {staticPartFull}
            <span className="dynamic-text">{currentWord}</span>
            <span className="blinking-cursor"></span>
          </h1>
          <p className="subtext">
            Driven by a passion for artificial intelligence, programming, and
            lifelong learning, I strive to innovate, enhance, and contribute to
            the world through groundbreaking AI applications and research.
          </p>
        </>
      )}
    </div>
  );
}

export default Hero;
