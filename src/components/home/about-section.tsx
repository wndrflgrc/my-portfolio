'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Section, Highlight } from './shared';
import { funFacts } from './data';

export function AboutSection() {
  return (
    <Section
      kicker='the about'
      title='a quick intro'
      icon={<Sparkles className='w-4 h-4' />}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className='relative rounded-3xl border-2 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-[6px_6px_0_0_#7c3aed]'
      >
        <p className='text-[15px] sm:text-base leading-[1.85] text-neutral-700 dark:text-neutral-300'>
          I&apos;m a frontend dev with <Highlight>nearly 2 years</Highlight> of
          experience shipping modern web apps with{' '}
          <Highlight>React, Next.js, Remix and Tailwind</Highlight>. I love
          writing tests that actually catch things (
          <Highlight>Playwright + Jest</Highlight>), wrangling{' '}
          <Highlight>Docker</Highlight> containers, poking around{' '}
          <Highlight>AWS EC2 / Lambda</Highlight>, and turning logs into stories
          with <Highlight>Kibana + ELK</Highlight>. I use AI tools like{' '}
          <Highlight>Copilot</Highlight> to move faster — but I&apos;m still the
          one driving. 🚗
        </p>

        <div className='mt-6 grid grid-cols-2 gap-3'>
          {funFacts.map((f, i) => (
            <div
              key={i}
              className='flex items-center gap-2 rounded-xl border border-dashed border-neutral-400/50 px-3 py-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400'
            >
              <span className='text-base'>{f.emoji}</span>
              {f.text}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
