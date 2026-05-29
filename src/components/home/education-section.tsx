'use client';

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { Section } from './shared';

export function EducationSection() {
  return (
    <Section
      kicker='the school days'
      title='education'
      icon={<GraduationCap className='w-4 h-4' />}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className='relative rounded-3xl border-2 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-[6px_6px_0_0_#34d399] flex flex-col sm:flex-row sm:items-center gap-5'
      >
        <div className='w-14 h-14 rounded-2xl bg-emerald-400 flex items-center justify-center shrink-0 -rotate-6 shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]'>
          <GraduationCap className='w-7 h-7 text-emerald-950' />
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-black leading-tight'>
            BS Computer Science
          </h3>
          <p className='text-sm font-bold text-violet-600 dark:text-violet-400 mt-0.5'>
            Taguig City University
          </p>
        </div>
        <span className='inline-flex self-start sm:self-auto items-center gap-1 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-3 py-1 text-xs font-bold'>
          class of &apos;24 🎓
        </span>
      </motion.div>
    </Section>
  );
}
