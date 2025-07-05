"use client";

import { projects } from "@/data";
import { FaGithub, FaVideo, FaExternalLinkAlt, FaTasks, FaRocket, FaChartLine, FaCode, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((proj) => proj.id === Number(params.id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Project Not Found</h2>
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
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center space-x-6 mb-8 relative z-10"
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-300"
            >
              <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-lg">GitHub Repository</span>
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-2 text-white hover:text-blue-400 transition-all duration-300"
            >
              <FaVideo className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-lg">Demo Video</span>
            </a>
            {project.hosted && (
              <a 
                href={project.hosted} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center space-x-2 text-white hover:text-green-400 transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline text-lg">Live Demo</span>
              </a>
            )}
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
              <p className="text-neutral-200 text-lg leading-relaxed">{project.des}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                <FaCode className="mr-2" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center">
                <FaUsers className="mr-2" />
                Target Audience
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Primary Users</h4>
                    <p className="text-neutral-300">Students and professionals looking to enhance their technical skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Secondary Users</h4>
                    <p className="text-neutral-300">Educational institutions and training centers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                <FaChartLine className="mr-2" />
                Key Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Interactive Learning</h4>
                    <p className="text-neutral-300">Engaging content with hands-on exercises and real-world examples</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Progress Tracking</h4>
                    <p className="text-neutral-300">Detailed analytics and progress monitoring for users</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Community Features</h4>
                    <p className="text-neutral-300">Discussion forums and peer learning opportunities</p>
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
              <h3 className="text-xl font-bold text-green-300 mb-4">Project Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Planning Phase</h4>
                    <p className="text-neutral-300">Requirements gathering and architecture design</p>
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
          </motion.div>
        </div>

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