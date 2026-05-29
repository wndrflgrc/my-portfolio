'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Hand, ArrowDown } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';
import { Chip } from './shared';
import { contact } from './data';

export function HeroSection() {
  return (
    <section id='hero' className='relative px-5 pt-16 pb-24 sm:pt-24'>
      <div className='max-w-3xl mx-auto'>
        {/* speech bubble */}
        <motion.div
          initial={{ opacity: 0, y: -10, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.5 }}
          className='inline-flex items-center gap-2 mb-6 rounded-2xl rounded-bl-sm border-2 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-100 text-neutral-900 px-4 py-2 text-sm font-medium shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.15)]'
        >
          <Hand className='w-4 h-4 text-amber-500' />
          hi! i&apos;m
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='font-black tracking-tight leading-[0.95] text-6xl sm:text-7xl md:text-8xl'
        >
          <span className='block'>Jose Arnel</span>
          <span className='relative inline-block'>
            <span className='relative z-10 text-violet-600 dark:text-violet-400'>
              Valleser
            </span>
            <span
              aria-hidden
              className='absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-yellow-300/80 dark:bg-yellow-400/60 z-0 -rotate-1'
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className='mt-4 text-lg text-neutral-700 dark:text-neutral-300'
        >
          but everyone calls me{' '}
          <span className='inline-block rounded-md bg-violet-600 text-white px-2 py-0.5 font-bold -rotate-2 shadow-sm'>
            Val
          </span>{' '}
          ✌️
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className='mt-3 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400'
        >
          Front-end developer who turns coffee into{' '}
          <span className='font-mono text-violet-600 dark:text-violet-400'>
            &lt;pixels /&gt;
          </span>
          . I build fast, friendly web apps with React, Next.js and a healthy
          obsession for the small details.
        </motion.p>

        {/* chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className='mt-7 flex flex-wrap gap-2'
        >
          <Chip icon={<MapPin className='w-3.5 h-3.5' />}>
            {contact.location}
          </Chip>
          <Chip
            icon={<GithubIcon className='w-3.5 h-3.5' />}
            href={contact.github}
          >
            {contact.githubHandle}
          </Chip>
          <Chip
            icon={<Mail className='w-3.5 h-3.5' />}
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </Chip>
          <Chip
            icon={
              <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
            }
          >
            open to work
          </Chip>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className='mt-8 flex flex-wrap items-center gap-3'
        >
          <a
            href={`mailto:${contact.email}`}
            className='group inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 text-sm font-bold border-2 border-neutral-900 dark:border-neutral-100 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9)] dark:hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.2)] transition-all'
          >
            <Mail className='w-4 h-4' />
            say hi
            <span className='transition-transform group-hover:translate-x-0.5'>
              →
            </span>
          </a>
          <a
            href={contact.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-full border-2 border-neutral-900 dark:border-neutral-100 px-5 py-3 text-sm font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
          >
            <GithubIcon className='w-4 h-4' />
            peek at my code
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className='mt-16 flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500'
        >
          <ArrowDown className='w-3 h-3 animate-bounce' />
          scroll for the good stuff
        </motion.div>
      </div>
    </section>
  );
}
