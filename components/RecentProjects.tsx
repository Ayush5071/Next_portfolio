"use client";

import React from "react";
import TargetCursor from "./TargetCursor";
import "./TargetCursor.css";
import { projects } from "@/data/index";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const taglines: Record<number|string, string> = {
  1: "Learning platform for techies",
  2: "Peer payments & analytics",
  3: "Club site with animations",
  4: "AI healthcare dashboard",
  5: "Legal docs with AI",
  5.5: "Hackathon event website",
  6: "Campus ads & auctions",
  7: "Real-time chat app",
  8: "Farm management system",
  9: "Full e-commerce site",
  10: "Video chunking app",
};

const RecentProjects = () => {
  const router = useRouter();
  return (
    <>
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
      <section className="min-h-screen w-full py-20" id="projects">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-blue-500 tracking-tight drop-shadow-lg">Recent Projects</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">A quick look at my latest work</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                className="cursor-target relative h-24 px-6 flex flex-col items-center justify-center rounded-2xl border border-blue-500/30 shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500/40 to-blue-700/40 text-white font-semibold text-lg tracking-tight overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
                style={{ width: 'auto', minWidth: 'unset', maxWidth: 'unset' }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => router.push(`/project/${project.id}`)}
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ y: "100%", opacity: 0 }}
                  whileHover={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <span className="relative z-10 text-xl font-bold mb-1 text-white group-hover:text-blue-100 transition-colors duration-500 text-center px-2 whitespace-nowrap">{project.title}</span>
                <span className="relative z-10 text-xs group-hover:text-blue-100 transition-colors duration-500 text-center px-2">{taglines[project.id] || "Project showcase"}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
