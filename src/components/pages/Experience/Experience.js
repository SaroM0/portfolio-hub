import { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    date: "May 2024 - Present",
    title: "Software Developer",
    company: "Straico",
    location: "Cheyenne, Wyoming, United States (Remote)",
    description: [
      "API Development: Designing and implementing APIs to facilitate seamless communication between AI models and web applications.",
      "Front-End Development: Building user-friendly interfaces using React, ensuring an intuitive user experience.",
      "Back-End Development: Developing robust server-side logic to support AI functionalities and data processing.",
      "AI Integration: Implementing large language models (LLMs), natural language processing (NLP), retrieval-augmented generation (RAG), and embeddings to enhance application capabilities.",
      "Microservices Deployment: Deploying microservices architectures to improve scalability and maintainability.",
    ],
    iconStyle: { background: "#8e58da", color: "#121212" },
  },
  {
    date: "Apr 2023 - Present",
    title: "Manipulation Research Head",
    company: "SinfonIA Uniandes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Leading a team of talented engineering students to enable Pepper robots to interact effectively with their surroundings.",
      "Leveraging tools such as ROS and MoveIt to develop cutting-edge solutions that enhance robotic functionality and performance in dynamic environments.",
    ],
    iconStyle: { background: "#9f96d9", color: "#121212" },
  },
  {
    date: "Feb 2024 - Jun 2024",
    title: "XR Application Developer",
    company: "Oasis",
    location: "Bogotá, Capital District, Colombia",
    description: [
      "Developed immersive XR applications using Unity and C#.",
      "Collaborated with cross-disciplinary teams to design and deploy interactive virtual environments.",
    ],
    iconStyle: { background: "#a8ee95", color: "#121212" },
  },
  {
    date: "Aug 2022 - Dec 2023",
    title: "Teaching Assistant",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Assisted course instructors in workshops, labs, and classes by guiding students, addressing inquiries, reviewing assignments, managing evaluations, transcribing notes, and coordinating materials.",
      "Supported projects aligned with the Sustainable Development Goals (SDGs), assisting students in problem definition, methodology, and development of sustainable projects.",
    ],
    iconStyle: { background: "#8e58da", color: "#121212" },
  },
  {
    date: "Jun 2023 - Jun 2023",
    title: "Teaching Assistant",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Supported course instructors in workshops, labs, and classes.",
      "Facilitated coordination of equipment and led installation and maintenance of software tools, including Ubuntu, ROS, PyTorch, Nvidia CUDA, TensorFlow, inverse kinematics libraries, CNN, and MoveIt.",
    ],
    iconStyle: { background: "#9f96d9", color: "#121212" },
  },
  {
    date: "Jan 2022 - Jun 2022",
    title: "Teaching Assistant",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Assisted course instructors in workshops, labs, and classes by guiding students, addressing inquiries, reviewing assignments, managing evaluations, transcribing notes, and coordinating materials.",
      "Collaborated with diverse professors across various fields, engaging in technologies encompassing IoT comprehensively.",
    ],
    iconStyle: { background: "#a8ee95", color: "#121212" },
  },
  {
    date: "Jan 2022 - Jun 2022",
    title: "Frontend Developer",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia",
    description: [
      "Oversaw management and updates of the department’s website.",
      "Responsibilities encompassed content publication, HTML, CSS, and JavaScript development for content implementation, ensuring website functionality and maintenance, and enhancing accessibility and user usability.",
    ],
    iconStyle: { background: "#8e58da", color: "#121212" },
  },
];

function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const container = experienceRef.current;
    if (container) {
      const contentHeight = container.scrollHeight;
      if (contentHeight > window.innerHeight) {
        container.style.height = `${contentHeight}px`; // Ajustar dinámicamente
      }
    }
  }, []);

  return (
    <div ref={experienceRef} className="experience-container">
      <h2 className="text-3xl font-bold mb-6 text-uiux-5">Experience</h2>

      <div className="container mx-auto px-4">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              iconStyle={exp.iconStyle}
              contentStyle={{ background: "#121212", color: "#e0e0e0" }}
              contentArrowStyle={{ borderRight: "7px solid #121212" }}
            >
              <h3 className="vertical-timeline-element-title text-uiux-1">
                {exp.title} at {exp.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-uiux-3">
                {exp.location}
              </h4>
              <ul className="list-disc pl-5">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-uiux-2">
                    {desc}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
