import React from "react";
import "./Footer.css";

const Testimonial = ({ photo, name, position, company, comment }) => {
  return (
    <div className="testimonial">
      <img src={photo} alt={name} className="testimonial-photo" />
      <div className="testimonial-content">
        <p className="testimonial-comment">"{comment}"</p>
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-position">
          {position} at {company}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
