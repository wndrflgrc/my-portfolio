'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  return (
    <header className='sticky top-0 z-30 backdrop-blur-md bg-[#fdfaf3]/70 dark:bg-neutral-950/70 border-b border-dashed border-neutral-400/30'>
      <div className='max-w-3xl mx-auto flex items-center justify-between px-5 py-3'>
        <Link
          href='/'
          className='group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-violet-600 transition-colors'
        >
          <span className='inline-block w-2 h-2 rounded-full bg-violet-500 group-hover:animate-ping' />
          Val · frontend dev
        </Link>
        <div className='flex items-center gap-2'>
          <span className='hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500'>
            <Sparkles className='w-3 h-3' /> open to work
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
