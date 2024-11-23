import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".snap-container");

    if (!scrollContainer) {
      console.error("Scroll container not found");
      return;
    }

    const toggleVisibility = () => {
      if (scrollContainer.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollContainer.addEventListener("scroll", toggleVisibility);

    return () => {
      scrollContainer.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector(".snap-container");

    // Smooth scroll to the top of the container
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Update the URL hash to match the home section
    window.location.hash = "#landing"; // Optional for hash navigation
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        ⬆
      </button>
    )
  );
}

export default ScrollToTop;
