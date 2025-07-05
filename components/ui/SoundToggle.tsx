"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('soundEnabled');
    if (stored !== null) {
      setIsMuted(stored === 'false');
    }
  }, []);

  const playHoverSound = useCallback(() => {
    if (isMuted || !mounted) return;
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.setValueAtTime(800, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, [isMuted, mounted]);

  const toggleSound = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem('soundEnabled', (!newMuted).toString());
    
    if (!newMuted) {
      playHoverSound();
    }
  };

  useEffect(() => {
    if (!mounted || isMuted) return;

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .cursor-pointer')) {
        playHoverSound();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, [isMuted, mounted]);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed top-6 right-20 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <motion.div
        key={isMuted ? 'muted' : 'unmuted'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-white"
      >
        {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
      </motion.div>
    </motion.button>
  );
};

export default SoundToggle;
