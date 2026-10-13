import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'EpyonAI University | 501(c)(3) AI Education Nonprofit',
  description:
    'EpyonAI University is a 501(c)(3) nonprofit adapting AI, technology, and opportunity knowledge into accessible learning pathways.',
  keywords: [
    'AI education',
    'AI safety for kids',
    'workforce development',
    'content adaptation',
    'accessible learning',
    '501(c)(3)',
    'nonprofit',
    'Atlanta',
    'EpyonAI',
  ],
  authors: [{ name: 'EpyonAI University' }],
  creator: 'EpyonAI University',
  metadataBase: new URL('https://www.epyonai.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.epyonai.org',
    title: 'EpyonAI University | 501(c)(3) AI Education Nonprofit',
    description:
      'A nonprofit campus for AI safety, adapted learning, workforce pathways, and open education projects.',
    siteName: 'EpyonAI University',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EpyonAI University | 501(c)(3) AI Education Nonprofit',
    description:
      'A nonprofit campus for AI safety, adapted learning, workforce pathways, and open education projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070b12',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#070b12]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
