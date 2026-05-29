import { Background } from '@/components/home/shared';

/**
 * Loading skeleton shown while the home page is server-rendering.
 * Matches the quirky/neobrutalist look of the real page so there's no
 * jarring transition.
 */
export default function Loading() {
  return (
    <div className='relative min-h-dvh overflow-x-clip bg-[#fdfaf3] dark:bg-neutral-950 text-foreground font-sans'>
      <Background />

      {/* Top bar placeholder */}
      <div className='sticky top-0 z-30 backdrop-blur-md bg-[#fdfaf3]/70 dark:bg-neutral-950/70 border-b border-dashed border-neutral-400/30'>
        <div className='max-w-3xl mx-auto flex items-center justify-between px-5 py-3'>
          <div className='h-3 w-32 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse' />
          <div className='h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse' />
        </div>
      </div>

      {/* Hero placeholder */}
      <section className='px-5 pt-16 pb-24 sm:pt-24'>
        <div className='max-w-3xl mx-auto'>
          {/* speech bubble */}
          <div className='inline-block mb-6 h-9 w-28 rounded-2xl rounded-bl-sm border-2 border-neutral-900 dark:border-neutral-100 bg-neutral-100 dark:bg-neutral-800 animate-pulse shadow-[4px_4px_0_0_rgba(0,0,0,0.9)]' />

          {/* name */}
          <div className='space-y-3'>
            <Bar className='h-14 sm:h-20 w-2/3' />
            <Bar className='h-14 sm:h-20 w-1/2' />
          </div>

          <div className='mt-6 space-y-2'>
            <Bar className='h-4 w-40' />
            <Bar className='h-4 w-5/6' />
            <Bar className='h-4 w-3/4' />
          </div>

          {/* chips */}
          <div className='mt-7 flex flex-wrap gap-2'>
            {[28, 24, 36, 24].map((w, i) => (
              <div
                key={i}
                className='h-7 rounded-full border-2 border-neutral-900 dark:border-neutral-100 bg-neutral-100 dark:bg-neutral-800 animate-pulse'
                style={{ width: `${w * 4}px` }}
              />
            ))}
          </div>

          {/* CTA */}
          <div className='mt-8 flex flex-wrap gap-3'>
            <div className='h-11 w-32 rounded-full bg-neutral-900 dark:bg-neutral-100 animate-pulse shadow-[4px_4px_0_0_#7c3aed]' />
            <div className='h-11 w-40 rounded-full border-2 border-neutral-900 dark:border-neutral-100 bg-neutral-100 dark:bg-neutral-800 animate-pulse' />
          </div>
        </div>
      </section>

      {/* Marquee placeholder */}
      <div className='h-14 -rotate-1 border-y-2 border-dashed border-neutral-400/30 bg-violet-600/80 animate-pulse' />

      {/* Section card placeholders */}
      <div className='max-w-3xl mx-auto px-5 py-16 space-y-12'>
        {[
          { shadow: 'shadow-[6px_6px_0_0_#7c3aed]' },
          { shadow: 'shadow-[6px_6px_0_0_#facc15]' },
          { shadow: 'shadow-[6px_6px_0_0_#34d399]' },
        ].map((card, i) => (
          <div key={i} className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='h-9 w-9 rounded-xl bg-violet-600/70 -rotate-6 shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] animate-pulse' />
              <div className='space-y-1.5'>
                <Bar className='h-2 w-20' />
                <Bar className='h-5 w-40' />
              </div>
            </div>
            <div
              className={`rounded-3xl border-2 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-900 p-6 sm:p-8 ${card.shadow}`}
            >
              <div className='space-y-3'>
                <Bar className='h-3.5 w-full' />
                <Bar className='h-3.5 w-11/12' />
                <Bar className='h-3.5 w-10/12' />
                <Bar className='h-3.5 w-2/3' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <span className='sr-only'>Loading…</span>
    </div>
  );
}

function Bar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse ${className}`}
    />
  );
}
