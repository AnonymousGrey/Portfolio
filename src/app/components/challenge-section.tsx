import { motion } from 'motion/react';
import { X } from 'lucide-react';

export function ChallengeSection({ onClose }: { onClose: () => void }) {
  const challenges = [
    {
      id: 1,
      title: 'Capture the Flag',
      difficulty: 'Medium',
      description: 'Find the hidden flag in the network',
      icon: '🚩'
    },
    {
      id: 2,
      title: 'SQL Injection Challenge',
      difficulty: 'Hard',
      description: 'Exploit the vulnerable database query',
      icon: '💾'
    },
    {
      id: 3,
      title: 'Reverse Engineering',
      difficulty: 'Expert',
      description: 'Analyze and understand the obfuscated code',
      icon: '🔍'
    },
    {
      id: 4,
      title: 'Cryptography Puzzle',
      difficulty: 'Hard',
      description: 'Decrypt the encrypted message',
      icon: '🔐'
    },
    {
      id: 5,
      title: 'Malware Analysis',
      difficulty: 'Expert',
      description: 'Identify and analyze the malicious behavior',
      icon: '🦠'
    },
    {
      id: 6,
      title: 'Web Application Hacking',
      difficulty: 'Medium',
      description: 'Find vulnerabilities and exploit them',
      icon: '🌐'
    }
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 bg-black border-2 border-green-400 rounded-lg shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-green-400 hover:text-red-500 hover:bg-green-400/10 rounded-lg transition-all duration-300"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-green-400/10 to-cyan-400/10 border-b border-green-400/30 p-8">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl" />
          </div>
          <div className="relative">
            <h1 className="text-4xl font-bold text-green-400 font-mono mb-2">CHALLENGE ACCEPTED</h1>
            <p className="text-green-400/70 font-mono text-sm">Test your ethical hacking skills</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <motion.p
            className="text-green-400/80 font-mono text-sm mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Welcome to the Challenge Arena! Below are various cybersecurity challenges designed to test your skills in ethical hacking, security analysis, and problem-solving. Each challenge has different difficulty levels and rewards.
          </motion.p>

          {/* Challenges Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.05 }}
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                className="group relative p-6 bg-gradient-to-br from-green-400/5 to-cyan-400/5 border border-green-400/30 rounded-lg hover:border-green-400/60 hover:bg-green-400/10 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-full ${
                      challenge.difficulty === 'Medium'
                        ? 'bg-yellow-400/20 text-yellow-400'
                        : challenge.difficulty === 'Hard'
                        ? 'bg-orange-400/20 text-orange-400'
                        : 'bg-red-400/20 text-red-400'
                    }`}
                  >
                    {challenge.difficulty}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-3">{challenge.icon}</div>

                {/* Challenge Title */}
                <h3 className="text-lg font-bold text-green-400 font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                  {challenge.title}
                </h3>

                {/* Description */}
                <p className="text-green-400/70 text-sm font-mono leading-relaxed mb-4">
                  {challenge.description}
                </p>

                {/* Start Button */}
                <motion.button
                  className="w-full px-4 py-2 bg-green-400/20 border border-green-400/50 text-green-400 font-mono text-sm rounded-lg hover:bg-green-400/40 hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  START &gt;&gt;
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-purple-400/5 to-pink-400/5 border border-purple-400/30 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold text-purple-400 font-mono mb-2">🚀 COMING SOON</h3>
            <p className="text-purple-400/70 font-mono text-sm">
              More advanced challenges including Binary Exploitation, Kernel Debugging, and Network Traffic Analysis are being prepared. Stay tuned!
            </p>
          </motion.div>

          {/* Rules Section */}
          <motion.div
            className="mt-6 p-6 bg-green-400/5 border border-green-400/20 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-bold text-green-400 font-mono mb-3">⚔️ RULES OF ENGAGEMENT</h3>
            <ul className="space-y-2 text-green-400/70 text-sm font-mono">
              <li>• Use only ethical hacking techniques</li>
              <li>• Do not attempt real attacks on production systems</li>
              <li>• Challenge instances are isolated and safe for testing</li>
              <li>• Report any vulnerabilities responsibly</li>
              <li>• Have fun and learn!</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
