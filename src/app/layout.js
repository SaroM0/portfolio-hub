import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/I18nProvider';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jb',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.santiagorm.dev'),

  title: {
    default: 'Santiago Rodríguez Mora | AI Systems Engineer',
    template: '%s | Santiago Rodríguez Mora',
  },

  description:
    'Santiago Rodríguez Mora is an AI Systems Engineer building production RAG, multi-agent systems, clinical AI and LLM evaluation platforms. ASCO & EASL 2026 researcher.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'profile',
    url: '/',
    title: 'Santiago Rodríguez Mora | AI Systems Engineer',
    description:
      'Production RAG · Multi-Agent Systems · Clinical AI · LLM Evaluation · ASCO & EASL 2026',
    siteName: 'Santiago Rodríguez Mora',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: 'https://www.santiagorm.dev',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://www.santiagorm.dev/#person',
    name: 'Santiago Rodríguez Mora',
    alternateName: 'Santiago Rodriguez Mora',
    url: 'https://www.santiagorm.dev',
    jobTitle: 'AI Systems Engineer',
    sameAs: [
      'https://www.linkedin.com/in/santiago-rodriguez-mora',
      'https://github.com/SaroM0',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad de los Andes',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <I18nProvider>
          <Analytics />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
