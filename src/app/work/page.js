'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLock, faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './work.css';

const PROJECTS = [
  {
    tags: ['production'],
    title: 'Government Legal Document RAG',
    caseStudySlug: 'legal-document-rag',
    client: 'Government Institution (via Apiux Tech)',
    year: '2025',
    featured: true,
    description:
      'Production RAG system over 1M+ legal documents enabling structured drafting of legal petitions and tutela responses with full audit trails and human-review controls. Combined supervised fine-tuning with RAG over institutional records.',
    metrics: [
      { value: '1M+',    label: 'Legal Documents' },
      { value: '50→90%', label: 'Drafting Accuracy' },
      { value: '60%',    label: 'Review Time Saved' },
    ],
    tech: ['vLLM', 'RAG', 'SFT', 'On-Prem Deployment', 'Python', 'LangGraph', 'PostgreSQL'],
    link: null,
    confidential: true,
  },
  {
    tags: ['research', 'collaboration'],
    title: 'Multi-Agent HCC Clinical Decision Support',
    caseStudySlug: 'multi-agent-hcc-clinical-ai',
    client: 'University of Cincinnati — Research Collaboration',
    year: '2025–2026',
    featured: true,
    description:
      'Multi-agent consensus architecture for hepatocellular carcinoma (HCC) clinical reasoning. Coordinates virtual specialist roles (hepatologist, oncologist, radiologist) with guideline-grounded retrieval. Led to ASCO 2026 abstract acceptance.',
    metrics: [
      { value: 'ASCO 2026', label: 'Accepted Abstract' },
      { value: '3',         label: 'Virtual Specialists' },
    ],
    tech: ['LangGraph', 'RAG', 'Clinical Guidelines', 'Multi-Agent', 'Python', 'LLM Evaluation'],
    github: 'https://github.com/SaroM0/hcc-llm-architecture-benchmark',
    confidential: false,
  },
  {
    tags: ['production', 'confidential'],
    title: 'Legal Archive RAG System',
    caseStudySlug: 'legal-archive-rag',
    client: 'FLAR — Fondo Latinoamericano de Reservas',
    year: '2025',
    featured: true,
    description:
      'Production document intelligence platform over 30K+ sensitive legal and institutional documents. Hybrid retrieval with cross-encoder reranking, automated SharePoint ingestion, full audit trails, and enterprise authentication.',
    metrics: [
      { value: '30K+', label: 'Documents Indexed' },
      { value: '90%+', label: 'QA Accuracy' },
      { value: '1M+',  label: 'Legal Records' },
    ],
    tech: ['pgvector', 'Qdrant', 'BGE-M3', 'vLLM', 'Azure', 'Neo4j', 'LangGraph', 'Python', 'FastAPI'],
    link: null,
    confidential: true,
  },
  {
    tags: ['production'],
    title: 'Tender Intelligence Platform',
    client: 'Apiux Tech — Internal Product',
    year: '2025–2026',
    description:
      'Ingests 200+ procurement opportunities per day from public sources. Generates structured qualification scores, business summaries, and ready-to-use proposal drafts in under 30 minutes — reducing commercial review latency from days to under an hour.',
    metrics: [
      { value: '200+',    label: 'Opportunities/Day' },
      { value: '<30 min', label: 'Turnaround Time' },
      { value: 'Days→1h', label: 'Review Latency' },
    ],
    tech: ['Python', 'LangGraph', 'Claude API', 'PostgreSQL', 'Docker', 'REST API'],
    link: null,
    confidential: true,
  },
  {
    tags: ['production', 'internal'],
    title: 'Multi-Agent Software Delivery System',
    caseStudySlug: 'multi-agent-software-delivery',
    client: 'Apiux Tech',
    year: '2025–2026',
    description:
      '6+ specialized agent roles — product ownership, architecture, DevOps, QA, security, development — operating in a coordinated LangGraph graph. ~90% accuracy in human-reviewed code generation outputs during structured internal validation.',
    metrics: [
      { value: '~90%', label: 'Code Gen Accuracy' },
      { value: '6+',   label: 'Specialized Agents' },
    ],
    tech: ['LangGraph', 'Claude API', 'Python', 'Docker', 'Multi-Agent', 'Structured Outputs'],
    link: null,
    confidential: true,
  },
  {
    tags: ['research', 'thesis'],
    title: 'Clinical Interview Agent',
    client: 'Universidad de los Andes — Undergraduate Thesis',
    year: '2025–2026',
    description:
      'Autonomous clinical interview agent for medical education. A LangGraph-based agentic loop simulating structured anamnesis interactions with medical students, evaluated on a 10-criterion rubric (clinical, conversational, safety dimensions) targeting inter-rater reliability of Cohen\'s κ ≥ 0.60.',
    metrics: [
      { value: '10',     label: 'Evaluation Criteria' },
      { value: 'κ≥0.60', label: 'IRR Target' },
    ],
    tech: ['LangGraph', 'Python', 'OpenAI API', 'Evaluation Framework', 'Medical NLP'],
    confidential: true,
  },
];

