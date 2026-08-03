import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faLock, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import '@/app/work/case-study.css';

export default function CaseStudyLayout({
  tag,
  title,
  client,
  year,
  summary,
  metrics,
  sections,
  tech,
  github,
  confidentialNote,
}) {
  return (
    <div className="page-section">
      <div className="page-wrap case-study">
        <Link href="/work" className="case-back">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Work
        </Link>

        <header className="case-header">
          <span className={`tag tag-${tag}`}>{tag}</span>
          <h1 className="case-title">{title}</h1>
          <div className="case-meta">
            <span>{client}</span>
            <span aria-hidden="true">·</span>
            <span className="mono">{year}</span>
          </div>
          <p className="case-summary">{summary}</p>
        </header>

        {metrics && metrics.length > 0 && (
          <div className="case-metrics">
            {metrics.map(({ value, label }) => (
              <div key={label} className="case-metric">
                <div className="metric-value">{value}</div>
                <div className="metric-label">{label}</div>
              </div>
            ))}
          </div>
        )}

        {sections.map(({ heading, paragraphs, list }) => (
          <section key={heading} className="case-section">
            <h2>{heading}</h2>
            {paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
            {list && (
              <ul>
                {list.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            )}
          </section>
        ))}

        <ul className="tech-list" aria-label="Technologies">
          {tech.map((t) => (
            <li key={t} className="tech-badge">{t}</li>
          ))}
        </ul>

        <div className="case-footer">
          {confidentialNote && (
            <span className="confidential-note">
              <FontAwesomeIcon icon={faLock} /> {confidentialNote}
            </span>
          )}
          {github && (
            <a href={github} className="link-arrow" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> View on GitHub ↗
            </a>
          )}
          <Link href="/work" className="link-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> View all case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
