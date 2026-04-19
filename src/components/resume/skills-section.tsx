'use client';

import { motion } from 'motion/react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/motion';
import { Code2 } from 'lucide-react';

const groups = [
  {
    label: 'Frontend',
    colorLight: 'text-violet-600',
    colorDark: 'dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    border: 'border-violet-200 dark:border-violet-800/50',
    skills: [
      'React.js',
      'Next.js',
      'Remix',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
    ],
  },
  {
    label: 'Testing',
    colorLight: 'text-emerald-600',
    colorDark: 'dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    skills: ['Playwright', 'Jest', 'BDD'],
  },
  {
    label: 'Tools & Technologies',
    colorLight: 'text-amber-600',
    colorDark: 'dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/40',
    border: 'border-amber-200 dark:border-amber-800/50',
    skills: [
      'Git / GitHub',
      'REST APIs',
      'ELK Stack',
      'Kibana',
      'Sentry',
      'AWS EC2',
      'AWS Lambda',
      'SEO',
    ],
  },
  {
    label: 'Soft Skills',
    colorLight: 'text-rose-600',
    colorDark: 'dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-950/40',
    border: 'border-rose-200 dark:border-rose-800/50',
    skills: [
      'Sense of Design',
      'Component Architecture',
      'SEO & AI SEO Awareness',
    ],
  },
];

export function SkillsSection() {
  return (
    <section id='skills' className='py-20 px-6'>
      <div className='max-w-3xl mx-auto'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
          className='space-y-6'
        >
          {/* Section label */}
          <motion.div variants={fadeInUp} className='flex items-center gap-3'>
            <span className='flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 shrink-0'>
              <Code2 className='w-4 h-4 text-primary' />
            </span>
            <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-primary'>
              Skills
            </h2>
          </motion.div>

          {/* Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {groups.map((group, gi) => (
              <motion.div
                key={gi}
                variants={staggerItem}
                className='rounded-2xl border border-border bg-card shadow-sm p-5 relative overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-300'
              >
                <div className='absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-primary/40 to-transparent' />
                <h3
                  className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${group.colorLight} ${group.colorDark}`}
                >
                  {group.label}
                </h3>
                <div className='flex flex-wrap gap-1.5'>
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 20,
                      }}
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border cursor-default ${group.bg} ${group.border} ${group.colorLight} ${group.colorDark}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
