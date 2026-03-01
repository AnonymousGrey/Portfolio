import { motion } from 'motion/react';
import { Radio, Bug, Server, ExternalLink, Github } from 'lucide-react';
import { TerminalHeader } from './glitch-text';
import { TerminalCard } from './terminal-card';

const projects = [
  {
    icon: Radio,
    title: 'Rakshak – Autonomous Security Drone',
    status: 'RUNNING',
    statusColor: 'text-green-400',
    dir: '~/projects/rakshak/',
    description: 'Autonomous surveillance drone application with real-time monitoring and control capabilities.',
    tags: ['IoT', 'Drone', 'Mobile App', 'Real-time', 'Surveillance'],
    link: 'https://github.com/AnonymousGrey/Gurdian_Drone_App',
  },
  {
    icon: Bug,
    title: 'Malware Analysis on Test Bed',
    status: 'COMPLETED',
    statusColor: 'text-cyan-400',
    dir: '~/projects/malware-analysis/',
    description: 'Comprehensive malware analysis framework for static and dynamic analysis, behavior monitoring, and threat detection.',
    tags: ['Malware Analysis', 'Forensics', 'Security', 'Dynamic Analysis', 'Detection'],
    link: 'https://github.com/AnonymousGrey/Malware-Analysis-on-Test-Bed',
  },
  {
    icon: Server,
    title: 'Setting Up Test Bed for Malware Analysis',
    status: 'COMPLETED',
    statusColor: 'text-cyan-400',
    dir: '~/projects/testbed-setup/',
    description: 'Physical isolated malware laboratory setup guide with comprehensive documentation for secure network isolation.',
    tags: ['Lab Setup', 'Network Isolation', 'Documentation', 'Security'],
    link: 'https://github.com/AnonymousGrey/Malware-Analysis-on-Test-Bed',
  }
];

export function ProjectsSection() {
  const goToAllProjects = () => {
    window.location.hash = '#all-projects';
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-6xl mx-auto">
        <TerminalHeader command="ls -la ./projects/" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TerminalCard
              key={project.title}
              title={project.dir}
              delay={index * 0.1}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'RUNNING' ? 'bg-green-400 animate-pulse' : 'bg-cyan-400'}`} />
                  <span className={`text-[10px] font-mono font-bold ${project.statusColor}`}>
                    [{project.status}]
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mb-3 rounded bg-green-400/10 border border-green-400/30 p-2.5 group-hover:bg-green-400/20 transition-all duration-300">
                <project.icon className="w-full h-full text-green-400" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-200 mb-2 group-hover:text-green-400 transition-colors duration-300 font-mono">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed mb-4 font-mono">
                <span className="text-green-400/60"># </span>
                {project.description}
              </p>

              {/* Tags as terminal flags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-green-400/5 border border-green-400/20 rounded text-[10px] text-gray-500 font-mono hover:border-green-400/40 hover:text-green-400 transition-all duration-300"
                  >
                    --{tag.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                ))}
              </div>

              {/* View Details */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-green-400/10 border border-green-400/30 rounded text-green-400 text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)]"
              >
                $ open README.md
                <ExternalLink className="w-3 h-3" />
              </a>
            </TerminalCard>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={goToAllProjects}
            className="group px-8 py-4 bg-cyan-400/10 border-2 border-cyan-400 text-cyan-400 font-bold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            [VIEW] more projects --all
          </button>
        </motion.div>
      </div>
    </section>
  );
}