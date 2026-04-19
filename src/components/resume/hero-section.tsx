'use client';

import { motion } from 'motion/react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';

export function HeroSection() {
  return (
    <section className='relative flex items-center justify-center min-h-dvh px-6 isolate'>
      {/* contained background  uses transforms, never negative positions */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] -translate-x-1/2 -translate-y-1/2' />
        <div className='absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] translate-x-1/3 translate-y-1/3' />
      </div>

      {/* subtle dot grid */}
      <div
        className='absolute inset-0 -z-10 opacity-30 dark:opacity-20'
        style={{
          backgroundImage:
            'radial-gradient(circle, oklch(0.50 0.27 270 / 25%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='visible'
        className='relative text-center max-w-2xl mx-auto w-full'
      >
        {/* Avatar / initials */}
        <motion.div variants={staggerItem} className='mb-8 flex justify-center'>
          <div className='relative'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-xl shadow-primary/25 ring-4 ring-background'>
              <span className='text-2xl font-bold text-primary-foreground select-none'>
                JAV
              </span>
            </div>
            <span className='absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-background'>
              <span className='h-2 w-2 rounded-full bg-white animate-pulse' />
            </span>
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div variants={staggerItem} className='mb-5 flex justify-center'>
          <Badge
            variant='outline'
            className='gap-1.5 px-3 py-1 text-xs font-semibold border-emerald-400/50 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
          >
            <span className='h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse' />
            Open to opportunities
          </Badge>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={staggerItem}
          className='text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-3'
        >
          <span className='text-foreground'>Jose Arnel</span>{' '}
          <span className='text-primary'>Valleser</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={staggerItem}
          className='text-lg sm:text-xl text-muted-foreground font-medium mb-9 tracking-widest uppercase'
        >
          Front-End Developer
        </motion.p>

        {/* Contact chips */}
        <motion.div
          variants={staggerItem}
          className='flex flex-wrap items-center justify-center gap-2 text-sm'
        >
          <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-xs font-medium'>
            <MapPin className='w-3.5 h-3.5 text-primary shrink-0' />
            Taguig City, PH
          </div>
          <a
            href='https://github.com/wndrflgrc'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-xs font-medium hover:border-primary/50 hover:text-primary transition-colors duration-200'
          >
            <GithubIcon className='w-3.5 h-3.5 shrink-0' />
            wndrflgrc
            <ExternalLink className='w-2.5 h-2.5 opacity-50' />
          </a>
          <a
            href='mailto:valleser0502@gmail.com'
            className='flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-xs font-medium hover:border-primary/50 hover:text-primary transition-colors duration-200'
          >
            <Mail className='w-3.5 h-3.5 shrink-0' />
            valleser0502@gmail.com
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={staggerItem}
          className='mt-10 flex items-center justify-center gap-3'
        >
          <a
            href='mailto:valleser0502@gmail.com'
            className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25'
          >
            <Mail className='w-4 h-4' />
            Hire Me
          </a>
          <a
            href='https://github.com/wndrflgrc'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-foreground text-sm font-semibold hover:border-primary/50 transition-colors duration-200'
          >
            <GithubIcon className='w-4 h-4' />
            GitHub
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          variants={fadeInUp}
          className='mt-16 flex flex-col items-center gap-2'
        >
          <motion.div className='w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5'>
            <motion.div
              className='w-1 h-1.5 rounded-full bg-muted-foreground/50'
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
