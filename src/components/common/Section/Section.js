import React, { useState, useEffect, useRef } from "react";
import "./Section.css";

const Section = ({ id, children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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
