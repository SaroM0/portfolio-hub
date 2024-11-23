import React, { useState, useEffect, useRef } from "react";
import "./Section.css";

const Section = ({ id, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Save the ref to a local variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Ensure that the dependency array remains empty

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`snap-section ${isVisible ? "fade-in" : "fade-out"}`}
    >
      {children}
    </div>
  );
};

export default Section;
