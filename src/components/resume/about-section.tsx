'use client';

import { motion } from 'motion/react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/motion';
import { User } from 'lucide-react';

export function AboutSection() {
  return (
    <section id='about' className='py-20 px-6'>
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
              <User className='w-4 h-4 text-primary' />
            </span>
            <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-primary'>
              Profile Summary
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={staggerItem}
            className='relative rounded-2xl border border-border bg-card shadow-sm p-6 sm:p-8 overflow-hidden'
          >
            <div className='absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-t-2xl' />
            <p className='text-muted-foreground leading-[1.85] text-[15px] sm:text-base'>
              Frontend Developer with{' '}
              <span className='font-semibold text-primary'>
                nearly 2 years of experience
              </span>{' '}
              building modern, scalable web applications using{' '}
              <span className='font-semibold text-foreground'>
                React, Next.js, Remix, and Tailwind CSS
              </span>
              , with strong skills in developing responsive, user-focused
              interfaces and integrating REST APIs. Experienced in testing using{' '}
              <span className='font-semibold text-foreground'>
                Playwright and Jest
              </span>
              , containerizing apps with{' '}
              <span className='font-semibold text-foreground'>Docker</span>,
              working with cloud services such as{' '}
              <span className='font-semibold text-foreground'>
                AWS EC2 and Lambda
              </span>
              , and monitoring with{' '}
              <span className='font-semibold text-foreground'>
                Kibana and the ELK Stack
              </span>
              . I also leverage AI tools like{' '}
              <span className='font-semibold text-foreground'>
                GitHub Copilot
              </span>{' '}
              to accelerate development and improve efficiency — though they
              remain just tools; I stay in full control of every decision and
              line of code. Passionate about clean, efficient code and
              thoughtful design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
