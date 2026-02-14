import { motion } from 'motion/react';
import { Trophy, Shield, Users, Wrench } from 'lucide-react';
import { TerminalHeader } from './glitch-text';

const achievements = [
  {
    icon: Trophy,
    title: 'National Top 10 Animator',
    description: 'IPRISM Awards 2019',
    flag: '--award "IPRISM 2019"'
  },
  {
    icon: Shield,
    title: 'Built Secure Malware Analysis Test Bed',
    description: 'Physical isolated laboratory',
    flag: '--lab "malware-testbed"'
  },
  {
    icon: Users,
    title: 'Attended BSides Indore Conference',
    description: '2023 Security Conference',
    flag: '--event "BSides Indore 2023"'
  },
  {
    icon: Wrench,
    title: 'Designed Autonomous Security Drone',
    description: 'Project Rakshak',
    flag: '--project "Rakshak"'
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-6xl mx-auto">
        <TerminalHeader command="cat ~/achievements.log" />

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black/80 border border-green-400/20 rounded-lg p-5 hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,65,0.1)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-green-400/10 border border-green-400/30 p-2.5 flex-shrink-0 group-hover:bg-green-400/20 transition-all duration-300">
                    <achievement.icon className="w-full h-full text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-200 mb-1 group-hover:text-green-400 transition-colors duration-300 font-mono">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">
                      {achievement.description}
                    </p>
                    <p className="text-[10px] text-green-400/40 font-mono mt-1">
                      $ unlock {achievement.flag}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
