import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { id: 'hero', label: '~/', cmd: 'home' },
  { id: 'about', label: './about', cmd: 'about' },
  { id: 'skills', label: './skills', cmd: 'skills' },
  { id: 'experience', label: './exp', cmd: 'experience' },
  { id: 'projects', label: './projects', cmd: 'projects' },
  { id: 'certifications', label: './certs', cmd: 'certs' },
  { id: 'contact', label: './contact', cmd: 'contact' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation — Terminal Command Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-black/90 border border-green-400/30 rounded-lg px-2 py-1.5 shadow-[0_0_20px_rgba(0,255,65,0.1)]">
          <div className="flex items-center gap-1">
            <Terminal className="w-4 h-4 text-green-400/60 mx-2" />
            <span className="text-green-400/40 font-mono text-xs mr-1">$</span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded font-mono text-xs transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-green-400/20 text-green-400 border border-green-400/40 shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'text-gray-500 hover:text-green-400 hover:bg-green-400/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 w-11 h-11 bg-black/90 border border-green-400/30 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:border-green-400/60 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-green-400" />
        ) : (
          <Menu className="w-5 h-5 text-green-400" />
        )}
      </motion.button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed top-18 right-4 z-40 bg-black/95 border border-green-400/30 rounded-lg p-3 shadow-[0_0_30px_rgba(0,255,65,0.15)]"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-1.5 px-2 pb-2 mb-2 border-b border-green-400/20">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="text-[10px] font-mono text-gray-600 ml-2">nav.sh</span>
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded font-mono text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                    : 'text-gray-500 hover:text-green-400 hover:bg-green-400/5'
                }`}
              >
                <span className="text-green-400/40">$</span>
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
