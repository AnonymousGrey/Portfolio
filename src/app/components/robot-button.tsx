import { motion } from 'motion/react';

export function RobotButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 cursor-pointer group"
      whileHover="hover"
      initial="initial"
    >
      {/* Robot Container */}
      <motion.div
        className="relative w-16 h-20 flex items-center justify-center"
        variants={{
          initial: { y: 0 },
          hover: { y: -8 }
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg group-hover:bg-green-400/40 transition-all duration-300" />

        {/* SVG Robot */}
        <svg
          viewBox="0 0 60 80"
          className="w-full h-full text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(74,222,128,0.8)] transition-all duration-300"
          fill="currentColor"
        >
          {/* Head */}
          <motion.rect
            x="15"
            y="8"
            width="30"
            height="24"
            rx="3"
            className="text-green-400"
            fill="currentColor"
            animate={{ y: [8, 6, 8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Eyes */}
          <g animate-pulse>
            <rect x="20" y="15" width="6" height="6" rx="1" className="text-green-900" fill="currentColor" />
            <rect x="34" y="15" width="6" height="6" rx="1" className="text-green-900" fill="currentColor" />
          </g>

          {/* Body */}
          <rect x="12" y="34" width="36" height="28" rx="3" className="text-green-400" fill="currentColor" />

          {/* Body details */}
          <rect x="16" y="40" width="8" height="8" rx="1" className="text-green-900" fill="currentColor" />
          <rect x="28" y="40" width="8" height="8" rx="1" className="text-green-900" fill="currentColor" />
          <rect x="40" y="40" width="8" height="8" rx="1" className="text-green-900" fill="currentColor" />

          {/* Left Arm - swinging */}
          <motion.g
            animate={{ rotate: [0, -35, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '15px 40px' }}
          >
            <rect x="8" y="36" width="7" height="22" rx="2" className="text-green-400" fill="currentColor" />
          </motion.g>

          {/* Right Arm - holding sword */}
          <motion.g
            animate={{ rotate: [0, 25, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '45px 40px' }}
          >
            <rect x="45" y="36" width="7" height="22" rx="2" className="text-green-400" fill="currentColor" />
            
            {/* Sword */}
            <g>
              <rect x="48" y="24" width="3" height="16" rx="1" className="text-yellow-400" fill="currentColor" />
              <polygon points="49.5,20 47,25 52,25" className="text-yellow-500" fill="currentColor" />
              <rect x="47" y="39" width="5" height="4" rx="1" className="text-gray-400" fill="currentColor" />
            </g>
          </motion.g>

          {/* Left Leg */}
          <rect x="18" y="64" width="6" height="12" rx="2" className="text-green-500" fill="currentColor" />

          {/* Right Leg */}
          <rect x="36" y="64" width="6" height="12" rx="2" className="text-green-500" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Challenge Label */}
      <motion.div
        className="text-center"
        variants={{
          initial: { opacity: 0.7, scale: 1 },
          hover: { opacity: 1, scale: 1.05 }
        }}
      >
        <p className="text-green-400 text-sm font-mono font-bold tracking-widest">CHALLENGE</p>
        <p className="text-green-400/60 text-xs font-mono">click here</p>
      </motion.div>

      {/* Animated border */}
      <motion.div
        className="absolute -inset-6 border border-green-400/30 rounded-lg opacity-0 group-hover:opacity-100"
        animate={{ boxShadow: ['0 0 0 0 rgba(74,222,128,0.4)', '0 0 20px 0 rgba(74,222,128,0.1)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
}
