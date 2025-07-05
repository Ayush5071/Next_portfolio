"use client"
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      
      // Different cursor variants for different elements
      if (target.matches('button, [role="button"]')) {
        setCursorVariant('button');
      } else if (target.matches('a')) {
        setCursorVariant('link');
      } else if (target.matches('input, textarea')) {
        setCursorVariant('input');
      } else {
        setCursorVariant('hover');
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add mouse move listener
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  const getCursorSize = () => {
    switch (cursorVariant) {
      case 'button': return { width: 60, height: 60 };
      case 'link': return { width: 50, height: 50 };
      case 'input': return { width: 30, height: 30 };
      case 'hover': return { width: 40, height: 40 };
      default: return { width: 32, height: 32 };
    }
  };

  const getCursorColor = () => {
    switch (cursorVariant) {
      case 'button': return 'from-emerald-400 to-cyan-400';
      case 'link': return 'from-purple-400 to-pink-400';
      case 'input': return 'from-yellow-400 to-orange-400';
      case 'hover': return 'from-blue-400 to-purple-400';
      default: return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCursorColor()}`}
          animate={{
            scale: isClicking ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      </motion.div>
      
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className={`border-2 border-white/30 rounded-full backdrop-blur-sm`}
          animate={{
            width: getCursorSize().width,
            height: getCursorSize().height,
            borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </motion.div>
      
      {/* Outer glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className={`rounded-full bg-gradient-to-r ${getCursorColor()} opacity-20 blur-xl`}
          animate={{
            width: isHovering ? 80 : 60,
            height: isHovering ? 80 : 60,
            opacity: isHovering ? 0.4 : 0.2,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 35,
          }}
        />
      </motion.div>
      
      {/* Cursor text for links */}
      {cursorVariant === 'link' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9996] text-white text-xs font-medium"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            translateX: '-50%',
            translateY: '-200%',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Click
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
