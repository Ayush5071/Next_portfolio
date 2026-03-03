"use client";

import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe, FaYoutube, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/Ayush5071", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ayush-tiwari-84a823281/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/ayushtiwari5071", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.youtube.com/@AYUSHTIWARINITA", icon: FaYoutube, label: "YouTube" },
    { href: "https://prepsutra.tech", icon: FaGlobe, label: "PrepSutra" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#personal-projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="w-full bg-white border-t border-[#E5E5E5] pt-24 pb-12" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand & Mission - Takes up more space on large screens */}
          <div className="md:col-span-5 lg:col-span-6">
            <h2 className="font-serif text-3xl font-bold text-[#111111] tracking-tighter mb-6">
              AT.
            </h2>
            <p className="text-base text-[#666666] leading-relaxed font-sans max-w-sm mb-8">
              Full-stack developer passionate about creating innovative web solutions.
              Specializing in React, Next.js, and modern web architectures.
            </p>
            <a
              href="mailto:ayusht9919@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#111111] text-white text-sm font-medium tracking-wide uppercase hover:bg-black transition-colors"
            >
              <FaEnvelope className="text-sm" />
              Get In Touch
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-[#111111] mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[15px] font-sans text-[#666666] hover:text-[#111111] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-[#111111] mb-6">
              Socials
            </h3>
            <ul className="space-y-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[15px] font-sans text-[#666666] hover:text-[#111111] transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#111111] transition-colors">
                      <social.icon className="text-sm" />
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#F0F0F0]">
          <p className="text-sm text-[#999999] font-sans mb-4 md:mb-0">
            © {new Date().getFullYear()} Ayush Tiwari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
