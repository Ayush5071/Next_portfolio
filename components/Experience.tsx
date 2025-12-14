"use client";

import React from "react";
import TargetCursor from "./TargetCursor";
import "./TargetCursor.css";
import { Experiences } from "../data/index";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const taglines: Record<number|string, string> = {
  1: "Fest website UI lead",
  2: "Tech event frontend",
  3: "Club site animations",
  4: "Full stack learning app",
  5: "Dashboard & backend",
  6: "Payment & frontend",
};

export function Experience() {
  const router = useRouter();
  return (
    <>
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
      <section className="min-h-screen w-full py-20" id="experience">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-100 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">A quick look at my roles & contributions</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {Experiences.map((exp) => (
              <motion.button
                key={exp.id}
                className="cursor-target relative h-28 px-6 flex flex-col items-center justify-center rounded-2xl border border-blue-500/30 shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500/40 to-blue-700/40 text-white font-semibold text-lg tracking-tight overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
                style={{ width: 'auto', minWidth: 'unset', maxWidth: 'unset' }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                tabIndex={0}
                aria-label={`View details for ${exp.title}`}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ y: "100%", opacity: 0 }}
                  whileHover={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <span className="relative z-10 text-lg font-bold mb-1 text-white group-hover:text-blue-100 transition-colors duration-500 text-center px-2 whitespace-nowrap">{exp.title}</span>
                <span className="relative z-10 text-xs group-hover:text-blue-100 transition-colors duration-500 text-center px-2">{exp.role}</span>
                <span className="relative z-10 text-xs group-hover:text-blue-100 transition-colors duration-500 text-center px-2">{taglines[exp.id] || "Experience"}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
