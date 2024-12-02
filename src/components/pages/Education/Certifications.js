import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Certifications = () => {
  const certificationsData = [
    {
      logo: "nvidia-logo.png",
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      issueDate: "Feb 2024",
      credentialId: "dd5a388c5b604cc5ad2482b2f7472edd",
      credentialUrl:
        "https://courses.nvidia.com/certificates/dd5a388c5b604cc5ad2482b2f7472edd/",
    },
    {
      logo: "google-cloud-logo.png",
      title: "Create and Manage Cloud Resources",
      issuer: "Google Cloud Skills Boost",
      issueDate: "Apr 2023",
      credentialId: "3432759",
      credentialUrl:
        "https://www.cloudskillsboost.google/public_profiles/3432759",
    },
    {
      logo: "google-cloud-logo.png",
      title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
      issuer: "Google Cloud Skills Boost",
      issueDate: "Apr 2023",
      credentialId: "3417147",
      credentialUrl:
        "https://www.cloudskillsboost.google/public_profiles/3417147",
    },
    {
      logo: "google-cloud-logo.png",
      title:
        "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
      issuer: "Google Cloud Skills Boost",
      issueDate: "Apr 2023",
      credentialId: "3432343",
      credentialUrl:
        "https://www.cloudskillsboost.google/public_profiles/3432343",
    },
    {
      logo: "google-cloud-logo.png",
      title:
        "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
      issuer: "Google Cloud Skills Boost",
      issueDate: "Apr 2023",
      credentialId: "3427403",
      credentialUrl:
        "https://www.cloudskillsboost.google/public_profiles/3427403",
    },
    {
      logo: "google-cloud-logo.png",
      title: "Google Cloud Computing Foundations: Networking",
      issuer: "Google Cloud Skills Boost",
      issueDate: "Apr 2023",
      credentialId: "3427572",
      credentialUrl:
        "https://www.cloudskillsboost.google/public_profiles/3427572",
    },
    {
      logo: "google-cloud-logo.png",
      title: "Google Cloud Essentials",
      issuer: "Google Cloud Skills Boost",
      issueDate: "Apr 2023",
      credentialId: "3432399",
      credentialUrl:
        "https://www.cloudskillsboost.google/public_profiles/3432399",
    },
    {
      logo: "google-cloud-logo.png",
      title: "Perform Foundational Infrastructure Tasks in Google Cloud",
      issuer: "Google Cloud Skills Boost",
      issueDate: "Apr 2023",
      credentialId: "3432914",
      credentialUrl:
        "https://www.cloudskillsboost.google/public_profiles/3432914",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {certificationsData.map((cert, index) => (
        <div key={index} className="certification-card">
          <img
            src={cert.logo}
            alt={`${cert.issuer} logo`}
            className="certification-logo"
          />
          <div className="certification-details">
            <h3>{cert.title}</h3>
            <p>Issuer: {cert.issuer}</p>
            <p>Issued: {cert.issueDate}</p>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Certifications;
