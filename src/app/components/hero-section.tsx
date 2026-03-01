import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Download, ChevronDown, Terminal } from 'lucide-react';
import { GlitchText } from './glitch-text';

const roles = [
  "Cyber Security Analyst",
  "SOC & Malware Analyst",
  "Ethical Hacker",
  "MERN Stack Developer"
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeWriter = useCallback(() => {
    const current = roles[currentRole];
    if (!isDeleting) {
      if (displayText.length < current.length) {
        setDisplayText(current.substring(0, displayText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(current.substring(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [displayText, currentRole, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [typeWriter, isDeleting]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridScroll 20s linear infinite'
        }}/>
      </div>

      {/* Floating Hex Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {`0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal prompt prefix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-400/60 font-mono text-sm mb-4 flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>root@portfolio:~$</span>
            <span className="text-gray-500">./hello_world</span>
          </motion.div>

          {/* Name with Glitch Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative inline-block">
            <GlitchText
              text="Vivek Sankath"
              className="relative z-10 bg-gradient-to-r from-green-400 via-cyan-400 to-green-300 bg-clip-text text-transparent"
            />
            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-green-400 via-cyan-400 to-green-300 opacity-20" />
          </h1>

          {/* Typewriter Role */}
          <div className="h-12 mb-8 flex items-center justify-center">
            <div className="text-xl md:text-2xl text-green-400 font-mono">
              <span className="text-gray-500">&gt; </span>
              <span className="text-cyan-400">{displayText}</span>
              <motion.span
                className="inline-block w-2.5 h-6 bg-green-400 ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              />
            </div>
          </div>

          {/* Bio as terminal output */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-mono">
              <span className="text-green-400/60">$ </span>
              Cyber Security Analyst with strong foundation in SOC operations, SIEM monitoring, 
              malware analysis, and secure lab environments. Building the future of digital security.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="/resume.pdf" 
              download="Vivek_Sankath_Resume.pdf"
              className="group relative px-8 py-4 bg-green-400/10 border-2 border-green-400 text-green-400 font-bold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                [DOWNLOAD] resume.pdf
              </span>
            </a>

            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-bold font-mono rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:border-cyan-400"
            >
              [VIEW] projects/
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-green-400/60" />
        </motion.div>
      </div>

      <style>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>
  );
}
