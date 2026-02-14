import { motion } from 'motion/react';
import { GitCommitHorizontal } from 'lucide-react';
import { TerminalHeader } from './glitch-text';

const experiences = [
  {
    hash: 'a3f7c2d',
    company: 'VMSK Retail',
    role: 'IT Infrastructure & Network Administrator',
    period: 'Oct 2022 – Dec 2025',
    branch: 'main',
    achievements: [
      'Designed LAN architecture',
      'Configured routers and switches',
      'Implemented secure internet access',
      'Maintained IT infrastructure'
    ]
  },
  {
    hash: 'b8e1f4a',
    company: 'Cyber Warriors Club VIT Bhopal',
    role: 'Ethical Hacker | Department Lead',
    period: 'Nov 2023 – Dec 2024',
    branch: 'feature/ethical-hacking',
    achievements: [
      'Led Ethical Hacking department',
      'Conducted live hacking demos',
      'Organized workshops',
      'Mentored team members'
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-5xl mx-auto">
        <TerminalHeader command="git log --experience" />

        <div className="relative">
          {/* Git timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-green-400/20 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Git commit dot */}
                <div className="absolute left-[19px] md:left-[23px] top-6 w-5 h-5 rounded-full bg-black border-2 border-green-400 hidden md:flex items-center justify-center z-10">
                  <GitCommitHorizontal className="w-3 h-3 text-green-400" />
                </div>

                <div className="md:ml-16">
                  <div className="bg-black/80 border border-green-400/20 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,65,0.1)]">
                    {/* Commit header */}
                    <div className="px-5 py-3 bg-gray-900/80 border-b border-green-400/10 font-mono text-xs">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="text-yellow-400">commit {exp.hash}</span>
                        <span className="text-gray-600">
                          (<span className="text-cyan-400">{exp.branch}</span>)
                        </span>
                        <span className="text-gray-500">Date: {exp.period}</span>
                      </div>
                    </div>

                    {/* Commit body */}
                    <div className="p-5 font-mono">
                      <h3 className="text-lg font-bold text-green-400 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 text-sm mb-4">
                        @ {exp.company}
                      </p>

                      {/* Diff-style achievements */}
                      <div className="space-y-1.5 border-t border-green-400/10 pt-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.08 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-green-400 font-bold flex-shrink-0">+</span>
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
