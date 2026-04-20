'use client';

import { motion } from 'motion/react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';

export function Footer() {
  return (
    <footer className='border-t border-border py-8 px-6 mt-12'>
      <div className='max-w-3xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className='flex flex-col sm:flex-row items-center justify-between gap-4'
        >
          <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
            Built with{' '}
            <Heart className='w-3 h-3 text-rose-500 fill-rose-500 inline' /> by
            Val
          </p>

          <div className='flex items-center gap-1'>
            <a
              href='https://github.com/wndrflgrc'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
              aria-label='GitHub'
            >
              <GithubIcon className='w-4 h-4' />
            </a>
            <a
              href='mailto:valleser0502@gmail.com'
              className='p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
              aria-label='Email'
            >
              <Mail className='w-4 h-4' />
            </a>
          </div>

          <p className='text-[11px] text-muted-foreground/50'>
            {' '}
            {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
