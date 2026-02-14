import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const bootLines = [
  { text: 'BIOS v3.14.159 — Vivek Sankath Security Systems', delay: 0 },
  { text: '[OK] Loading kernel modules...', delay: 200 },
  { text: '[OK] Mounting encrypted filesystem...', delay: 400 },
  { text: '[OK] Initializing network interfaces...', delay: 600 },
  { text: '[OK] Starting firewall daemon...', delay: 800 },
  { text: '[OK] Loading threat intelligence feeds...', delay: 1000 },
  { text: '[OK] Decrypting payload...', delay: 1200 },
  { text: '[OK] SIEM monitoring active...', delay: 1400 },
  { text: '[OK] Launching portfolio.exe...', delay: 1600 },
  { text: '', delay: 1800 },
  { text: '> Access granted. Welcome, root.', delay: 2000 },
];

const asciiArt = `
 ██╗   ██╗███████╗
 ██║   ██║██╔════╝
 ██║   ██║███████╗
 ╚██╗ ██╔╝╚════██║
  ╚████╔╝ ███████║
   ╚═══╝  ╚══════╝`;

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showAscii, setShowAscii] = useState(false);

  useEffect(() => {
    // Show ASCII art first
    const asciiTimer = setTimeout(() => setShowAscii(true), 100);

    // Show boot lines one by one
    const timers = bootLines.map((line, index) =>
      setTimeout(() => {
        setVisibleLines(index + 1);
        setProgress(Math.min(100, Math.round(((index + 1) / bootLines.length) * 100)));
      }, line.delay + 500)
    );

    // Complete loading
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 2800);

    return () => {
      clearTimeout(asciiTimer);
      clearTimeout(completeTimer);
      timers.forEach(clearTimeout);
    };
  }, [onLoadingComplete]);

  const progressBar = () => {
    const filled = Math.round(progress / 5);
    const empty = 20 - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${progress}%`;
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="w-full max-w-2xl mx-auto px-8">
        {/* ASCII Art Logo */}
        {showAscii && (
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-green-400 text-xs md:text-sm font-mono mb-6 leading-tight text-center"
          >
            {asciiArt}
          </motion.pre>
        )}

        {/* Terminal Window */}
        <div className="bg-black/90 border border-green-400/30 rounded-lg overflow-hidden">
          {/* Title Bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/90 border-b border-green-400/20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] font-mono text-gray-500 ml-2">system-boot.sh</span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 font-mono text-sm min-h-[280px]">
            {bootLines.slice(0, visibleLines).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`mb-1 ${
                  line.text.startsWith('[OK]')
                    ? 'text-green-400'
                    : line.text.startsWith('>')
                    ? 'text-cyan-400 font-bold'
                    : line.text.startsWith('BIOS')
                    ? 'text-gray-500'
                    : 'text-gray-400'
                }`}
              >
                {line.text}
              </motion.div>
            ))}

            {/* Blinking cursor */}
            {visibleLines < bootLines.length && (
              <span className="terminal-cursor" />
            )}
          </div>

          {/* Progress Bar */}
          <div className="px-4 pb-4">
            <div className="text-green-400/70 font-mono text-xs">
              {progressBar()}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
