"use client";

import React from "react";
import { projects } from "@/data/index";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";

const RecentProjects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const gradientColors = [
    "from-slate-900/90 via-blue-900/80 to-purple-900/80",
    "from-slate-900/90 via-purple-900/80 to-pink-900/80",
    "from-slate-900/90 via-green-900/80 to-cyan-900/80",
    "from-slate-900/90 via-orange-900/80 to-red-900/80",
    "from-slate-900/90 via-cyan-900/80 to-blue-900/80",
    "from-slate-900/90 via-pink-900/80 to-purple-900/80",
  ];

  const accentColors = [
    { bg: "from-blue-500/10 to-purple-500/10", border: "border-blue-400/30", text: "text-blue-200" },
    { bg: "from-purple-500/10 to-pink-500/10", border: "border-purple-400/30", text: "text-purple-200" },
    { bg: "from-green-500/10 to-cyan-500/10", border: "border-green-400/30", text: "text-green-200" },
    { bg: "from-orange-500/10 to-red-500/10", border: "border-orange-400/30", text: "text-orange-200" },
    { bg: "from-cyan-500/10 to-blue-500/10", border: "border-cyan-400/30", text: "text-cyan-200" },
    { bg: "from-pink-500/10 to-purple-500/10", border: "border-pink-400/30", text: "text-pink-200" },
  ];

  return (
    <section className="min-h-screen w-full py-20 relative" id="projects">
      {/* Background with floating orbs only */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 right-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some of my recent projects. Each project is unique and comes with its own set of challenges and learnings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorIndex = index % gradientColors.length;
            const accent = accentColors[colorIndex];
            
            return (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ y: -10 }}
              >
                <div className={`relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br ${gradientColors[colorIndex]} backdrop-blur-xl shadow-2xl min-h-[400px] flex flex-col`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accent.bg} rounded-full blur-2xl -translate-y-16 translate-x-16`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${accent.bg} border ${accent.border}`}>
                        <FaCode className={`text-2xl ${accent.text}`} />
                      </div>
                      <div className="flex gap-3">
                        {project.link !== "#" && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all ${accent.text}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="text-lg" />
                          </motion.a>
                        )}
                        {project.live !== "#" && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all ${accent.text}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="text-lg" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                      {project.des}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1.5 rounded-full text-xs border font-medium transition-all hover:scale-105 ${accent.text} bg-white/10 border-white/20`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 mt-auto">
                      {project.link !== "#" && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${accent.bg} border ${accent.border} text-white text-sm font-medium hover:shadow-lg transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaGithub className="text-base" />
                          Code
                        </motion.a>
                      )}
                      {project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${accent.bg} border ${accent.border} text-white text-sm font-medium hover:shadow-lg transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaRocket className="text-base" />
                          Live
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
