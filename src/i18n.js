import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my project!",
        navbar: {
          about: "About Me",
          education: "Education & Certifications",
          experience: "Experience",
          projects: "Projects",
        },
        hero: {
          greeting: "Hi there!",
          introFull: "My name is Santiago, a passionate ",
          introPart: "My name is Santiago,",
          passionatePart: "a passionate ",
          dynamicWords: ["Developer", "Researcher", "Engineer", "Human"],
          description:
            "Driven by a passion for artificial intelligence, programming, and lifelong learning, I strive to innovate, enhance, and contribute to the world through groundbreaking AI applications and research.",
        },
        about: {
          title: "About Me",
        },
        bio: {
          paragraph1:
            "I’m a Software Developer, Engineer, and Researcher with a passion for learning and staying ahead in technology. My expertise includes artificial intelligence, software development, and building impactful solutions by blending theory with practice.",
          paragraph2:
            "I thrive in dynamic environments, excelling both independently and as part of diverse teams to bring innovative projects to life. My curiosity drives me to master new tools and concepts, ensuring I’m always ready to tackle emerging challenges.",
          paragraph3:
            "Outside of work, I’m an avid creator who loves music, cooking, drawing, and painting. Exploring and learning every day fuels my creativity and passion for embracing new adventures.",
        },
        skills: {
          softSkillsTitle: "Soft Skills",
          adaptability: "Adaptability",
          creativity: "Creativity",
          problemSolving: "Problem-Solving",
          teamCollaboration: "Team Collaboration",
          quickLearning: "Quick Learning",
          technicalSkillsTitle: "Technical Skills",
          fullStackDevelopment: "Full-Stack Development",
          apiDevelopment: "API Development & Microservices",
          databaseManagement: "Database Management (MongoDB, SQL, and others)",
          machineLearning: "Machine Learning, NLP & Computer Vision",
          robotics: "Robotics",
        },
        interests: {
          title: "Interests",
          exploringProjects:
            "Exploring and developing innovative projects with real-world impact",
          continuousLearning:
            "Continuous learning: embracing new skills, ideas, and technologies",
          collaboratingTeams:
            "Collaborating with diverse teams to create meaningful solutions",
          challengingMyself:
            "Challenging myself: learning from mistakes and growing through feedback",
        },
        education: {
          title: "Education & Certifications",
          uniandes: {
            csDegree: "Bachelor's degree in Computer Science",
            eeCoursework: "Advanced coursework in Electronic Engineering",
          },
          tec: {
            exchangeProgram:
              "Exchange Program in Data Analytics and Artificial Intelligence",
          },
          certifications: {
            deepLearning: "Fundamentals of Deep Learning",
            gcpFundamentals:
              "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
            gcpDataMLAI:
              "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
            gcpInfrastructure:
              "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
            issueDateFeb2024: "Feb 2024",
            issueDateApr2023: "Apr 2023",
          },
          viewCvButton: "View My Full CV",
        },
        certifications: {
          issuedBy: "Issued by",
          issueDate: "Issue date",
          viewCredential: "View Credential",
        },
        experience: {
          title: "Experience",
          straico: {
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
          },
          sinfonia: {
            date: "Apr 2023 - Present",
            title: "Manipulation Research Head",
            company: "SinfonIA Uniandes",
            location: "Bogotá, Capital District, Colombia (On-site)",
            description: [
              "Leading a team of talented engineering students to enable Pepper robots to interact effectively with their surroundings.",
              "Leveraging tools such as ROS and MoveIt to develop cutting-edge solutions that enhance robotic functionality and performance in dynamic environments.",
            ],
          },
          oasis: {
            date: "Feb 2024 - Jun 2024",
            title: "XR Application Developer",
            company: "Oasis",
            location: "Bogotá, Capital District, Colombia",
            description: [],
          },
          ta1: {
            date: "Aug 2022 - Dec 2023",
            title: "Teaching Assistant",
            company: "Universidad de Los Andes",
            location: "Bogotá, Capital District, Colombia (On-site)",
            description: [
              "Assisted course instructors in workshops, labs, and classes by guiding students, addressing inquiries, reviewing assignments, managing evaluations, transcribing notes, and coordinating materials.",
              "Supported projects aligned with the Sustainable Development Goals (SDGs), assisting students in problem definition, methodology, and development of sustainable projects.",
            ],
          },
          ta2: {
            date: "Jun 2023 - Jun 2023",
            title: "Teaching Assistant",
            company: "Universidad de Los Andes",
            location: "Bogotá, Capital District, Colombia (On-site)",
            description: [
              "Supported course instructors in workshops, labs, and classes.",
              "Facilitated coordination of equipment and led installation and maintenance of software tools, including Ubuntu, ROS, PyTorch, Nvidia CUDA, TensorFlow, inverse kinematics libraries, CNN, and MoveIt.",
            ],
          },
          ta3: {
            date: "Jan 2022 - Jun 2022",
            title: "Teaching Assistant",
            company: "Universidad de Los Andes",
            location: "Bogotá, Capital District, Colombia (On-site)",
            description: [
              "Assisted course instructors in workshops, labs, and classes by guiding students, addressing inquiries, reviewing assignments, managing evaluations, transcribing notes, and coordinating materials.",
              "Collaborated with diverse professors across various fields, engaging in technologies encompassing IoT comprehensively.",
            ],
          },
          frontend: {
            date: "Jan 2022 - Jun 2022",
            title: "Frontend Developer",
            company: "Universidad de Los Andes",
            location: "Bogotá, Capital District, Colombia",
            description: [
              "Oversaw management and updates of the department’s website.",
              "Responsibilities encompassed content publication, HTML, CSS, and JavaScript development for content implementation, ensuring website functionality and maintenance, and enhancing accessibility and user usability.",
            ],
          },
        },
        projects: {
          title: "Featured Projects",
          imagePlatform: {
            title: "AI-Driven Image Generation and Editing Platform",
            description:
              "An advanced application leveraging OpenAI's Function Calling and Ideogram API to enable intelligent image generation, specialized editing, and detailed descriptions. The platform features context-aware processing, automated mask generation, and seamless integration for scalable and efficient AI-driven image workflows.",
          },
          smartTemplates: {
            title: "Smart Templates Application",
            description:
              "This application detects similarities in user queries and suggests structured templates for related queries. It leverages the OpenAI API with embeddings for analysis and template generation, and uses a graph to visualize relationships between similar queries.",
          },
          sinfoniaWebsite: {
            title: "SinfonIA Website",
            description:
              "A basic and rapid development project for SinfonIA's official website, created using Angular. This platform serves as a hub for showcasing the group's projects, team details, and news. The website played a supporting role in the RoboCup 2024 competition, providing visibility for ongoing research and acting as a bridge for those seeking to connect with the group.",
          },
          pepperRobot: {
            title:
              "Pepper Robot Implementation in Unity for Virtual Reality Experiences",
            description:
              "Developed a virtual simulation of the Pepper robot within Unity by integrating the Robot Operating System (ROS). This project focuses on implementing advanced Virtual Reality (VR) and Augmented Reality (AR) technologies. By subscribing to robot topics through ROS, the simulation acts as a digital twin, paving the way for innovative applications in VR and AR. The project showcases the seamless fusion of robotics and immersive technologies.",
          },
        },
        footer: {
          availability: {
            title: "Available for select freelance opportunities",
            description:
              "Have an exciting project idea? I'm eager to collaborate and bring it to life. Contact me!",
          },
          contact: {
            title: "Contact",
            email: "Email",
            phone: "Phone",
          },
          testimonials: {
            testimonial1: {
              name: "Person Example 1",
              position: "Role",
              company: "Company",
              comment: "Example text",
            },
            testimonial2: {
              name: "Person Example 2",
              position: "Role",
              company: "Company",
              comment: "Example text",
            },
            testimonial3: {
              name: "Person Example 3",
              position: "Role",
              company: "Company",
              comment: "Example text",
            },
          },
          copyright: "This project was lovingly crafted by",
          technologies:
            "using React, Next.js, and Tailwind CSS. Deployed with Vercel.",
          rightsReserved: "All rights reserved.",
        },
      },
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a mi proyecto!",
        navbar: {
          about: "Sobre Mí",
          education: "Educación y Certificaciones",
          experience: "Experiencia",
          projects: "Proyectos",
        },
        hero: {
          greeting: "¡Hola!",
          introFull: "Me llamo Santiago, un apasionado ",
          introPart: "Me llamo Santiago,",
          passionatePart: "un apasionado ",
          dynamicWords: [
            "Desarrollador",
            "Investigador",
            "Ingeniero",
            "Humano",
          ],
          description:
            "Impulsado por la pasión por la inteligencia artificial, la programación y el aprendizaje continuo, me esfuerzo por innovar, mejorar y contribuir al mundo mediante aplicaciones y investigaciones revolucionarias de IA.",
        },
        about: {
          title: "Sobre Mí",
        },
        bio: {
          paragraph1:
            "Soy un Desarrollador de Software, Ingeniero e Investigador con pasión por aprender y mantenerme a la vanguardia de la tecnología. Mi experiencia incluye inteligencia artificial, desarrollo de software y la creación de soluciones impactantes combinando teoría con práctica.",
          paragraph2:
            "Me desenvuelvo en entornos dinámicos, destacándome tanto de forma independiente como en equipos diversos para dar vida a proyectos innovadores. Mi curiosidad me impulsa a dominar nuevas herramientas y conceptos, asegurándome de estar siempre listo para enfrentar desafíos emergentes.",
          paragraph3:
            "Fuera del trabajo, soy un creador entusiasta que ama la música, la cocina, el dibujo y la pintura. Explorar y aprender cada día alimenta mi creatividad y mi pasión por abrazar nuevas aventuras.",
        },
        skills: {
          softSkillsTitle: "Habilidades Blandas",
          adaptability: "Adaptabilidad",
          creativity: "Creatividad",
          problemSolving: "Resolución de Problemas",
          teamCollaboration: "Colaboración en Equipo",
          quickLearning: "Aprendizaje Rápido",
          technicalSkillsTitle: "Habilidades Técnicas",
          fullStackDevelopment: "Desarrollo Full-Stack",
          apiDevelopment: "Desarrollo de APIs y Microservicios",
          databaseManagement:
            "Gestión de Bases de Datos (MongoDB, SQL y otras)",
          machineLearning:
            "Aprendizaje Automático, PLN y Visión por Computador",
          robotics: "Robótica",
        },
        interests: {
          title: "Intereses",
          exploringProjects:
            "Explorar y desarrollar proyectos innovadores con impacto en el mundo real",
          continuousLearning:
            "Aprendizaje continuo: adquiriendo nuevas habilidades, ideas y tecnologías",
          collaboratingTeams:
            "Colaborar con equipos diversos para crear soluciones significativas",
          challengingMyself:
            "Retarme a mí mismo: aprender de los errores y crecer gracias al feedback",
        },
        education: {
          title: "Educación y Certificaciones",
          uniandes: {
            csDegree: "Título de pregrado en Ciencias de la Computación",
            eeCoursework: "Cursos avanzados en Ingeniería Electrónica",
          },
          tec: {
            exchangeProgram:
              "Programa de Intercambio en Análisis de Datos e Inteligencia Artificial",
          },
          certifications: {
            deepLearning: "Fundamentos de Aprendizaje Profundo",
            gcpFundamentals:
              "Fundamentos de Computación en la Nube de Google Cloud",
            gcpDataMLAI:
              "Fundamentos de Computación en la Nube: Datos, ML e IA en Google Cloud",
            gcpInfrastructure:
              "Fundamentos de Computación en la Nube: Infraestructura en Google Cloud",
            issueDateFeb2024: "Feb 2024",
            issueDateApr2023: "Abr 2023",
          },
          viewCvButton: "Ver Mi CV Completo",
        },
        certifications: {
          issuedBy: "Emitido por",
          issueDate: "Fecha de emisión",
          viewCredential: "Ver Credencial",
        },
        experience: {
          title: "Experiencia",
          straico: {
            date: "Mayo 2024 - Presente",
            title: "Desarrollador de Software",
            company: "Straico",
            location: "Cheyenne, Wyoming, Estados Unidos (Remoto)",
            description: [
              "Desarrollo de APIs: Diseño e implementación de APIs para facilitar la comunicación entre modelos de IA y aplicaciones web.",
              "Desarrollo Front-End: Creación de interfaces amigables utilizando React, asegurando una experiencia de usuario intuitiva.",
              "Desarrollo Back-End: Desarrollo de lógica robusta del lado del servidor para soportar funcionalidades de IA y procesamiento de datos.",
              "Integración de IA: Implementación de modelos de lenguaje grandes (LLMs), procesamiento de lenguaje natural (NLP), generación aumentada por recuperación (RAG) y embeddings para mejorar las capacidades de las aplicaciones.",
              "Despliegue de Microservicios: Implementación de arquitecturas de microservicios para mejorar la escalabilidad y mantenibilidad.",
            ],
          },
          sinfonia: {
            date: "Abr 2023 - Presente",
            title: "Jefe de Investigación en Manipulación",
            company: "SinfonIA Uniandes",
            location: "Bogotá, Distrito Capital, Colombia (Presencial)",
            description: [
              "Liderar un equipo de estudiantes de ingeniería talentosos para habilitar que los robots Pepper interactúen de manera efectiva con su entorno.",
              "Aprovechar herramientas como ROS y MoveIt para desarrollar soluciones innovadoras que mejoren la funcionalidad y el rendimiento de los robots en entornos dinámicos.",
            ],
          },
          oasis: {
            date: "Feb 2024 - Jun 2024",
            title: "Desarrollador de Aplicaciones XR",
            company: "Oasis",
            location: "Bogotá, Distrito Capital, Colombia",
            description: [],
          },
          ta1: {
            date: "Ago 2022 - Dic 2023",
            title: "Monitor Académico",
            company: "Universidad de Los Andes",
            location: "Bogotá, Distrito Capital, Colombia (Presencial)",
            description: [
              "Asistió a los instructores del curso en talleres, laboratorios y clases, guiando a los estudiantes, resolviendo consultas, revisando tareas, gestionando evaluaciones, transcribiendo notas y coordinando materiales.",
              "Apoyó proyectos alineados con los Objetivos de Desarrollo Sostenible (ODS), ayudando a los estudiantes en la definición de problemas, metodologías y desarrollo de proyectos sostenibles.",
            ],
          },
          ta2: {
            date: "Jun 2023 - Jun 2023",
            title: "Monitor Académico",
            company: "Universidad de Los Andes",
            location: "Bogotá, Distrito Capital, Colombia (Presencial)",
            description: [
              "Apoyó a los instructores del curso en talleres, laboratorios y clases.",
              "Facilitó la coordinación de equipos y lideró la instalación y mantenimiento de herramientas de software, incluyendo Ubuntu, ROS, PyTorch, Nvidia CUDA, TensorFlow, bibliotecas de cinemática inversa, CNN y MoveIt.",
            ],
          },
          ta3: {
            date: "Ene 2022 - Jun 2022",
            title: "Monitor Académico",
            company: "Universidad de Los Andes",
            location: "Bogotá, Distrito Capital, Colombia (Presencial)",
            description: [
              "Asistió a los instructores del curso en talleres, laboratorios y clases, guiando a los estudiantes, resolviendo consultas, revisando tareas, gestionando evaluaciones, transcribiendo notas y coordinando materiales.",
              "Colaboró con profesores de diversas áreas, involucrándose en tecnologías relacionadas con IoT de manera integral.",
            ],
          },
          frontend: {
            date: "Ene 2022 - Jun 2022",
            title: "Desarrollador Frontend",
            company: "Universidad de Los Andes",
            location: "Bogotá, Distrito Capital, Colombia",
            description: [
              "Supervisó la gestión y actualizaciones del sitio web del departamento.",
              "Las responsabilidades incluyeron publicación de contenido, desarrollo en HTML, CSS y JavaScript para la implementación de contenido, asegurando la funcionalidad y el mantenimiento del sitio web, mejorando la accesibilidad y la usabilidad del usuario.",
            ],
          },
        },
        projects: {
          title: "Proyectos Destacados",
          imagePlatform: {
            title:
              "Plataforma de Generación y Edición de Imágenes impulsada por IA",
            description:
              "Una aplicación avanzada que utiliza Function Calling de OpenAI y la API de Ideogram para habilitar la generación inteligente de imágenes, edición especializada y descripciones detalladas. La plataforma incluye procesamiento contextual, generación automática de máscaras e integración fluida para flujos de trabajo escalables y eficientes impulsados por IA.",
          },
          smartTemplates: {
            title: "Aplicación de Plantillas Inteligentes",
            description:
              "Esta aplicación detecta similitudes en las consultas de los usuarios y sugiere plantillas estructuradas para consultas relacionadas. Utiliza la API de OpenAI con embeddings para análisis y generación de plantillas, y un grafo para visualizar relaciones entre consultas similares.",
          },
          sinfoniaWebsite: {
            title: "Sitio Web de SinfonIA",
            description:
              "Un proyecto de desarrollo rápido y básico para el sitio web oficial de SinfonIA, creado utilizando Angular. Esta plataforma sirve como un centro para mostrar los proyectos del grupo, detalles del equipo y noticias. El sitio web apoyó la competición RoboCup 2024, proporcionando visibilidad a investigaciones en curso y actuando como un puente para quienes buscan conectarse con el grupo.",
          },
          pepperRobot: {
            title:
              "Implementación del Robot Pepper en Unity para Experiencias de Realidad Virtual",
            description:
              "Se desarrolló una simulación virtual del robot Pepper dentro de Unity, integrando el Sistema Operativo de Robots (ROS). Este proyecto se enfoca en implementar tecnologías avanzadas de Realidad Virtual (VR) y Realidad Aumentada (AR). Al suscribirse a tópicos del robot mediante ROS, la simulación actúa como un gemelo digital, allanando el camino para aplicaciones innovadoras en VR y AR. El proyecto demuestra la fusión perfecta entre robótica y tecnologías inmersivas.",
          },
        },
        footer: {
          availability: {
            title: "Disponible para oportunidades freelance seleccionadas",
            description:
              "¿Tienes una idea emocionante? Estoy ansioso por colaborar y darle vida. ¡Contáctame!",
          },
          contact: {
            title: "Contacto",
            email: "Correo",
            phone: "Teléfono",
          },
          testimonials: {
            testimonial1: {
              name: "Persona Ejemplo 1",
              position: "Cargo",
              company: "Compañía",
              comment: "Texto de ejemplo",
            },
            testimonial2: {
              name: "Persona Ejemplo 2",
              position: "Cargo",
              company: "Compañía",
              comment: "Texto de ejemplo",
            },
            testimonial3: {
              name: "Persona Ejemplo 3",
              position: "Cargo",
              company: "Compañía",
              comment: "Texto de ejemplo",
            },
          },
          copyright: "Este proyecto fue creado con cariño por",
          technologies:
            "utilizando React, Next.js y Tailwind CSS. Desplegado con Vercel.",
          rightsReserved: "Todos los derechos reservados.",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
