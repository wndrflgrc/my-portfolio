import Link from 'next/link';
import { Navbar } from '@/components/resume/navbar';
import { HeroSection } from '@/components/resume/hero-section';
import { AboutSection } from '@/components/resume/about-section';
import { ExperienceSection } from '@/components/resume/experience-section';
import { SkillsSection } from '@/components/resume/skills-section';
import { EducationSection } from '@/components/resume/education-section';
import { Footer } from '@/components/resume/footer';
import {
  DesktopLeftSidebar,
  DesktopRightSidebar,
} from '@/components/resume/desktop-sidebars';

export const metadata = {
  title: 'Val · Archive (v1)',
  robots: { index: false, follow: false },
};

export default function V1Archive() {
  return (
    <>
      {/* archive banner */}
      <div className='sticky top-0 z-50 bg-amber-400 text-amber-950 text-xs sm:text-sm font-semibold border-b border-amber-600/40'>
        <div className='max-w-3xl mx-auto px-5 py-2 flex items-center justify-between gap-3'>
          <span className='inline-flex items-center gap-2'>
            📦 <span>You&apos;re viewing the archived v1 portfolio.</span>
          </span>
          <Link
            href='/'
            className='underline underline-offset-2 hover:no-underline whitespace-nowrap'
          >
            ← back to current
          </Link>
        </div>
      </div>

      <Navbar />
      <DesktopLeftSidebar />
      <DesktopRightSidebar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
