"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't initialize cursor on mobile
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add mouse move listener
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        document.removeEventListener('mousemove', updateMousePosition);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Outer glow aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9995]"
        style={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl" />
      </motion.div>

      {/* Mid glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.8 : 0.5,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          rotate: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }
        }}
      >
        <div className="w-15 h-15 border-2 border-gradient-to-r from-emerald-400/60 via-cyan-400/60 to-blue-400/60 rounded-full"
             style={{
               background: 'conic-gradient(from 0deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3))',
               borderRadius: '50%',
               width: '60px',
               height: '60px',
             }} />
      </motion.div>

      {/* Inner trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.9 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <div className="w-10 h-10 border-2 border-cyan-400/80 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm" />
      </motion.div>

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 25,
        }}
      >
        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50" 
             style={{
               boxShadow: '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)',
             }} />
      </motion.div>

      {/* Sparkle effects on hover */}
      {isHovering && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: mousePosition.x - 2,
              y: mousePosition.y - 15,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: mousePosition.x + 12,
              y: mousePosition.y - 8,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: mousePosition.x - 10,
              y: mousePosition.y + 10,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
          </motion.div>
        </>
      )}
    </>
  );
};

export default CustomCursor;
