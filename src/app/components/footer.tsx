import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/viveksankath', label: 'github', cmd: 'git clone' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vivek-sankath', label: 'linkedin', cmd: 'open' },
  { icon: Twitter, href: 'https://twitter.com/viveksankath', label: 'twitter', cmd: 'curl' },
  { icon: Mail, href: 'mailto:vivek.sankath@example.com', label: 'email', cmd: 'sendmail' }
];

export function Footer() {
  return (
    <footer className="relative py-12 px-6 mt-20">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Terminal Name */}
          <div className="font-mono text-sm mb-6">
            <span className="text-green-400">vivek@portfolio</span>
            <span className="text-gray-600">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-gray-600">$ </span>
            <span className="text-gray-400">echo "Cyber Security Analyst & Full-Stack Developer"</span>
          </div>

          {/* Social Links as terminal commands */}
          <div className="flex justify-center gap-3 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 bg-black/80 border border-green-400/20 rounded flex items-center gap-2 hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)]"
                aria-label={link.label}
              >
                <span className="text-green-400/40 font-mono text-[10px]">$</span>
                <link.icon className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Copyright — Terminal style */}
          <div className="pt-6 border-t border-green-400/10">
            <p className="text-xs text-gray-600 font-mono">
              <span className="text-green-400/40">$ </span>
              echo "© {new Date().getFullYear()} Vivek Sankath. All rights reserved."
            </p>
            <p className="text-[10px] text-gray-700 mt-2 font-mono">
              <span className="text-green-400/30">// </span>
              Built with React + Tailwind CSS + Motion | Powered by caffeine & curiosity
            </p>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-green-400/30 to-transparent blur-sm" />
        </motion.div>
      </div>
    </footer>
  );
}
