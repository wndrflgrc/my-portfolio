'use client';

import { motion } from 'motion/react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/motion';
import { FolderOpen, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';

const projects = [
  {
    title: 'Internal Dashboard',
    description:
      'A monitoring and analytics dashboard built with Next.js and the ELK Stack, used internally to track application health and data insights using Kibana visualisations.',
    tags: ['Next.js', 'Elasticsearch', 'Kibana', 'Tailwind CSS'],
    status: 'Work Project',
  },
  {
    title: 'Automated Test Suite',
    description:
      'End-to-end test coverage for a customer-facing platform using Playwright with BDD scenarios, integrated into CI pipelines for continuous quality assurance.',
    tags: ['Playwright', 'Jest', 'BDD', 'CI/CD'],
    status: 'Work Project',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very site — a personal resume and portfolio built with Next.js 15, Tailwind CSS v4, Framer Motion, and shadcn/ui. Fully responsive with light/dark mode support.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    status: 'Open Source',
    githubUrl: 'https://github.com/wndrflgrc',
  },
];

export function ProjectsSection() {
  return (
    <section id='projects' className='py-20 px-6'>
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
              <FolderOpen className='w-4 h-4 text-primary' />
            </span>
            <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-primary'>
              Projects
            </h2>
          </motion.div>

          {/* Cards */}
          <div className='grid grid-cols-1 gap-4'>
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className='relative rounded-2xl border border-border bg-card shadow-sm p-6 overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-300 group'
              >
                <div className='absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-primary via-primary/40 to-transparent' />

                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3'>
                  <div className='flex items-center gap-2'>
                    <h3 className='font-bold text-foreground text-base'>
                      {project.title}
                    </h3>
                    <span className='inline-flex items-center px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary border border-primary/20'>
                      {project.status}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 shrink-0'>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
                        aria-label='View on GitHub'
                      >
                        <GithubIcon className='w-4 h-4' />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
                        aria-label='Visit project'
                      >
                        <ExternalLink className='w-4 h-4' />
                      </a>
                    )}
                  </div>
                </div>

                <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1.5'>
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className='inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div variants={staggerItem}>
            <a
              href='https://github.com/wndrflgrc'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200'
            >
              <GithubIcon className='w-4 h-4' />
              See more on GitHub
              <ExternalLink className='w-3.5 h-3.5 opacity-60' />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
