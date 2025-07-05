"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light' | 'auto'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | 'auto';
    if (stored) {
      setTheme(stored);
    }
  }, []);

  const toggleTheme = () => {
    const themes: ('dark' | 'light' | 'auto')[] = ['dark', 'light', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    
    // Apply theme to document
    if (nextTheme === 'auto') {
      document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    }
  };

  if (!mounted) return null;

  const getIcon = () => {
    switch (theme) {
      case 'light': return <FaSun className="w-4 h-4" />;
      case 'dark': return <FaMoon className="w-4 h-4" />;
      case 'auto': return <FaPalette className="w-4 h-4" />;
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-white"
      >
        {getIcon()}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
