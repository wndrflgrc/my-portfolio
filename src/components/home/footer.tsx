'use client';

import { useEffect, useState } from 'react';
import { Heart, Coffee, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';
import { contact } from './data';

const taglines = [
  'powered by ☕ and curiosity',
  'no AI was harmed in the making of this site',
  'shipped from Taguig, PH 🇵🇭',
  'pixel-pushed with love',
  'if you read this, you are a true scroller 🏆',
  '0 frameworks were forced into this footer',
];

const stack = ['Next.js', 'Tailwind', 'Motion', 'TypeScript'];

export function Footer() {
  const [time, setTime] = useState<string>('');
  const [taglineIdx, setTaglineIdx] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-PH', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(now);
    };
    tick();
    const clockId = setInterval(tick, 1000);

    // rotate tagline every 4s
    const taglineId = setInterval(() => {
      setTaglineIdx((i) => (i + 1) % taglines.length);
    }, 4000);

    return () => {
      clearInterval(clockId);
      clearInterval(taglineId);
    };
  }, []);

  const tagline = taglines[taglineIdx];

  return (
    <footer className='relative border-t-2 border-dashed border-neutral-400/30 mt-12'>
      {/* easter-egg stamp */}
      <div
        aria-hidden
        className='pointer-events-none absolute -top-7 right-4 sm:right-10 rotate-12 select-none'
      >
        <span className='inline-flex items-center gap-1 rounded-md border-2 border-rose-500 text-rose-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-[#fdfaf3] dark:bg-neutral-950'>
          <Sparkles className='w-3 h-3' /> you made it!
        </span>
      </div>

      <div className='max-w-3xl mx-auto px-5 py-10 space-y-6'>
        {/* top row */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
          <div className='space-y-1'>
            <p className='text-sm font-bold text-neutral-700 dark:text-neutral-300'>
              <span className='text-violet-600 dark:text-violet-400'>Val</span>{' '}
              · frontend dev who likes the details
            </p>
            <p className='text-xs text-neutral-500 italic'>
              &ldquo;{tagline}&rdquo;
            </p>
          </div>

          {/* status pills */}
          <div className='flex flex-wrap items-center gap-2'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-dashed border-neutral-400/50 px-2.5 py-1 text-[11px] font-bold text-neutral-600 dark:text-neutral-400'>
              <Clock className='w-3 h-3' />
              <span className='font-mono tabular-nums'>
                {time || '--:--:--'}
              </span>
              <span className='opacity-60'>PH</span>
            </span>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-dashed border-emerald-500/60 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 text-[11px] font-bold'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
              open to work
            </span>
            <a
              href={`mailto:${contact.email}`}
              className='inline-flex items-center gap-1.5 rounded-full border border-dashed border-amber-500/60 text-amber-600 dark:text-amber-400 px-2.5 py-1 text-[11px] font-bold hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors'
            >
              <Coffee className='w-3 h-3' /> buy me coffee
            </a>
          </div>
        </div>

        {/* built with */}
        <div className='flex flex-wrap items-center gap-2 text-[11px] text-neutral-500'>
          <span className='uppercase tracking-widest font-bold opacity-70'>
            built with
          </span>
          {stack.map((s) => (
            <span
              key={s}
              className='inline-block px-2 py-0.5 rounded border border-neutral-400/40 font-mono'
            >
              {s}
            </span>
          ))}
        </div>

        {/* bottom row */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-dashed border-neutral-400/30 text-[11px] text-neutral-500'>
          <p className='inline-flex items-center gap-1.5'>
            crafted with{' '}
            <Heart className='w-3 h-3 fill-rose-500 text-rose-500 animate-pulse' />{' '}
            by Val
          </p>
          <p className='font-mono opacity-70'>
            © {new Date().getFullYear()} ·{' '}
            <a
              href={contact.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 hover:text-violet-600 transition-colors'
            >
              <GithubIcon className='w-3 h-3' />
              {contact.githubHandle}
            </a>
          </p>
          <p className='opacity-60'>
            psst — try the{' '}
            <kbd className='px-1.5 py-0.5 rounded border border-neutral-400/50 font-mono text-[10px]'>
              🌙
            </kbd>{' '}
            toggle
          </p>
        </div>
      </div>
    </footer>
  );
}
