'use client';

import { motion } from 'motion/react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/motion';
import { Briefcase } from 'lucide-react';

const experience = {
  title: 'Frontend Developer',
  company: 'DoWinn Group',
  period: 'June 2024 - Present',
  highlights: [
    'Developed and maintained web applications using React, Next.js, and Tailwind CSS',
    'Built responsive UI components for internal and customer-facing platforms',
    'Integrated REST APIs and handled client-side state management',
    'Improved performance and usability of existing features',
    'Wrote and maintained tests using Jest and Playwright',
    'Worked with AWS EC2 and Lambda for deployment and testing',
    'Created dashboards and monitored data using Elasticsearch and Kibana',
  ],
};

export function ExperienceSection() {
  return (
    <section id='experience' className='py-20 px-6'>
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
              <Briefcase className='w-4 h-4 text-primary' />
            </span>
            <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-primary'>
              Experience
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={staggerItem}
            className='relative rounded-2xl border border-border bg-card shadow-sm overflow-hidden'
          >
            <div className='absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent' />

            <div className='p-6 sm:p-8'>
              {/* Header row */}
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground'>
                    {experience.title}
                  </h3>
                  <p className='text-primary font-semibold text-sm mt-0.5'>
                    {/* {experience.company} */}
                  </p>
                </div>
                <span className='inline-flex self-start sm:self-auto items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap'>
                  {experience.period}
                </span>
              </div>

              {/* Bullets */}
              <motion.ul
                variants={staggerContainer}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='space-y-3'
              >
                {experience.highlights.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    className='flex items-start gap-3 text-muted-foreground text-sm leading-relaxed'
                  >
                    <span className='mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0' />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
