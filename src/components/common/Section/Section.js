import React, { useState, useEffect, useRef } from "react";
import "./Section.css";

const Section = ({ id, children, className = "", onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentlyVisible = entry.isIntersecting;
        setIsVisible(currentlyVisible);
        if (onVisibilityChange) {
          onVisibilityChange(id, currentlyVisible);
        }
      },
      { threshold: 0.6 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [id, onVisibilityChange]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`snap-section ${
        isVisible ? "fade-in" : "fade-out"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
