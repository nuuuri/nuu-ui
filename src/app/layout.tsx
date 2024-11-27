/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import LayoutContainer from '@/app/ui/layout-container';
const geistSans = localFont({
  src: '../styles/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../styles/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Nuu-UI',
  description: 'Custom UI Components',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}
