import { Star } from 'lucide-react';
import { skills } from './data';

export function SkillsMarquee() {
  return (
    <section className='relative py-6 border-y-2 border-dashed border-neutral-400/30 bg-violet-600 text-white overflow-hidden -rotate-1'>
      <div className='flex gap-8 whitespace-nowrap animate-[scroll_30s_linear_infinite] text-2xl font-black uppercase tracking-tight'>
        {[...Array(2)].map((_, i) => (
          <div key={i} className='flex gap-8 shrink-0'>
            {skills.map((s) => (
              <span key={`${i}-${s}`} className='inline-flex items-center gap-8'>
                {s}
                <Star className='w-5 h-5 fill-yellow-300 text-yellow-300' />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
