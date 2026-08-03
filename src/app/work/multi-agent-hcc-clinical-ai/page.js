import CaseStudyLayout from '@/components/CaseStudy/CaseStudyLayout';

export const metadata = {
  title: 'Multi-Agent HCC Clinical Decision Support — Case Study',
  description:
    'Multi-agent consensus architecture for hepatocellular carcinoma (HCC) clinical reasoning, coordinating virtual specialist roles with guideline-grounded retrieval. Led to an ASCO 2026 accepted abstract.',
  alternates: {
    canonical: '/work/multi-agent-hcc-clinical-ai',
  },
  openGraph: {
    title: 'Multi-Agent HCC Clinical Decision Support — Case Study | Santiago Rodríguez Mora',
    description:
      'Multi-agent consensus architecture for HCC clinical reasoning, grounded in clinical guidelines. ASCO 2026 accepted abstract.',
    url: '/work/multi-agent-hcc-clinical-ai',
  },
};

export default function HccMultiAgentPage() {
  return (
    <CaseStudyLayout
      tag="research"
      title="Multi-Agent HCC Clinical Decision Support"
      client="University of Cincinnati — Research Collaboration"
      year="2025–2026"
      summary="A multi-agent consensus architecture for hepatocellular carcinoma (HCC) clinical reasoning, coordinating virtual specialist roles with guideline-grounded retrieval — accepted as an ASCO 2026 abstract."
      metrics={[
        { value: 'ASCO 2026', label: 'Accepted Abstract' },
        { value: '3', label: 'Virtual Specialists' },
      ]}
      sections={[
        {
          heading: 'Context',
          paragraphs: [
            'HCC clinical decision-making draws on hepatology, oncology, and radiology at once. A single LLM reasoning in isolation tends to miss cross-specialty nuance and lacks explicit grounding in current clinical guidelines — both of which matter for research intended to be evaluated by domain experts.',
          ],
        },
        {
          heading: 'Problem',
          paragraphs: [
            'The goal was a system that reasons closer to a multidisciplinary tumor board — cross-checking specialty perspectives against each other — while staying traceable to guideline literature and auditable enough for clinical research use.',
          ],
        },
        {
          heading: 'Architecture',
          paragraphs: [
            'A LangGraph-orchestrated multi-agent graph coordinates virtual specialist roles — hepatologist, oncologist, radiologist — each grounded via guideline-focused retrieval. A consensus step reconciles the specialist outputs into a single clinical reasoning trace.',
          ],
        },
        {
          heading: 'Technical decisions',
          list: [
            'Multi-agent consensus chosen over single large-context prompting: specialty-scoped retrieval and role framing reduced cross-domain reasoning errors compared to one model reasoning over everything at once.',
            'Guideline-grounded RAG used instead of relying on parametric model knowledge, keeping every recommendation traceable to source literature — critical for clinical research validity.',
            'Evaluated against a benchmark from the group’s public HCC LLM architecture benchmark work.',
          ],
        },
        {
          heading: 'Evaluation & results',
          paragraphs: [
            'The architecture and its results were validated against domain-expert review criteria as part of the abstract submission process, leading to acceptance at ASCO 2026 — the American Society of Clinical Oncology’s annual meeting.',
          ],
        },
      ]}
      tech={['LangGraph', 'RAG', 'Clinical Guidelines', 'Multi-Agent', 'Python', 'LLM Evaluation']}
      github="https://github.com/SaroM0/hcc-llm-architecture-benchmark"
    />
  );
}
