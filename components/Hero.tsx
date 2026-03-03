"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 section-spacing">
      {/* Main Content */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left: Text Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.p
              className="subtitle-sans mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Full Stack Developer & Problem Solver
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="font-serif text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-[#111111] leading-[1.1] tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Ayush
              <br />
              Tiwari.
            </motion.h1>

            {/* Mobile: Profile Image below heading */}
            <div className="flex lg:hidden mb-8 justify-center">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-[#E5E5E5] bg-white shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src="/ayush.jpg" alt="Ayush Tiwari" width={256} height={256} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-[#666666] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I build sophisticated, scalable web applications with a focus on seamless user experiences, modern backend architectures, and elegant problem-solving.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'GenAI', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-[13px] font-medium tracking-wide bg-[#FAFAFA] text-[#111111] border border-[#E5E5E5] rounded-full hover:border-[#111111] hover:bg-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#personal-projects" className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white text-sm tracking-widest uppercase hover:bg-black transition-colors rounded-none font-medium flex items-center justify-center gap-2">
                View Work
              </Link>
              <Link href="/Ayush_Tiwari_Resume.pdf" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#111111] border border-[#111111] text-sm tracking-widest uppercase hover:bg-[#F5F5F0] transition-colors rounded-none font-medium flex items-center justify-center gap-2">
                Resume
              </Link>
            </motion.div>

          </div>

          {/* Right: Profile Image (Desktop) */}
          <motion.div
            className="hidden lg:block relative flex-1 max-w-[500px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#E5E5E5] bg-white p-2 shadow-2xl shadow-black/5 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="relative w-full h-full overflow-hidden rounded">
                <Image
                  src="/ayush.jpg"
                  alt="Ayush Tiwari"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
