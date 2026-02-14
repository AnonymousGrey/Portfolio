import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Terminal crosshair cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35,
          mass: 0.3,
        }}
      >
        {/* Horizontal crosshair line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-px bg-[#00ff41] opacity-80" />
        {/* Vertical crosshair line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-px bg-[#00ff41] opacity-80" />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#00ff41] rounded-full shadow-[0_0_6px_#00ff41]" />
      </motion.div>

      {/* Trailing bracket cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.4 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.1,
        }}
      >
        {/* Corner brackets */}
        <div className="w-6 h-6 relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff41]/60" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff41]/60" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff41]/60" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff41]/60" />
        </div>
      </motion.div>
    </>
  );
}
