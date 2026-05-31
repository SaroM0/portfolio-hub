'use client';
import { useTranslation } from 'react-i18next';
import './experience.css';

const TIMELINE = [
  {
    company: 'Apiux Tech',
    role: 'Senior AI Developer L2',
    location: 'Remote — Santiago, Chile',
    date: 'Nov 2025 – Present',
    active: true,
    promoted: true,
    highlights: [
      'Sole technical decision-maker across LLM provider selection, model deployment strategy, agent graph design, retrieval pipelines, and production-readiness criteria for 3+ simultaneous AI systems.',
      'Designed a multi-agent software delivery system covering 6+ specialized roles (product ownership, architecture, DevOps, QA, security, development) — ~90% accuracy in human-reviewed code generation outputs.',
      'Designed a production tender intelligence system ingesting 200+ procurement opportunities/day, generating qualification scores, summaries, and proposal drafts in under 30 minutes.',
      'Mentor and code reviewer for ~6 junior engineers, establishing architecture standards, security processes, and production-readiness criteria.',
    ],
    tag: null,
  },
  {
    company: 'University of Cincinnati',
    role: 'Applied AI Research Collaborator',
    location: 'Remote',
    date: 'Oct 2025 – Present',
    active: true,
    highlights: [
      'Contributing to applied research on multi-agent LLM systems, RAG pipelines, and evaluation frameworks for clinical decision support in liver disease and oncology.',
      'Co-designed multi-agent HCC clinical reasoning architecture leading to ASCO 2026 abstract acceptance.',
      'Designed RAG-augmented LLM pipeline for MASLD clinical QA; accepted as THU-212 poster at EASL 2026.',
    ],
    tag: 'research',
  },
  {
    company: 'Apiux Tech',
    role: 'Senior Full Stack Developer — AI/ML',
    location: 'Bogotá, Colombia',
    date: 'Jul 2025 – Oct 2025',
    active: false,
    highlights: [
      'Designed and deployed a production RAG system over 1M+ legal documents for a government institution, enabling structured drafting of legal petitions and tutela responses.',
      'Improved end-to-end drafting accuracy from ~50% baseline to 90%+ by combining supervised fine-tuning of a local LLM with RAG — reducing manual legal review time by over 60%.',
      'Owned end-to-end delivery: backend orchestration, retrieval pipeline, local model inference (vLLM), frontend integration, secure on-prem deployment.',
      'Promoted to Senior AI Developer L2 after 4 months.',
    ],
    tag: null,
  },
  {
    company: 'AI Inspire Labs',
    brand: 'Paipol Product',
    role: 'Tech Lead & AI Systems Architect',
    location: 'Remote — Colombia',
    date: 'Mar 2025 – Jul 2025',
    active: false,
    highlights: [
      'Sole engineer and technical lead for a conversational intelligence platform — architecture, backend, ETL, model-serving, REST APIs, frontend, and cloud infrastructure.',
      'Built retrieval and analysis workflows over 2+ years of historical conversational data, reaching ~80% reviewed answer correctness in business intelligence scenarios.',
      'Defined technical standards for deployment, data flow, retrieval design, and AI service composition.',
    ],
    tag: null,
  },
  {
    company: 'AI Inspire Labs',
    brand: 'Straico Product',
    role: 'Software Developer, AI Systems',
    location: 'Remote — United States',
    date: 'May 2024 – Aug 2025',
    active: false,
    highlights: [
      'Built and maintained LLM-powered agent workflows and AI microservices for a multi-model SaaS platform serving production user traffic.',
      'Developed orchestration pipelines integrating dynamic routing logic, structured prompt workflows, external API composition, and multimodal processing.',
      'Ran iterative prompt optimization and agent behavior experiments directly improving response quality and capability coverage.',
    ],
    tag: null,
  },
  {
    company: 'SinfonIA, Universidad de los Andes',
    role: 'AI & Robotics Research Team Lead',
    location: 'Bogotá, Colombia',
    date: 'Apr 2023 – Apr 2025',
    active: false,
    highlights: [
      'Led applied AI and robotics research across human-robot interaction, computer vision, NLP, and autonomous systems.',
      '1st Place — RoboCup @Home Social Standard Platform League, Eindhoven, Netherlands, 2024.',
      'Implemented speech-to-text and text-to-speech pipelines for Pepper robot human-dialogue.',
    ],
    tag: 'research',
  },
  {
    company: 'Universidad de los Andes',
    role: 'Teaching Assistant & Frontend Developer',
    location: 'Bogotá, Colombia',
    date: 'Jan 2022 – Dec 2023',
    active: false,
    highlights: [
      'Supported workshops, labs, and classes for Electrical Engineering, Robotics Learning, and Society 5.0 courses.',
      'Installed and maintained Ubuntu, ROS, PyTorch, CUDA, and MoveIt for robotics labs.',
      'Maintained the department website using HTML, CSS, and JavaScript.',
    ],
    tag: null,
  },
];

function TimelineItem({ item }) {
  const { t } = useTranslation();

  return (
    <div className={`timeline-item ${item.active ? 'active' : ''}`}>
      <div className="timeline-connector">
        <div className={`timeline-dot ${item.active ? 'active' : ''}`} />
        <div className="timeline-line" />
      </div>

      <div className="timeline-content">
        <div className="timeline-head">
          <div className="timeline-head-left">
            {item.active && (
              <div className="timeline-current-badge">
                <span className="status-dot" />
                <span>{t('experience.current')}</span>
              </div>
            )}
            {item.tag === 'research' && !item.active && (
              <span className="tag tag-research">{t('experience.researchRole')}</span>
            )}
            <h3 className="timeline-role">{item.role}</h3>
            <p className="timeline-company">
              {item.company}
              {item.brand && (
                <span className="timeline-brand"> · {item.brand}</span>
              )}
            </p>
          </div>
          <div className="timeline-head-right">
            <span className="timeline-date mono">{item.date}</span>
            <span className="timeline-location">{item.location}</span>
          </div>
        </div>

        {item.promoted && (
          <p className="timeline-promoted">↑ {t('experience.promoted')}</p>
        )}

        <ul className="timeline-highlights">
          {item.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  const { t } = useTranslation();

  return (
    <div className="page-section">
      <div className="page-wrap">
        <header className="section-header">
          <span className="section-label">{t('experience.sectionLabel')}</span>
          <h2 className="section-title">{t('experience.sectionTitle')}</h2>
          <div className="section-divider" />
        </header>

        <div className="timeline">
          {TIMELINE.map((item) => (
            <TimelineItem key={`${item.company}-${item.date}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
