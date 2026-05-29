import type { ReactNode } from 'react';

export function Background() {
  return (
    <>
      {/* paper grid */}
      <div
        aria-hidden
        className='pointer-events-none fixed inset-0 -z-10 opacity-[0.18] dark:opacity-[0.08]'
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          color: '#a78bfa',
        }}
      />
      {/* color blobs */}
      <div
        aria-hidden
        className='pointer-events-none fixed -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-700/20'
      />
      <div
        aria-hidden
        className='pointer-events-none fixed top-1/2 -left-40 -z-10 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-700/20'
      />
    </>
  );
}

export function Section({
  kicker,
  title,
  icon,
  children,
}: {
  kicker: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className='px-5 py-16 sm:py-20'>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-7 flex items-center gap-3'>
          <span className='inline-flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600 text-white -rotate-6 shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]'>
            {icon}
          </span>
          <div>
            <p className='text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500'>
              {kicker}
            </p>
            <h2 className='text-2xl sm:text-3xl font-black tracking-tight'>
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export function Chip({
  icon,
  children,
  href,
}: {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  const cls =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-900 text-xs font-bold shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-transform';
  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {icon}
        {children}
      </a>
    );
  }
  return (
    <span className={cls}>
      {icon}
      {children}
    </span>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className='relative inline-block font-bold text-neutral-900 dark:text-white'>
      <span className='relative z-10'>{children}</span>
      <span
        aria-hidden
        className='absolute inset-x-0 bottom-0.5 h-2 bg-yellow-300/70 dark:bg-yellow-400/40 z-0 -rotate-1'
      />
    </span>
  );
}
