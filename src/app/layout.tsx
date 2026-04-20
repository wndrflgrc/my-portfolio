import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jose Arnel Valleser  Frontend Developer',
  description:
    'Frontend Developer with nearly 2 years of experience building modern, scalable web applications using React, Next.js, Remix, and Tailwind CSS.',
  openGraph: {
    title: 'Jose Arnel Valleser  Frontend Developer',
    description:
      'Frontend Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Page-wide background orbs — fixed so they persist on scroll */}
        <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
          <div className='absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] -translate-x-1/2 -translate-y-1/2' />
          <div className='absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] translate-x-1/3 translate-y-1/3' />
        </div>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
