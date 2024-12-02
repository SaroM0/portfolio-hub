import React from "react";

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-content">
        <p>
          I’m 21 years old, a Software Developer, Engineer, and Researcher
          passionate about cutting-edge technologies. My professional expertise
          lies in artificial intelligence and advanced software development. I
          specialize in integrating AI models, building applications, and
          designing solutions that combine theory with real-world impact.
        </p>
        <p>
          What sets me apart is my ability to learn new things quickly—a crucial
          skill in today’s fast-changing technological landscape. My curiosity
          fuels my passion for adapting to emerging tools and challenges,
          allowing me to stay at the forefront of innovation.
        </p>
        <p>
          Beyond my professional work, I’m deeply passionate about music, which
          is why I’m sharing my personal playlist for you to enjoy while
          exploring this page. I also love cooking, drawing, and painting, and I
          make it a point to create something new every day. This constant drive
          to explore and create makes me a highly creative person ready to
          embrace any new adventure with enthusiasm.
        </p>
        <div className="download-cv">
          <a
            href="/cv.pdf"
            download="Santiago_Rodriguez_CV.pdf"
            className="download-button"
          >
            Check My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
