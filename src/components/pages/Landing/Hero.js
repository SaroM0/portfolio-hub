import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const [currentWord, setCurrentWord] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const words = t("hero.dynamicWords", { returnObjects: true }); // Palabras dinámicas traducidas

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
  }, [t]);

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
          <p className="static-text large">{t("hero.greeting")}</p>
          <h1 className="animated-text small">{t("hero.introPart")}</h1>
          <h2 className="passionate-text small">
            {t("hero.passionatePart")}

            <span className="dynamic-text small">{currentWord}</span>
          </h2>

          <p className="subtext small">{t("hero.description")}</p>
        </>
      ) : (
        <>
          <p className="static-text">{t("hero.greeting")}</p>
          <h1 className="animated-text">
            {t("hero.introFull")}
            <span className="dynamic-text">{currentWord}</span>
            <span className="blinking-cursor"></span>
          </h1>
          <p className="subtext">{t("hero.description")}</p>
        </>
      )}
    </div>
  );
}

export default Hero;
