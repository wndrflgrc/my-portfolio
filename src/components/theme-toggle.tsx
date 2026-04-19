'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className='w-9 h-9 rounded-lg border border-border bg-muted/30' />
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative w-9 h-9 rounded-lg border border-border bg-muted/40 hover:bg-muted hover:border-primary/40 transition-colors duration-200 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer'
      whileTap={{ scale: 0.88 }}
      aria-label='Toggle theme'
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='absolute'
        >
          {isDark ? <Moon className='w-4 h-4' /> : <Sun className='w-4 h-4' />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
