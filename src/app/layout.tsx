import type { Metadata } from 'next';
import { Orbit } from 'next/font/google';
import './globals.css';

const orbit = Orbit({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: '유희태 | 프론트엔드 엔지니어',
  description: '유희태(Kled)의 웹페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={orbit.className}>{children}</body>
    </html>
  );
}
