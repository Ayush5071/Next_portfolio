"use client"
import React from 'react'
import { FaGraduationCap, FaCode, FaTools, FaHeart, FaTrophy } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Grid = () => {
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
  }

  return (
    <section className="min-h-screen w-full py-20 relative" id="about">
      {/* Background with floating orbs only */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-32 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
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
            Education & Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            My academic background and technical expertise that drive innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Education Card - spans 2 columns */}
          <motion.div
            className="relative group cursor-pointer md:col-span-2 xl:col-span-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-black/90 backdrop-blur-xl shadow-2xl">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -translate-y-16 translate-x-16" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                    <FaGraduationCap className="text-2xl text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Academic Background</h4>
                    <div className="space-y-4">
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400" />
                        <div>
                          <div className="font-semibold text-white">Bachelor of Technology</div>
                          <div className="text-gray-300">Electronics and Communication Engineering</div>
                          <div className="text-sm text-gray-400">2021 - 2025</div>
                        </div>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400" />
                        <div>
                          <div className="font-semibold text-white">Higher Secondary</div>
                          <div className="text-gray-300">Science Stream</div>
                          <div className="text-sm text-gray-400">2019 - 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Core Subjects</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {["Data Structures & Algorithms", "Database Management", "Operating Systems", "Computer Networks", "Software Engineering", "Machine Learning"].map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span className="text-gray-300 text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Frontend & Backend Card - now spans 2 columns */}
          <motion.div
            className="relative group cursor-pointer md:col-span-2 xl:col-span-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br from-slate-800/90 via-purple-900/80 to-blue-900/80 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-2xl -translate-y-16 translate-x-16" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 border border-purple-400/30">
                    <FaCode className="text-2xl text-purple-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Development Skills</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-200 mb-3">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "React", color: "text-white bg-white/10 border-white/20" },
                        { name: "Next.js", color: "text-white bg-white/10 border-white/20" },
                        { name: "TypeScript", color: "text-blue-200 bg-blue-500/15 border-blue-400/25" },
                        { name: "Tailwind", color: "text-cyan-200 bg-cyan-500/15 border-cyan-400/25" }
                      ].map((skill, idx) => (
                        <span key={idx} className={`px-3 py-1.5 rounded-full text-xs border font-medium hover:scale-105 transition-all ${skill.color}`}>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-200 mb-3">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Node.js", color: "text-green-200 bg-green-500/15 border-green-400/25" },
                        { name: "Express", color: "text-gray-200 bg-gray-500/15 border-gray-400/25" },
                        { name: "MongoDB", color: "text-green-200 bg-green-500/15 border-green-400/25" },
                        { name: "JavaScript", color: "text-yellow-200 bg-yellow-500/15 border-yellow-400/25" }
                      ].map((skill, idx) => (
                        <span key={idx} className={`px-3 py-1.5 rounded-full text-xs border font-medium hover:scale-105 transition-all ${skill.color}`}>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools & Technologies Card - now spans 2 columns */}
          <motion.div
            className="relative group cursor-pointer md:col-span-2 xl:col-span-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br from-slate-800/90 via-cyan-900/80 to-blue-900/80 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl -translate-y-16 translate-x-16" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30">
                    <FaTools className="text-2xl text-cyan-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tools & Technologies</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-200 mb-3">Development Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "Postman"].map((tool, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-full bg-cyan-400/15 text-cyan-100 text-xs border border-cyan-400/25 font-medium hover:bg-cyan-400/25 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-200 mb-3">Cloud & Design</h4>
                    <div className="flex flex-wrap gap-2">
                      {["AWS", "Firebase", "Figma", "Docker"].map((tool, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-full bg-cyan-400/15 text-cyan-100 text-xs border border-cyan-400/25 font-medium hover:bg-cyan-400/25 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            className="relative group cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br from-slate-900/90 via-pink-900/80 to-purple-900/80 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-xl -translate-y-12 translate-x-12" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-400/20 to-pink-500/20 border border-pink-400/30">
                    <FaHeart className="text-xl text-pink-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "UI/UX Design", "Open Source", "Problem Solving", "Technical Writing"].map((interest, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full bg-pink-400/15 text-pink-100 text-xs border border-pink-400/25 font-medium hover:bg-pink-400/25 transition-colors">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Achievements Card */}
          <motion.div
            className="relative group cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br from-slate-900/90 via-orange-900/80 to-yellow-900/80 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-full blur-xl -translate-y-12 translate-x-12" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-400/20 to-yellow-400/20 border border-orange-400/30">
                    <FaTrophy className="text-xl text-orange-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Achievements</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span className="text-gray-200 text-sm">Winner - Innodev 2k25</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span className="text-gray-200 text-sm">LeetCode Rank 1230</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span className="text-gray-200 text-sm">10k+ LinkedIn Followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span className="text-gray-200 text-sm">3rd Place - Quintathalon</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Grid;