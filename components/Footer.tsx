"use client";

import React from 'react'
import { FaLocationArrow, FaGithub, FaLinkedin, FaInstagram, FaGlobe, FaYoutube, FaCode, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const socialLinks = [
    { href: "https://github.com/Ayush5071", icon: FaGithub, color: "hover:text-gray-300", bg: "hover:bg-gray-500/20" },
    { href: "https://www.linkedin.com/in/ayush-tiwari-84a823281/", icon: FaLinkedin, color: "hover:text-blue-400", bg: "hover:bg-blue-500/20" },
    { href: "https://www.instagram.com/ayushtiwari5071", icon: FaInstagram, color: "hover:text-pink-400", bg: "hover:bg-pink-500/20" },
    { href: "https://quantsprogrammer.vercel.app", icon: FaGlobe, color: "hover:text-green-400", bg: "hover:bg-green-500/20" },
    { href: "https://www.youtube.com/@AYUSHTIWARINITA", icon: FaYoutube, color: "hover:text-red-400", bg: "hover:bg-red-500/20" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  const contactInfo = [
    { icon: FaEnvelope, text: "ayusht9919@gmail.com", href: "mailto:ayusht9919@gmail.com" },
    { icon: FaMapMarkerAlt, text: "India", href: "#" },
  ]

  return (
    <footer className='relative w-full pt-20 pb-10 overflow-hidden' id='contact'>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/50 to-transparent" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Let&apos;s Build Something Amazing
          </motion.h2>
          <motion.p 
            className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8'
            variants={itemVariants}
          >
            Ready to transform your ideas into reality? Let&apos;s collaborate and create innovative solutions that make a difference.
          </motion.p>
          
          {/* Enhanced Get in Touch Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            {/* Primary Contact Button */}
            <motion.a 
              href="mailto:ayusht9919@gmail.com" 
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-none"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 border border-white/20 hover:border-white/40 transition-all duration-300">
                <FaEnvelope className="text-lg" />
                <span>Get In Touch</span>
                <FaRocket className="text-lg group-hover:animate-pulse" />
              </div>
            </motion.a>
            
            {/* Secondary Contact Options */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/ayush-tiwari-84a823281/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-xl group-hover:animate-bounce" />
              </motion.a>
              <motion.a
                href="https://github.com/Ayush5071"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full text-white hover:from-gray-500 hover:to-gray-600 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-xl group-hover:animate-bounce" />
              </motion.a>
              <motion.a
                href="https://quantsprogrammer.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full text-white hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGlobe className="text-xl group-hover:animate-bounce" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Contact Info Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <FaEnvelope className="text-blue-400 text-sm" />
              <span className="text-gray-300 text-sm">ayusht9919@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <FaMapMarkerAlt className="text-emerald-400 text-sm" />
              <span className="text-gray-300 text-sm">Available for Remote Work</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-gray-300 text-sm">Open to Opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <FaCode className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Ayush Tiwari</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about creating innovative web solutions. 
              Specializing in React, Next.js, and modern web technologies to bring ideas to life.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaHeart className="text-red-400" />
              <span>Made with passion in India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400 group-hover:bg-white transition-colors duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a 
                    href={info.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                      <info.icon className="text-sm" />
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <motion.div className="flex items-center gap-4 mb-6 md:mb-0" variants={itemVariants}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target='_blank'
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.color} ${social.bg} hover:border-white/20 hover:scale-110`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-lg" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 text-sm" variants={itemVariants}>
            <p className="text-center md:text-left">
              © 2025 Ayush Tiwari. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <a 
                href="https://quantsprogrammer.vercel.app" 
                target='_blank' 
                rel="noopener noreferrer"
                className='text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium'
              >
                QuantsProgrammer
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
