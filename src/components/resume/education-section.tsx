'use client';

import { motion } from 'motion/react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/motion';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section id='education' className='py-20 px-6'>
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
              <GraduationCap className='w-4 h-4 text-primary' />
            </span>
            <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-primary'>
              Education
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={staggerItem}
            className='relative rounded-2xl border border-border bg-card shadow-sm p-6 sm:p-8 overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-300'
          >
            <div className='absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent' />
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
              <div className='flex items-start gap-4'>
                <div className='w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0'>
                  <GraduationCap className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-bold text-foreground text-base leading-snug'>
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className='text-primary font-semibold text-sm mt-0.5'>
                    Taguig City University
                  </p>
                </div>
              </div>
              <span className='inline-flex self-start sm:self-auto items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap'>
                Class of 2024
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
