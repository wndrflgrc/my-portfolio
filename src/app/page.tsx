import { Navbar } from '@/components/resume/navbar';
import { HeroSection } from '@/components/resume/hero-section';
import { AboutSection } from '@/components/resume/about-section';
import { ExperienceSection } from '@/components/resume/experience-section';
import { SkillsSection } from '@/components/resume/skills-section';
import { EducationSection } from '@/components/resume/education-section';
import { Footer } from '@/components/resume/footer';

export default function Home() {
  return (
    <>
      <Navbar />
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
