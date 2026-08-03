import CaseStudyLayout from '@/components/CaseStudy/CaseStudyLayout';

export const metadata = {
  title: 'Multi-Agent Software Delivery System — Case Study',
  description:
    'A LangGraph-orchestrated system of 6+ specialized agent roles — product, architecture, DevOps, QA, security, development — reaching ~90% human-reviewed code generation accuracy.',
  alternates: {
    canonical: '/work/multi-agent-software-delivery',
  },
  openGraph: {
    title: 'Multi-Agent Software Delivery System — Case Study | Santiago Rodríguez Mora',
    description:
      '6+ specialized agent roles operating in a coordinated LangGraph graph, reaching ~90% human-reviewed code generation accuracy.',
    url: '/work/multi-agent-software-delivery',
  },
};

export default function MultiAgentSoftwareDeliveryPage() {
  return (
    <CaseStudyLayout
      tag="production"
      title="Multi-Agent Software Delivery System"
      client="Apiux Tech"
      year="2025–2026"
      summary="A LangGraph-orchestrated system of 6+ specialized agent roles — product ownership, architecture, DevOps, QA, security, and development — reaching ~90% accuracy in human-reviewed code generation."
      metrics={[
        { value: '~90%', label: 'Code Gen Accuracy' },
        { value: '6+', label: 'Specialized Agents' },
      ]}
      sections={[
        {
          heading: 'Context',
          paragraphs: [
            'Apiux Tech needed to scale engineering throughput without proportionally scaling headcount, particularly for well-specified, repeatable delivery work.',
          ],
        },
        {
          heading: 'Problem',
          paragraphs: [
            'Single-agent code generation pipelines tend to collapse distinct engineering concerns — architecture, security, QA — into one pass. The resulting output can pass a surface-level review while still failing deeper structural or security checks.',
          ],
        },
        {
          heading: 'Architecture',
          paragraphs: [
            'A LangGraph graph coordinates 6+ specialized roles — product ownership, architecture, DevOps, QA, security, and development — each operating with scoped context. Artifacts (specs, diffs, review reports) pass between nodes, with a human-review gate before anything merges.',
          ],
        },
        {
          heading: 'Technical decisions',
          list: [
            'Role separation modeled on a real engineering team structure, so each agent’s context stays focused on its concern instead of being diluted across the entire delivery lifecycle.',
            'Structured outputs enforced between agent handoffs — rather than free-form text — to keep the graph auditable and make failures attributable to a specific role.',
            'Claude API used for the reasoning-heavy architecture and security roles, chosen for structured-output reliability.',
          ],
        },
        {
          heading: 'Evaluation',
          paragraphs: [
            'Accuracy of generated code was tracked through structured internal human review during validation.',
          ],
        },
        {
          heading: 'Results',
          list: [
            '~90% accuracy in human-reviewed code generation outputs.',
            '6+ specialized agent roles operating in coordinated production use.',
          ],
        },
      ]}
      tech={['LangGraph', 'Claude API', 'Python', 'Docker', 'Multi-Agent', 'Structured Outputs']}
      confidentialNote="Internal system — architecture details available on request"
    />
  );
}
