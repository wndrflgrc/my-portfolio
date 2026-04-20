'use client';

import { motion, AnimatePresence, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  // { label: 'Projects', href: '#projects' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  const scrollTo = (href: string) => {
    setOpen(false);
    // Small delay lets the menu close before scroll to avoid layout jank
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-3xl mx-auto px-6 h-14 flex items-center justify-between'>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='font-black text-sm tracking-tight cursor-pointer select-none'
        >
          <span className='text-primary'>Val</span>
          <span className='text-muted-foreground font-medium'>.dev</span>
        </button>

        {/* Desktop nav */}
        <nav className='hidden sm:flex items-center gap-0.5'>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className='px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/60 transition-colors cursor-pointer'
            >
              {link.label}
            </button>
          ))}
          <a
            href='mailto:valleser0502@gmail.com'
            className='ml-2 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
          >
            Contact me
          </a>
          <div className='ml-2'>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className='sm:hidden flex items-center gap-2'>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className='p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
            aria-label='Toggle navigation'
          >
            {open ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — AnimatePresence fully unmounts buttons when closed so they can't intercept taps */}
      <AnimatePresence>
        {open && (
          <motion.div
            key='mobile-menu'
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className='sm:hidden border-b border-border bg-background/95 backdrop-blur-md'
          >
            <div className='max-w-3xl mx-auto px-6 py-3 flex flex-col gap-1'>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className='w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-colors cursor-pointer'
                >
                  {link.label}
                </button>
              ))}
              <a
                href='mailto:valleser0502@gmail.com'
                className='mt-1 px-3 py-2.5 text-sm font-semibold text-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
              >
                Contact me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
