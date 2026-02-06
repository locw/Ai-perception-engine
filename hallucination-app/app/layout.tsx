import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Perception Hallucination Engine',
  description: 'Walk through the internet using entropy-driven perception',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
