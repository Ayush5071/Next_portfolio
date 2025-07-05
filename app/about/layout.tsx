import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ayush Tiwari - Full Stack Developer',
  description: 'Learn more about Ayush Tiwari, a passionate Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies.',
  keywords: ['Ayush Tiwari', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Ayush Tiwari' }],
  creator: 'Ayush Tiwari',
  openGraph: {
    title: 'About | Ayush Tiwari - Full Stack Developer',
    description: 'Learn more about Ayush Tiwari, a passionate Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Ayush Tiwari - Full Stack Developer',
    description: 'Learn more about Ayush Tiwari, a passionate Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
