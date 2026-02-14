import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface TerminalCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TerminalCard({ title, children, className = '', delay = 0 }: TerminalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative ${className}`}
    >
      <div className="terminal-card bg-black/80 border border-green-400/20 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.15)]">
        {/* Terminal Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/90 border-b border-green-400/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs font-mono text-gray-500 ml-2 truncate">
            {title}
          </span>
        </div>
        {/* Terminal Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-lg bg-green-400/0 group-hover:bg-green-400/5 -z-10 blur-xl transition-all duration-300" />
    </motion.div>
  );
}
