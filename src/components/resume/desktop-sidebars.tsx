'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';

const navLinks = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Skills', href: 'skills' },
  { label: 'Education', href: 'education' },
  //   { label: 'Projects', href: 'projects' },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most in view (highest intersectionRatio)
        let mostVisible: IntersectionObserverEntry | null = null;
        let highestRatio = -1;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio;
            mostVisible = entry;
          }
        });

        if (mostVisible !== null && highestRatio > 0) {
          setActive(
            ((mostVisible as IntersectionObserverEntry).target as HTMLElement)
              .id,
          );
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-80px 0px -80px 0px',
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function DesktopLeftSidebar() {
  const activeSection = useActiveSection(navLinks.map((l) => l.href));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
      className='hidden xl:flex flex-col gap-5 fixed top-24 w-44 pointer-events-auto z-40 will-change-transform'
      style={{
        left: 'max(16px, calc(50% - 580px))',
      }}
    >
      {/* Mini profile */}
      <div className='rounded-xl border border-border bg-card shadow-sm p-4'>
        <div className='flex items-center gap-3 mb-3'>
          <div className='w-9 h-9 rounded-full bg-linear-to-br from-primary to-primary/50 flex items-center justify-center shrink-0 overflow-hidden'>
            <svg viewBox='0 0 40 40' fill='none' className='w-full h-full'>
              <path
                d='M 10 18 C 10 8 30 8 30 18 C 28 11 20 10 20 10 C 20 10 12 11 10 18Z'
                fill='white'
                fillOpacity='0.5'
              />
              <circle cx='20' cy='17' r='8.5' fill='white' fillOpacity='0.95' />
              <circle cx='16.5' cy='15.5' r='1.5' fill='#7c3aed' />
              <circle cx='23.5' cy='15.5' r='1.5' fill='#7c3aed' />
              <path
                d='M 16.5 19.5 Q 20 22.5 23.5 19.5'
                stroke='#7c3aed'
                strokeWidth='1.2'
                fill='none'
                strokeLinecap='round'
              />
              <ellipse
                cx='20'
                cy='34'
                rx='11'
                ry='7'
                fill='white'
                fillOpacity='0.85'
              />
            </svg>
          </div>
          <div className='min-w-0'>
            <p className='text-xs font-bold text-foreground truncate'>Val</p>
            <p className='text-[10px] text-muted-foreground truncate'>
              Frontend Dev
            </p>
          </div>
        </div>
        <span className='flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400'>
          <span className='h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse' />
          Open to work
        </span>
      </div>

      {/* Section nav */}
      <div className='rounded-xl border border-border bg-card shadow-sm p-3'>
        <p className='text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-2 mb-2'>
          On this page
        </p>
        <nav className='flex flex-col gap-0.5'>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs cursor-pointer transition-all duration-200 will-change-colors ${
                activeSection === link.href
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              <span
                className={`inline-block w-1 h-1 rounded-full mr-2 align-middle transition-colors duration-200 ${
                  activeSection === link.href ? 'bg-primary' : 'bg-border'
                }`}
              />
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
}

export function DesktopRightSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
      className='hidden xl:flex flex-col gap-5 fixed top-24 w-44 pointer-events-auto z-40 will-change-transform'
      style={{
        right: 'max(16px, calc(50% - 580px))',
      }}
    >
      {/* Contact card */}
      <div className='rounded-xl border border-border bg-card shadow-sm p-4 space-y-3'>
        <p className='text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60'>
          Contact
        </p>
        <a
          href='mailto:valleser0502@gmail.com'
          className='flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group'
        >
          <Mail className='w-3.5 h-3.5 shrink-0 group-hover:text-primary' />
          <span className='truncate'>valleser0502</span>
        </a>
        <a
          href='https://github.com/wndrflgrc'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group'
        >
          <GithubIcon className='w-3.5 h-3.5 shrink-0 group-hover:text-primary' />
          <span className='truncate'>wndrflgrc</span>
        </a>
        <div className='flex items-center gap-2 text-xs text-muted-foreground'>
          <MapPin className='w-3.5 h-3.5 shrink-0' />
          <span className='truncate'>Taguig, PH</span>
        </div>
      </div>

      {/* Quick stats */}
      <div className='rounded-xl border border-border bg-card shadow-sm p-4'>
        <p className='text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-3'>
          Quick Stats
        </p>
        <div className='space-y-3'>
          {[
            { label: 'Experience', value: '~2 yrs' },
            { label: 'Stack', value: 'React / Next' },
            { label: 'Location', value: 'PH · Remote' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className='text-[10px] text-muted-foreground/70'>
                {stat.label}
              </p>
              <p className='text-xs font-semibold text-foreground'>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub link */}
      <a
        href='https://github.com/wndrflgrc'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border bg-card text-xs text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200 shadow-sm'
      >
        <GithubIcon className='w-3.5 h-3.5' />
        GitHub Profile
      </a>
    </motion.aside>
  );
}
