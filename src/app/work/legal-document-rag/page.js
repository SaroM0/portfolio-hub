import CaseStudyLayout from '@/components/CaseStudy/CaseStudyLayout';

export const metadata = {
  title: 'Government Legal Document RAG — Case Study',
  description:
    'Production RAG system over 1M+ legal documents for structured drafting of legal petitions and tutela responses, with full audit trails and human-review controls.',
  alternates: {
    canonical: '/work/legal-document-rag',
  },
  openGraph: {
    title: 'Government Legal Document RAG — Case Study | Santiago Rodríguez Mora',
    description:
      'Production RAG system over 1M+ legal documents for structured legal drafting with full audit trails.',
    url: '/work/legal-document-rag',
  },
};

export default function LegalDocumentRagPage() {
  return (
    <CaseStudyLayout
      tag="production"
      title="Government Legal Document RAG"
      client="Government Institution (via Apiux Tech)"
      year="2025"
      summary="A production retrieval-augmented generation system over 1M+ legal documents, enabling structured drafting of legal petitions and tutela responses with full audit trails and human-review controls."
      metrics={[
        { value: '1M+', label: 'Legal Documents' },
        { value: '50→90%', label: 'Drafting Accuracy' },
        { value: '60%', label: 'Review Time Saved' },
      ]}
      sections={[
        {
          heading: 'Context',
          paragraphs: [
            'The institution needed to accelerate the drafting of legal petitions and tutela responses across an archive of over 1M legal documents. Manual drafting was slow, inconsistent across drafters, and difficult to audit — a significant constraint for a government body operating under legal and compliance scrutiny.',
          ],
        },
        {
          heading: 'Problem',
          paragraphs: [
            'Two requirements had to be met simultaneously: accurate retrieval over a large, heterogeneous legal corpus, and drafting output that matched the institution’s formal legal writing conventions. Because outputs carry legal weight, every step also needed a full audit trail and a human-review gate before anything left the system.',
          ],
        },
        {
          heading: 'Architecture',
          paragraphs: [
            'The system combines supervised fine-tuning (SFT) on the institution’s drafting patterns with retrieval-augmented generation over the document archive. vLLM serves the model on-premises to satisfy data sovereignty requirements. A LangGraph-orchestrated pipeline structures the workflow into retrieval, drafting, and review-flagging stages, with PostgreSQL holding document metadata and the audit trail.',
          ],
        },
        {
          heading: 'Technical decisions',
          list: [
            'On-prem deployment via vLLM, driven by data sovereignty constraints inherent to government data.',
            'SFT combined with RAG rather than pure retrieval-augmented generation — pure RAG did not reliably match the institution’s formal drafting style, so the model was fine-tuned on drafting patterns while RAG kept content grounded in the actual archive.',
            'Human-in-the-loop review gates at every drafting stage, given the compliance and liability weight of legal outputs.',
          ],
        },
        {
          heading: 'Evaluation',
          paragraphs: [
            'Drafting accuracy was tracked through a structured human-review pipeline, comparing system-assisted drafts against the unassisted manual-drafting baseline.',
          ],
        },
        {
          heading: 'Results',
          list: [
            'Drafting accuracy improved from roughly 50% to 90% under human review.',
            'Review time reduced by approximately 60%.',
            'Retrieval and drafting operate across a 1M+ document archive with full audit trails.',
          ],
        },
      ]}
      tech={['vLLM', 'RAG', 'SFT', 'On-Prem Deployment', 'Python', 'LangGraph', 'PostgreSQL']}
      confidentialNote="Confidential engagement — architecture details available on request"
    />
  );
}
