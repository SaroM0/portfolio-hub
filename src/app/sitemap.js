export default function sitemap() {
  const baseUrl = 'https://www.santiagorm.dev';
  const lastModified = new Date();

  const routes = [
    { path: '/', changeFrequency: 'monthly', priority: 1 },
    { path: '/work', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/work/legal-document-rag', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/work/multi-agent-hcc-clinical-ai', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/work/legal-archive-rag', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/work/multi-agent-software-delivery', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/experience', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/research', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/stack', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/talks', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
