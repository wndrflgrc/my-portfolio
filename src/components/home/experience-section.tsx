'use client';

import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { Section } from './shared';
import { experience } from './data';

export function ExperienceSection() {
  return (
    <Section
      kicker='where i build stuff'
      title='experience'
      icon={<Briefcase className='w-4 h-4' />}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className='relative rounded-3xl border-2 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-[6px_6px_0_0_#facc15]'
      >
        <div className='flex flex-wrap items-baseline justify-between gap-2 mb-5'>
          <div className='flex items-center gap-3'>
            <span className='text-2xl'>{experience.emoji}</span>
            <div>
              <h3 className='text-xl font-black'>{experience.title}</h3>
              <p className='text-sm font-bold text-violet-600 dark:text-violet-400'>
                @ {experience.company}
              </p>
            </div>
          </div>
          <span className='inline-flex items-center gap-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-3 py-1 text-xs font-bold'>
            {experience.period}
          </span>
        </div>

        <ul className='space-y-2.5'>
          {experience.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className='flex items-start gap-3 text-sm sm:text-[15px] text-neutral-700 dark:text-neutral-300'
            >
              <span className='mt-1.5 inline-block w-2.5 h-2.5 rotate-45 bg-violet-500 shrink-0' />
              {h}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