/* ── Client & Product Work ── */
const CLIENT_PROJECTS = [
  {
    title: 'Triple Nexo',
    subtitle: 'Institutional Platform',
    sector: 'NGO',
    year: '2026',
    tags: ['Full-Stack', 'CMS', 'SEO', 'Social Impact'],
    description:
      'Production institutional platform for a social-impact NGO working across humanitarian action, sustainable development, and peacebuilding. Built content workflows for institutional presence, news, projects, and public communication.',
    role: 'End-to-end design, development, deployment, and production support.',
    impact: ['Live production platform', 'SEO visibility', 'Institutional positioning', 'Content management'],
    link: 'https://triplenexo.org', // TODO: replace with actual URL if different
  },
  {
    title: 'Together Finance',
    subtitle: 'Digital Platform',
    sector: 'Finance',
    year: '2026',
    tags: ['Finance', 'Azure', 'Email Setup', 'Lead Capture'],
    description:
      'Production website and full operational setup for a New Zealand credit guidance company. Includes public-facing web experience, lead capture flow, business email configuration, and Azure-based infrastructure.',
    role: 'Web development, deployment, domain/email configuration, Azure setup, and production support.',
    impact: ['Live production site', 'International client', 'Azure configuration', 'Lead capture'],
    link: 'https://www.togetherfin.co.nz/en',
  },
  {
    title: 'EngiTool',
    subtitle: 'Industrial Website',
    sector: 'Industrial',
    year: '2025',
    tags: ['Frontend', 'Product Showcase', 'Responsive'],
    description:
      'Frontend for a production website showcasing mining and construction equipment, authorized brands, product categories, certifications, and contact channels for commercial inquiries.',
    role: 'Frontend development and production delivery.',
    impact: ['Live production site', 'Industrial sector', 'Product showcase'],
    link: 'https://www.engitool.com/',
  },
];

function TagBadge({ type, children }) {
  return <span className={`tag tag-${type}`}>{children}</span>;
}

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const isFeatured = !!project.featured;

  return (
    <article className={`card project-card ${isFeatured ? 'featured' : ''}`}>
      {/* Tags */}
      <div className="project-tags">
        {project.tags.map((tag) => (
          <TagBadge key={tag} type={tag}>
            {t(`work.tag${tag.charAt(0).toUpperCase() + tag.slice(1)}`)}
          </TagBadge>
        ))}
      </div>

      {/* Header */}
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <time className="project-year mono">{project.year}</time>
      </div>

      <p className="project-client">{project.client}</p>

      <p className="project-desc">{project.description}</p>

      {/* Metrics */}
      {project.metrics && (
        <div className="project-metrics">
          {project.metrics.map(({ value, label }) => (
            <div key={label} className="project-metric">
              <span className="metric-value">{value}</span>
              <span className="metric-label">{label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech stack */}
      <ul className="tech-list" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t} className="tech-badge">{t}</li>
        ))}
      </ul>

      {/* Footer link */}
      <div className="project-footer">
        {project.confidential ? (
          <span className="confidential-note">
            <FontAwesomeIcon icon={faLock} /> {t('work.onRequest')}
          </span>
        ) : project.github ? (
          <a
            href={project.github}
            className="link-arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> {t('work.github')} ↗
          </a>
        ) : null}
        {project.link && (
          <a href={project.link} className="link-arrow" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> View ↗
          </a>
        )}
        {project.caseStudySlug && (
          <Link href={`/work/${project.caseStudySlug}`} className="link-arrow">
            Read case study <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        )}
      </div>
    </article>
  );
}

function ClientCard({ project }) {
  const { t } = useTranslation();
  return (
    <article className="card client-card">
      <div className="client-head">
        <div>
          <h3 className="client-title">{project.title}</h3>
          <p className="client-subtitle">{project.subtitle}</p>
        </div>
        <div className="client-meta">
          <span className="mono client-sector">{project.sector}</span>
          <time className="mono client-year">{project.year}</time>
        </div>
      </div>

      <p className="client-desc">{project.description}</p>

      <p className="client-role">
        <span className="client-role-label">{t('work.roleLabel')}:</span>{' '}
        {project.role}
      </p>

      <ul className="client-impact" aria-label="Impact">
        {project.impact.map((i) => <li key={i}>{i}</li>)}
      </ul>

      <ul className="tech-list" aria-label="Tags">
        {project.tags.map((tag) => (
          <li key={tag} className="tech-badge">{tag}</li>
        ))}
      </ul>

      <div className="project-footer">
        {project.link && project.link !== '#' ? (
          <a
            href={project.link}
            className="link-arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {t('work.liveSite')} ↗
          </a>
        ) : (
          <span className="confidential-note">{t('work.linkSoon')}</span>
        )}
      </div>
    </article>
  );
}

export default function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className="page-section">
      <div className="page-wrap">
        <header className="section-header">
          <span className="section-label">{t('work.sectionLabel')}</span>
          <h1 className="section-title">{t('work.sectionTitle')}</h1>
          <div className="section-divider" />
        </header>

        {/* AI category label */}
        <p className="work-category-label mono">{t('work.categoryAI')}</p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* ── Client & Product Work ── */}
        <div id="client-work" className="client-work-section">
          <div className="client-work-header">
            <span className="section-label">{t('work.clientSectionLabel')}</span>
            <p className="client-work-desc">{t('work.clientSectionDesc')}</p>
          </div>

          <div className="client-grid">
            {CLIENT_PROJECTS.map((p) => (
              <ClientCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
