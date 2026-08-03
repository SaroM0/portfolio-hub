import CaseStudyLayout from '@/components/CaseStudy/CaseStudyLayout';

export const metadata = {
  title: 'Legal Archive RAG System — Case Study',
  description:
    'Production document intelligence platform over 30K+ sensitive legal and institutional documents for FLAR, with hybrid retrieval, cross-encoder reranking, and enterprise authentication.',
  alternates: {
    canonical: '/work/legal-archive-rag',
  },
  openGraph: {
    title: 'Legal Archive RAG System — Case Study | Santiago Rodríguez Mora',
    description:
      'Production document intelligence platform over 30K+ sensitive legal and institutional documents, with hybrid retrieval and cross-encoder reranking.',
    url: '/work/legal-archive-rag',
  },
};

export default function LegalArchiveRagPage() {
  return (
    <CaseStudyLayout
      tag="production"
      title="Legal Archive RAG System"
      client="FLAR — Fondo Latinoamericano de Reservas"
      year="2025"
      summary="A production document intelligence platform over 30K+ sensitive legal and institutional documents, combining hybrid retrieval, cross-encoder reranking, automated ingestion, and enterprise authentication."
      metrics={[
        { value: '30K+', label: 'Documents Indexed' },
        { value: '90%+', label: 'QA Accuracy' },
        { value: '1M+', label: 'Legal Records' },
      ]}
      sections={[
        {
          heading: 'Context',
          paragraphs: [
            'FLAR, a regional reserve fund, needed to make its legal and institutional archive searchable and queryable without compromising document sensitivity or provenance.',
          ],
        },
        {
          heading: 'Problem',
          paragraphs: [
            '30K+ sensitive documents needed hybrid retrieval — keyword and semantic — with high QA accuracy, automated ingestion from the institution’s existing SharePoint system, enterprise authentication, and a full audit trail, given the regulatory sensitivity of the content.',
          ],
        },
        {
          heading: 'Architecture',
          paragraphs: [
            'Hybrid retrieval combines pgvector and Qdrant vector stores with BGE-M3 embeddings, followed by cross-encoder reranking for precision. Neo4j captures relational context between documents. vLLM handles generation, LangGraph orchestrates the pipeline, and FastAPI exposes the service. An automated SharePoint ingestion pipeline keeps the index current, and the platform runs on Azure behind enterprise authentication.',
          ],
        },
        {
          heading: 'Technical decisions',
          list: [
            'Dual vector-store approach (pgvector + Qdrant): pgvector co-located with existing Postgres infrastructure for operational simplicity, Qdrant for specialized ANN performance at scale.',
            'Cross-encoder reranking added after initial hybrid retrieval to lift QA accuracy beyond what first-pass retrieval alone could reach.',
            'Neo4j introduced specifically to capture document relationships — cross-references, amendments — that pure vector similarity missed.',
          ],
        },
        {
          heading: 'Evaluation',
          paragraphs: [
            'QA accuracy was validated through structured human review across a representative set of institutional queries.',
          ],
        },
        {
          heading: 'Results',
          list: [
            '30K+ documents indexed with 90%+ QA accuracy.',
            'Retrieval spans 1M+ underlying legal records.',
            'Automated SharePoint ingestion keeps the index current without manual re-uploads.',
          ],
        },
      ]}
      tech={['pgvector', 'Qdrant', 'BGE-M3', 'vLLM', 'Azure', 'Neo4j', 'LangGraph', 'Python', 'FastAPI']}
      confidentialNote="Confidential engagement — architecture details available on request"
    />
  );
}
