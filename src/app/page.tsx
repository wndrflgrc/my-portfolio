import { Background } from '@/components/home/shared';
import { Navbar } from '@/components/home/navbar';
import { HeroSection } from '@/components/home/hero-section';
import { SkillsMarquee } from '@/components/home/skills-marquee';
import { AboutSection } from '@/components/home/about-section';
import { ExperienceSection } from '@/components/home/experience-section';
import { SkillsSection } from '@/components/home/skills-section';
import { EducationSection } from '@/components/home/education-section';
import { CtaSection } from '@/components/home/cta-section';
import { Footer } from '@/components/home/footer';

export default function Home() {
  return (
    <div className='relative min-h-dvh overflow-x-clip bg-[#fdfaf3] dark:bg-neutral-950 text-foreground font-sans'>
      <Background />
      <Navbar />
      <main>
        <HeroSection />
        <SkillsMarquee />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
