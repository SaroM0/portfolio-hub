import React from "react";

const Testimonial = ({ photo, name, position, company, comment }) => {
  return (
    <div className="testimonial">
      <img src={photo} alt={`${name}'s photo`} className="testimonial-photo" />
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
