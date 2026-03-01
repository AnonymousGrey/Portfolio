import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { AllProjectsSection } from './components/all-projects-section';
import { CertificationsSection } from './components/certifications-section';
import { AllCertificationsSection } from './components/all-certifications-section';
import { AchievementsSection } from './components/achievements-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { BackToTop } from './components/back-to-top';
import { LoadingScreen } from './components/loading-screen';
import { CustomCursor } from './components/custom-cursor';
import { CodeRain } from './components/code-rain';
import { ScanlineOverlay } from './components/scanline-overlay';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'all-projects' | 'all-certs'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#all-projects') {
        setCurrentPage('all-projects');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#all-certs') {
        setCurrentPage('all-certs');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    if (window.location.hash === '#all-projects') {
      setCurrentPage('all-projects');
    } else if (window.location.hash === '#all-certs') {
      setCurrentPage('all-certs');
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  if (currentPage === 'all-projects') {
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
        
        {/* Back Button */}
        <button
          onClick={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          className="fixed top-4 left-4 z-50 px-4 py-2 bg-green-400/10 border border-green-400/30 text-green-400 font-mono text-sm rounded-lg hover:bg-green-400/20 hover:border-green-400/50 transition-all duration-300"
        >
          ← back
        </button>

        {/* All Projects Section */}
        <AllProjectsSection />
        
        {/* Footer */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'all-certs') {
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
        
        {/* Back Button */}
        <button
          onClick={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          className="fixed top-4 left-4 z-50 px-4 py-2 bg-green-400/10 border border-green-400/30 text-green-400 font-mono text-sm rounded-lg hover:bg-green-400/20 hover:border-green-400/50 transition-all duration-300"
        >
          ← back
        </button>

        {/* All Certifications Section */}
        <AllCertificationsSection />
        
        {/* Footer */}
        <Footer />
      </div>
    );
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
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
