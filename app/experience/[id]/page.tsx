"use client";

import { Experiences } from "@/data/index";
import { FaGithub, FaLinkedin, FaCalendarAlt, FaTasks, FaRocket, FaTrophy, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const experience = Experiences.find((exp) => exp.id === Number(params.id));

  if (!experience) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Experience Not Found</h2>
        <Link href="/" className="text-blue-400 underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="relative mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-6xl font-extrabold text-white mb-6 futuristic-font tracking-wide text-center relative z-10"
          >
            {experience.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center space-x-6 mb-8 relative z-10"
          >
            <Link 
              href={experience.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-300"
            >
              <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-lg">GitHub Repository</span>
            </Link>
            <Link 
              href={experience.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-2 text-white hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-lg">LinkedIn</span>
            </Link>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                <FaTasks className="mr-2" />
                Project Overview
              </h2>
              <p className="text-neutral-200 text-lg leading-relaxed">{experience.desc}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    className="px-4 py-2 bg-blue-900/40 rounded-full border border-blue-500/20 text-blue-200 text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-pink-300 mb-4">Role & Contribution</h3>
              <p className="text-neutral-300 text-lg leading-relaxed">{experience.role}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaTrophy className="mr-2" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Performance Optimization</h4>
                    <p className="text-neutral-300">Improved application load time by 40% through code optimization and caching strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">User Engagement</h4>
                    <p className="text-neutral-300">Increased user retention by 25% through improved UX and feature implementation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Code Quality</h4>
                    <p className="text-neutral-300">Maintained 95% test coverage and implemented comprehensive documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
                <FaCalendarAlt className="mr-2" />
                Project Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Planning Phase</h4>
                    <p className="text-neutral-300">Initial research and requirements gathering</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Development</h4>
                    <p className="text-neutral-300">Core implementation and feature development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Testing & Deployment</h4>
                    <p className="text-neutral-300">Quality assurance and production release</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Key Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-400">•</span>
                  <p className="text-neutral-300">Integration of complex third-party APIs</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-400">•</span>
                  <p className="text-neutral-300">Performance optimization for large datasets</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-400">•</span>
                  <p className="text-neutral-300">Cross-browser compatibility issues</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-red-300 mb-4 flex items-center">
                <FaRocket className="mr-2" />
                Future Roadmap
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <p className="text-neutral-300">Implementation of advanced analytics</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <p className="text-neutral-300">Mobile application development</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400">•</span>
                  <p className="text-neutral-300">AI-powered feature enhancements</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                <FaChartLine className="mr-2" />
                Project Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Code Coverage</span>
                  <span className="text-white font-semibold">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Performance Score</span>
                  <span className="text-white font-semibold">98/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">User Satisfaction</span>
                  <span className="text-white font-semibold">4.8/5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-green-300 mb-6">Project Demo</h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
              <iframe
                src={experience.video}
                title="Project Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 group"
          >
            <span className="mr-2">←</span>
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 