import { motion } from 'motion/react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export function GlitchText({ text, className = '', as: Tag = 'span' }: GlitchTextProps) {
  return (
    <Tag className={`glitch-text relative inline-block ${className}`} data-text={text}>
      {text}
    </Tag>
  );
}

interface TerminalHeaderProps {
  command: string;
  className?: string;
}

export function TerminalHeader({ command, className = '' }: TerminalHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center font-mono">
        <span className="text-green-400">root@vivek</span>
        <span className="text-gray-500">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-gray-500">$ </span>
        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          {command}
        </span>
        <motion.span
          className="inline-block w-3 h-8 bg-green-400 ml-2 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        />
      </h2>
    </motion.div>
  );
}
