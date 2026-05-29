'use client';

import { motion } from 'motion/react';
import { Rocket, Coffee } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';
import { Section } from './shared';
import { contact } from './data';

export function CtaSection() {
  return (
    <Section
      kicker='still here?'
      title="let's build something"
      icon={<Rocket className='w-4 h-4' />}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='relative rounded-3xl bg-linear-to-br from-violet-600 via-fuchsia-500 to-amber-400 p-0.5 shadow-[8px_8px_0_0_rgba(0,0,0,0.9)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.15)]'
      >
        <div className='rounded-[22px] bg-white dark:bg-neutral-900 p-8 sm:p-10 text-center'>
          <p className='text-2xl sm:text-3xl font-black mb-3'>
            got a cool idea?{' '}
            <span className='inline-block animate-pulse'>👀</span>
          </p>
          <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto'>
            I&apos;m always up for a chat about frontend, side projects, or the
            best coffee shops in Taguig.
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            <a
              href={`mailto:${contact.email}`}
              className='inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 text-sm font-bold border-2 border-neutral-900 dark:border-neutral-100 hover:scale-105 transition-transform'
            >
              <Coffee className='w-4 h-4' />
              grab a virtual coffee
            </a>
            <a
              href={contact.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border-2 border-neutral-900 dark:border-neutral-100 px-5 py-2.5 text-sm font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
            >
              <GithubIcon className='w-4 h-4' />
              see my repos
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
