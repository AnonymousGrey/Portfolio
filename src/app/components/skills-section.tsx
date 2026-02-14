import { motion } from 'motion/react';
import { Shield, Network, Code, Brain } from 'lucide-react';
import { TerminalHeader } from './glitch-text';
import { TerminalCard } from './terminal-card';

const skillCategories = [
  {
    icon: Shield,
    title: 'Cyber Security & SOC',
    process: 'cybersec.exe',
    pid: '1337',
    skills: [
      { name: 'Computer Forensics', level: 85 },
      { name: 'SIEM', level: 90 },
      { name: 'Log Analysis', level: 88 },
      { name: 'Incident Response', level: 75 },
      { name: 'Malware Analysis', level: 92 },
      { name: 'Ethical Hacking', level: 88 }
    ]
  },
  {
    icon: Network,
    title: 'Networking & System',
    process: 'netmon.exe',
    pid: '2049',
    skills: [
      { name: 'TCP/IP', level: 90 },
      { name: 'Network Monitoring', level: 85 },
      { name: 'Linux & Windows Admin', level: 82 },
      { name: 'Network Security', level: 88 }
    ]
  },
  {
    icon: Code,
    title: 'Programming & Development',
    process: 'compiler.exe',
    pid: '3072',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'C++', level: 75 },
      { name: 'Java', level: 72 },
      { name: 'MERN Stack', level: 80 },
      { name: 'Web App Dev', level: 82 }
    ]
  },
  {
    icon: Brain,
    title: 'Soft Skills',
    process: 'brain.exe',
    pid: '4096',
    skills: [
      { name: 'Analytical Thinking', level: 92 },
      { name: 'Leadership', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Technical Writing', level: 80 }
    ]
  }
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const filled = Math.round(level / 5);
  const empty = 20 - filled;
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-3 text-xs font-mono group"
    >
      <span className="text-gray-400 w-40 truncate group-hover:text-green-400 transition-colors">{name}</span>
      <span className="text-green-400/70">
        {'█'.repeat(filled)}
        <span className="text-gray-700">{'░'.repeat(empty)}</span>
      </span>
      <span className="text-cyan-400 w-10 text-right">{level}%</span>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-6xl mx-auto">
        <TerminalHeader command="htop --skills" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <TerminalCard
              key={category.title}
              title={`[PID ${category.pid}] ${category.process}`}
              delay={index * 0.1}
            >
              {/* Process Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-green-400/10">
                <div className="w-10 h-10 rounded bg-green-400/10 border border-green-400/30 p-2 group-hover:bg-green-400/20 transition-all duration-300">
                  <category.icon className="w-full h-full text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-200 group-hover:text-green-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-[10px] text-gray-600 font-mono">STATUS: <span className="text-green-400">RUNNING</span></p>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </TerminalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
