"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-4 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-20 w-28 h-28 sm:w-40 sm:h-40 bg-purple-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-emerald-300 bg-emerald-500/20 rounded-full border border-emerald-500/30 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Available for opportunities
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white mb-1 sm:mb-2">Hi, I&apos;m</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Ayush Tiwari
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 sm:mb-8 font-light max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft exceptional digital experiences through innovative design and robust development. 
            Passionate about creating solutions that make a meaningful impact.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Python'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white/10 text-gray-300 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-12 sm:mb-16 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="mailto:ayusht9919@gmail.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-full font-semibold border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero;
 