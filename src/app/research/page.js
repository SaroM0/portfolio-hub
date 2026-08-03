'use client';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './research.css';

const PAPERS = [
  {
    type: 'conference',
    venue: 'ASCO 2026',
    venueFull: 'American Society of Clinical Oncology Annual Meeting 2026',
    title:
      'Tumor board–based multi-agent LLMs with guideline retrieval and consensus deliberation: Implications for hepatocellular carcinoma clinical reasoning',
    authors: 'Rodriguez Mora S., et al. — University of Cincinnati Collaboration',
    year: '2026',
    abstract:
      'Multi-agent system coordinating virtual specialist roles (hepatologist, oncologist, radiologist) with guideline-grounded retrieval to simulate tumor board deliberation for HCC clinical decision support. Evaluated on clinical reasoning accuracy and consensus quality.',
    contribution:
      'System architecture design, LLM orchestration framework, multi-agent graph design, clinical evaluation methodology.',
    link: 'https://www.asco.org/abstracts-presentations/265090',
    status: 'Accepted — Abstract',
  },
  {
    type: 'poster',
    venue: 'EASL 2026 · THU-212',
    venueFull: 'European Association for the Study of the Liver Congress 2026',
    title:
      'Does size matter? Think again: smartphone-ready reasoning LLMs with RAG match frontier models for MASLD clinical decision support',
    authors: 'Rodriguez Mora S., et al.',
    year: '2026',
    abstract:
      'Comparative evaluation of compact, deployable LLMs augmented with RAG against frontier models for MASLD (metabolic-associated steatotic liver disease) clinical QA. Demonstrated that well-designed retrieval pipelines can close the performance gap between small and large models for clinical applications.',
    contribution:
      'RAG pipeline design, clinical QA evaluation framework, retrieval architecture, performance benchmarking against frontier models.',
    link: null,
    status: 'Accepted — Poster Presentation',
  },
];

export default function ResearchPage() {
  const { t } = useTranslation();

  return (
    <div className="page-section">
      <div className="page-wrap">
        <header className="section-header">
          <span className="section-label">{t('research.sectionLabel')}</span>
          <h1 className="section-title">{t('research.sectionTitle')}</h1>
          <div className="section-divider" />
        </header>

        <div className="research-grid">
          {PAPERS.map((paper) => (
            <article key={paper.title} className="card research-card featured">
              {/* Venue badge + status */}
              <div className="research-meta">
                <span className={`tag tag-${paper.type}`}>
                  {paper.type === 'conference'
                    ? t('research.tagConference')
                    : t('research.tagPoster')}
                </span>
                <span className="research-venue mono">{paper.venue}</span>
                <span className="research-status">{paper.status}</span>
              </div>

              {/* Title */}
              <h3 className="research-title">{paper.title}</h3>

              {/* Authors + venue full */}
              <p className="research-authors">{paper.authors}</p>
              <p className="research-venue-full">{paper.venueFull} · {paper.year}</p>

              {/* Abstract */}
              <div className="research-abstract">
                <p>{paper.abstract}</p>
              </div>

              {/* Contribution */}
              <div className="research-contribution">
                <span className="research-contribution-label">
                  {t('research.roleLabel')}:
                </span>
                <p>{paper.contribution}</p>
              </div>

              {/* Link */}
              <div className="research-footer">
                {paper.link ? (
                  <a
                    href={paper.link}
                    className="link-arrow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('research.viewAbstract')} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                ) : (
                  <span className="research-link-pending mono">
                    Abstract available upon acceptance publication
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Research roles note */}
        <aside className="research-collab-note">
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>
            Research Roles
          </span>
          <div className="research-collab-list">
            <div className="research-collab-item">
              <span className="research-collab-org">University of Cincinnati</span>
              <span className="research-collab-desc">
                Applied AI Research Collaborator — Multi-agent LLMs, RAG pipelines, and evaluation frameworks for clinical decision support in liver disease and oncology.
              </span>
              <span className="mono research-collab-date">Oct 2025 – Present</span>
            </div>
            <div className="research-collab-item">
              <span className="research-collab-org">Universidad de los Andes</span>
              <span className="research-collab-desc">
                AI & Robotics Research Team Lead, SinfonIA — Human-robot interaction, computer vision, NLP, and autonomous systems. 1st place RoboCup @Home 2024 (Eindhoven, Netherlands).
              </span>
              <span className="mono research-collab-date">Apr 2023 – Apr 2025</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
