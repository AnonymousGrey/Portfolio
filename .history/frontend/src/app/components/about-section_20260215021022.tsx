import { motion } from 'motion/react';
import { Shield, Bug, Code, Network } from 'lucide-react';
import { TerminalHeader } from './glitch-text';
import { TerminalCard } from './terminal-card';

const highlights = [
  { icon: Shield, title: 'SOC Operations', cmd: 'soc_ops.exe' },
  { icon: Bug, title: 'Malware Analysis', cmd: 'malware_lab.exe' },
  { icon: Code, title: 'Ethical Hacking', cmd: 'pentest.sh' },
  { icon: Network, title: 'Full Stack Dev', cmd: 'dev_server.js' }
];

const languages = ['English', 'Hindi', 'Russian', 'Japanese'];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-6xl mx-auto">
        <TerminalHeader command="cat ./about.md" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Profile ASCII Art Card */}
          <TerminalCard title="~/profile/avatar.txt" delay={0.1}>
            <div className="text-center">
              <pre className="text-green-400/80 text-[8px] md:text-[10px] leading-tight font-mono mb-4 inline-block text-left">
{`    ╔══════════════════════╗
    ║                      ║
    ║   ┌──────────────┐   ║
    ║   │  VIVEK        │   ║
    ║   │  SANKATH      │   ║
    ║   │               │   ║
    ║   │  ◉ Cyber Sec  │   ║
    ║   │  ◉ Ethical    │   ║
    ║   │    Hacker     │   ║
    ║   │  ◉ Developer  │   ║
    ║   └──────────────┘   ║
    ║                      ║
    ╚══════════════════════╝`}
              </pre>
              <div className="text-xs text-gray-500 font-mono">
                <span className="text-green-400/60">$</span> whoami → <span className="text-cyan-400">vivek.sankath</span>
              </div>
            </div>
          </TerminalCard>

          {/* Info Cards */}
          <div className="space-y-6">
            <TerminalCard title="~/education/degree.json" delay={0.2}>
              <div className="font-mono text-sm">
                <p className="text-gray-500 mb-2">{"// education"}</p>
                <p className="text-green-400">
                  <span className="text-gray-500">{"{"}</span>
                </p>
                <p className="text-gray-300 ml-4">
                  <span className="text-cyan-400">"degree"</span>: <span className="text-green-400">"Integrated M.Tech CSE"</span>,
                </p>
                <p className="text-gray-300 ml-4">
                  <span className="text-cyan-400">"specialization"</span>: <span className="text-green-400">"Cyber Security"</span>,
                </p>
                <p className="text-gray-300 ml-4">
                  <span className="text-cyan-400">"university"</span>: <span className="text-green-400">"VIT Bhopal University"</span>,
                </p>
                <p className="text-gray-300 ml-4">
                  <span className="text-cyan-400">"gpa"</span>: <span className="text-yellow-400">7.32</span>
                </p>
                <p className="text-green-400">
                  <span className="text-gray-500">{"}"}</span>
                </p>
              </div>
            </TerminalCard>

            <TerminalCard title="~/config/languages.conf" delay={0.3}>
              <div className="font-mono text-sm">
                <p className="text-gray-500 mb-3"># supported locales</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 bg-green-400/10 border border-green-400/30 rounded text-green-400 text-xs font-mono hover:bg-green-400/20 hover:border-green-400/50 transition-all duration-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </TerminalCard>
          </div>
        </div>

        {/* Highlight Cards — Process Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black/80 border border-green-400/20 rounded-lg p-4 text-center hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-green-400/10 border border-green-400/30 p-2.5 group-hover:bg-green-400/20 group-hover:scale-110 transition-all duration-300">
                  <highlight.icon className="w-full h-full text-green-400" />
                </div>
                <p className="text-xs text-gray-400 font-mono group-hover:text-green-400 transition-colors duration-300">
                  {highlight.cmd}
                </p>
                <p className="text-sm text-gray-300 font-bold mt-1">
                  {highlight.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
