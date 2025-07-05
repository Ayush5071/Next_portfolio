"use client"
import Achievement from "@/components/Achievement";
import Approach from "@/components/Approach";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ParticleSystem from "@/components/ui/ParticleSystem";
import MagneticButton from "@/components/ui/MagneticButton";
import PageTransition from "@/components/ui/PageTransition";
import { motion } from "framer-motion";
import Extracurricular from '@/components/Extracurricular'

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen w-full overflow-x-hidden">
        {/* Custom Animated Cursor */}
        <CustomCursor />
        
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Interactive Particle System */}
        <ParticleSystem />
        
        {/* Enhanced Global Background with Dynamic Elements */}
        <div className="fixed inset-0 -z-10 w-full h-full">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
        
        {/* Secondary gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-purple-950/10 to-cyan-950/20" />
        
        {/* Main Grid Pattern for entire page */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Animated floating orbs for ambient lighting */}
        <motion.div
          className="absolute top-20 left-8 sm:left-32 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-8 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 bg-purple-500/5 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-1/4 left-4 sm:left-16 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 45, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-8 sm:right-1/3 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle radial gradient for center focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20" />
        
        {/* Additional texture overlay */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-gray-900/5 to-gray-900/20" />
      </div>

      {/* Modern Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero/>
        </div>
        <div className="w-full">
          <Grid/>
          <RecentProjects/>
          <Experience/>
          <Achievement/>
          <Extracurricular />
        </div>
      </div>
      <Footer/>
    </main>
    </PageTransition>
  );
}