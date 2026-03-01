import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { AllProjectsSection } from './components/all-projects-section';
import { CertificationsSection } from './components/certifications-section';
import { AchievementsSection } from './components/achievements-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { BackToTop } from './components/back-to-top';
import { LoadingScreen } from './components/loading-screen';
import { CustomCursor } from './components/custom-cursor';
import { CodeRain } from './components/code-rain';
import { ScanlineOverlay } from './components/scanline-overlay';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-[#e0e0e0] overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/15 via-transparent to-transparent -z-10" />
      <CodeRain />
      
      {/* CRT Scanline Overlay */}
      <ScanlineOverlay />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Content */}
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AllProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
