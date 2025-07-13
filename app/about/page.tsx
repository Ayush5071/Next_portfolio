"use client"
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBriefcase, FaTrophy, FaHeart, FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiGit, SiDocker } from 'react-icons/si';


import Link from 'next/link';

import ModernCursor from '../../components/ui/ModernCursor';



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AboutPage = () => {
  return (
    <>
      {/* Modern animated custom cursor overlays the page */}
      <ModernCursor />
      <style>{`
        @media (pointer: coarse), (hover: none) {
          .modern-cursor-root {
            display: none !important;
          }
        }
      `}</style>
      <div
        className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black"
        style={{ cursor: 'none' }}
      >
        <style>{`
          html, body, * {
            cursor: none !important;
          }
          @media (pointer: coarse), (hover: none) {
            html, body, * {
              cursor: auto !important;
            }
            .modern-cursor-root {
              display: none !important;
            }
          }
        `}</style>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="text-gray-400 hover:text-white transition-colors" style={{ cursor: 'default' }}>
              <FaArrowLeft className="text-lg" />
            </Link>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ayush Tiwari
            </h1>
          </motion.div>
          <motion.a
            href="/download/resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <FaDownload className="text-xs" />
            Resume
          </motion.a>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-24 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Personal Info */}
        <motion.section className="bg-white/5 rounded-2xl p-6 border border-white/10" variants={itemVariants}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Electronics & Communication Engineering Student</h2>
              <p className="text-gray-300 mb-4 text-sm">
                Passionate B.Tech student from MNNIT Allahabad specializing in full-stack development and competitive programming. 
                Building innovative EdTech platforms and marketplace solutions with modern web technologies.
              </p>
              <div className="flex gap-3">
            <a href="mailto:ayusht9919@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors" style={{ cursor: 'default' }}>
                  <FaEnvelope className="text-lg" />
                </a>
            <a href="https://github.com/Ayush5071" className="text-gray-400 hover:text-white transition-colors" style={{ cursor: 'default' }}>
                  <FaGithub className="text-lg" />
                </a>
            <a href="https://www.linkedin.com/in/ayush-tiwari-84a823281" className="text-blue-400 hover:text-blue-300 transition-colors" style={{ cursor: 'default' }}>
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">College</p>
                <p className="text-white">MNNIT Allahabad</p>
              </div>
              <div>
                <p className="text-gray-400">CPI</p>
                <p className="text-white">7.88 (till 4th Sem)</p>
              </div>
              <div>
                <p className="text-gray-400">LeetCode</p>
                <p className="text-emerald-400">1790 Rating</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section className="bg-white/5 rounded-2xl p-6 border border-white/10" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-blue-400" />
            Education
          </h3>
          <div className="space-y-3">
            <div className="border-l-2 border-blue-400 pl-4">
              <h4 className="font-semibold text-white">Bachelor of Technology - Electronics and Communication Engineering</h4>
              <p className="text-gray-400 text-sm">Motilal Nehru National Institute of Technology Allahabad</p>
              <p className="text-gray-400 text-sm">2023 - 2027 | CPI: 7.88 (till 4th Sem)</p>
            </div>
            <div className="border-l-2 border-purple-400 pl-4">
              <h4 className="font-semibold text-white">Senior Secondary Education</h4>
              <p className="text-gray-400 text-sm">Kanpur Public Inter College (UP Board) | 2022 | 79.8%</p>
            </div>
            <div className="border-l-2 border-cyan-400 pl-4">
              <h4 className="font-semibold text-white">Secondary Education</h4>
              <p className="text-gray-400 text-sm">Jugal Devi Saraswati Vidya Mandir (CBSE) | 2020 | 86.8%</p>
            </div>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section className="bg-white/5 rounded-2xl p-6 border border-white/10" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FaCode className="text-blue-400" />
            Technical Skills
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['C++', 'JavaScript', 'TypeScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-gray-800/40 text-white rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-green-700/20 text-green-300 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm">Express.js</span>
                <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">GSAP</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Databases & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'SQL', 'DBMS', 'VS Code', 'Git', 'GitHub'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Core Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Operating Systems', 'Problem Solving'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section className="bg-white/5 rounded-2xl p-6 border border-white/10" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FaBriefcase className="text-blue-400" />
            Positions of Responsibility
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-400 pl-4">
              <h4 className="font-semibold text-white">Developer, Hack36 – Annual Flagship Hackathon, MNNIT</h4>
              <p className="text-gray-400 text-sm">Feb 2024</p>
              <p className="text-gray-300 text-sm mt-1">
                Collaborated on the official hackathon platform; contributed to frontend design and functionality for seamless user experience.
              </p>
              <a href="https://hack36.in" className="text-blue-400 text-xs hover:underline">View Project</a>
            </div>
            <div className="border-l-2 border-purple-400 pl-4">
              <h4 className="font-semibold text-white">Executive, Computer Coding Club (CC Club)</h4>
              <p className="text-gray-400 text-sm">2024</p>
              <p className="text-gray-300 text-sm mt-1">
                Built a real-time Codeforces dashboard; improved UI/UX for WOC using TailwindCSS and GSAP animations.
              </p>
              <a href="https://computercodingclub.in/" className="text-blue-400 text-xs hover:underline">CC MNNIT</a>
            </div>
            <div className="border-l-2 border-cyan-400 pl-4">
              <h4 className="font-semibold text-white">Frontend Developer, Culrav-Avishkar</h4>
              <p className="text-gray-400 text-sm">Apr 2024</p>
              <p className="text-gray-300 text-sm mt-1">
                Contributed to the homepage and dashboard using React and GSAP; improved animation and responsiveness.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Recent Projects */}
        <motion.section className="bg-white/5 rounded-2xl p-6 border border-white/10" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FaCode className="text-blue-400" />
            Recent Projects
          </h3>
          <div className="space-y-4">
            {/* Recent Projects - Only requested cards in order */}
            <div className="bg-white/5 rounded-lg p-4 border border-blue-400/30">
              <h4 className="font-semibold text-white mb-2">Quants Programmer: EdTech Platform</h4>
              <p className="text-blue-400 text-xs mb-2">Next.js, TypeScript, Express, MongoDB</p>
              <p className="text-gray-300 text-sm mb-3">
                Built a full-stack EdTech platform with roadmaps, blogs, AI interviews, and auth via email verification. Integrated Gemini for mock interviews with leaderboard, feedback, STT/TTS.
              </p>
              <div className="flex gap-2 text-xs">
                <a href="https://quantsprogrammer.vercel.app" className="text-blue-400 hover:underline">Live Project</a>
                <a href="https://github.com/Ayush5071/quantsprogrammer" className="text-blue-400 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/posts/ayush-tiwari-84a823281_take-5-minutes-and-check-this-out-might-activity-7346314520933343232-FSWh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx6" className="text-blue-400 hover:underline">LinkedIn Video</a>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-blue-400/30">
              <h4 className="font-semibold text-white mb-2">Paissa: Progressive Financial Management Platform</h4>
              <p className="text-blue-400 text-xs mb-2">Next.js 14, TypeScript, MongoDB, Tailwind CSS, Framer Motion, Chart.js, Google Gemini API</p>
              <p className="text-gray-300 text-sm mb-3">
                Paissa is a modern, AI-powered financial platform that grows with your financial literacy. Features include transaction management, analytics, and AI-powered budget recommendations. Responsive, secure, and built for real-time insights.
              </p>
              <div className="flex gap-2 text-xs">
                <a href="https://paissa-9eml.vercel.app/" className="text-blue-400 hover:underline">Live Demo</a>
                <a href="https://github.com/Ayush5071/paissa" className="text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-green-400/30">
              <h4 className="font-semibold text-white mb-2">Green Club MNNIT - Official Website</h4>
              <p className="text-green-400 text-xs mb-2">Next.js, React, Tailwind CSS, MongoDB, Framer Motion, Nodemailer, JWT Auth, Vercel</p>
              <p className="text-gray-300 text-sm mb-3">
                A vibrant, student-driven initiative dedicated to sustainability, nature, and environmental action at MNNIT Allahabad. Features eco-friendly UI, team page, gallery, problem management, admin dashboard, and secure contact form.
              </p>
              <div className="flex gap-2 text-xs">
                <a href="https://green-club-mnnit.vercel.app/" className="text-green-400 hover:underline">Live Site</a>
                <a href="https://github.com/Ayush5071/GreenClubMNNIT" className="text-green-400 hover:underline">GitHub</a>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-blue-400/30">
              <h4 className="font-semibold text-white mb-2">CareConnect AI: AI-Driven Remote Rehabilitation & Health Support</h4>
              <p className="text-blue-400 text-xs mb-2">Next.js, BlazePose, Web Speech API, TailwindCSS, Node.js, Express, MongoDB, ESP32, MPU6050, Socket.IO, Gemini AI</p>
              <p className="text-gray-300 text-sm mb-3">
                Intelligent, hybrid healthcare platform for post-treatment support. Features AI-powered physiotherapy, real-time monitoring, voice-enabled symptom analysis, smart doctor recommendations, hardware integration, and automated report generation. Built for home and clinical use.
              </p>
              <div className="flex gap-2 text-xs">
                <a href="https://www.youtube.com/embed/careconnectai-demo" className="text-blue-400 hover:underline">Demo Video</a>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-blue-400/30">
              <h4 className="font-semibold text-white mb-2">Legal AI Contract Intelligence Platform</h4>
              <p className="text-blue-400 text-xs mb-2">Next.js, React, Tailwind CSS, Node.js, Express, MongoDB, Passport.js, Google Gemini, LangChain, DuckDuckGo, Tesseract, PyMuPDF</p>
              <p className="text-gray-300 text-sm mb-3">
                Developed for the Cyfuture AI Hackathon. AI-powered platform for legal document analysis, red flag detection, semantic chat, benchmarking, and PDF export. Integrates Gemini, LangChain, DuckDuckGo, and OCR for end-to-end legal intelligence.
              </p>
              <div className="flex gap-2 text-xs">
                <a href="https://github.com/Ayush5071/Legal_AI" className="text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section className="bg-white/5 rounded-2xl p-6 border border-white/10" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FaTrophy className="text-blue-400" />
            Achievements
          </h3>
          <div className="space-y-3">
            {[
              { title: 'Hack36 – CC MNNIT 🥉', desc: '9th place among 100+ teams in full-stack development skills (2025)' },
              { title: 'Innodev – ES MNNIT 🥇', desc: '1st place among 100+ teams; demonstrated full-stack development skills (2025)' },
              { title: 'Dev or Die – MNNIT 🥇', desc: '1st out of 50+ teams; excelled in backend, UI/UX, and API integration (2024)' },
              { title: 'Quintathlon – ES MNNIT 🥉', desc: '3rd place in mock interview + OA event (2024)' },
              { title: 'LeetCode Contest Rating 📊', desc: 'Achieved 1790 rating in competitive programming' },
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{achievement.title}</h4>
                  <p className="text-gray-300 text-xs">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Interests & Beyond Code */}
        <motion.section className="bg-white/5 rounded-2xl p-6 border border-white/10" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FaHeart className="text-blue-400" />
            Skills & Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {[
              '💻 Competitive Programming', '🎯 Problem Solving', '👥 Teamwork', 
              '💬 Communication', '⏱️ Time Management', '📊 Project Management'
            ].map((interest, index) => (
              <div key={index} className="text-center p-2 bg-white/5 rounded-lg">
                <span className="text-gray-300 text-sm">{interest}</span>
              </div>
            ))}
          </div>
          <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><FaHeart className="text-pink-400" />Beyond Code</h4>
          <div className="flex flex-wrap gap-2">
            {[
              '🍿 Watching Anime',
              '📚 Learning about Mythology',
              '🐾 Learning about Animals',
              '🎥 Content Creation',
              '🔮 Astrology'
            ].map((beyond, idx) => (
              <span key={idx} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">{beyond}</span>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-4 text-center">Let&apos;s Connect</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:ayusht9919@gmail.com"
              className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              style={{ cursor: 'default' }}
            >
              <FaEnvelope />
              Send Email
            </a>
            <a
              href="/download/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors"
              style={{ cursor: 'default' }}
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
    </>

  );
}

export default AboutPage;
