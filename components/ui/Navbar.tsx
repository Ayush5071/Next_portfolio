"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '@/data';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    if (link.startsWith('/')) {
      router.push(link);
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E5E5E5] py-3'
          : 'bg-transparent py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-serif font-bold text-[#111111] tracking-tighter">
            AT.
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.link)}
                className="text-sm font-sans font-medium text-[#666666] hover:text-[#111111] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#111111] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#contact"
              className="text-sm font-sans font-medium text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#666666] hover:border-[#666666] transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#111111] p-2 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E5E5E5] shadow-xl shadow-black/5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.link)}
                    className="text-left text-lg font-serif text-[#111111]"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 mt-2 border-t border-[#E5E5E5]">
                  <a
                    href="#contact"
                    className="text-lg font-serif text-[#111111]"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
