'use client';

import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { Section } from './shared';
import { skills, stickyColors } from './data';

export function SkillsSection() {
  return (
    <Section
      kicker='my toolbox'
      title='skills'
      icon={<Code2 className='w-4 h-4' />}
    >
      <div className='flex flex-wrap gap-3 sm:gap-4'>
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: (i % 5) - 2,
            }}
            whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className={`inline-block px-4 py-2.5 text-sm font-bold rounded-md shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] cursor-default ${
              stickyColors[i % stickyColors.length]
            }`}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
