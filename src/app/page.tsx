import { Navbar } from '@/components/resume/navbar';
import { HeroSection } from '@/components/resume/hero-section';
import { AboutSection } from '@/components/resume/about-section';
import { ExperienceSection } from '@/components/resume/experience-section';
import { SkillsSection } from '@/components/resume/skills-section';
import { EducationSection } from '@/components/resume/education-section';
import { ProjectsSection } from '@/components/resume/projects-section';
import { Footer } from '@/components/resume/footer';
import {
  DesktopLeftSidebar,
  DesktopRightSidebar,
} from '@/components/resume/desktop-sidebars';

export default function Home() {
  return (
    <>
      <Navbar />
      <DesktopLeftSidebar />
      <DesktopRightSidebar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        {/* <ProjectsSection /> */}
      </main>
      <Footer />
    </>
  );
}
