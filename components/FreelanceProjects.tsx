"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const freelanceProjects = [
    {
        title: "Mentix",
        image: "/projects/mentix.png",
        tech: ["Next.js", "React", "MongoDB"],
        points: [
            "Courses & test series platform for JEE students",
            "500+ active users on the platform",
            "Built entirely solo from scratch",
            "Adaptive content delivery system",
        ],
        link: "https://mentix.in",
    },
    {
        title: "PrepSutra",
        image: "/projects/prepsutra.png",
        tech: ["Next.js", "MongoDB", "GenAI"],
        points: [
            "Platform for college freshers learning tech stacks",
            "Guided roadmaps and mock interviews",
            "800+ active users using the platform",
            "End-to-end full stack execution",
        ],
        link: "https://prepsutra.tech",
    },
    {
        title: "Cipher",
        image: "/projects/cipher.jpg",
        tech: ["React Native", "Electron.js", "Express"],
        points: [
            "Cross-platform desktop & mobile payroll app",
            "Employee management & salary processing APIs",
            "Attendance tracking & financial reports",
            "Built at Computer Software Solutions, Kolkata",
        ],
        link: null,
    },
    {
        title: "TestSaarthi",
        image: "/projects/testsaarthi.png",
        tech: ["Next.js", "MongoDB", "GenAI"],
        points: [
            "AI-powered test preparation platform",
            "Adaptive learning with performance analytics",
            "Custom test series for competitive exams",
            "Real-time progress tracking dashboard",
        ],
        link: "https://testsaarthi.vercel.app",
    },
    {
        title: "DataExpert",
        image: "/projects/scientific.png",
        tech: ["Next.js", "Python", "D3.js"],
        points: [
            "Scientific data analysis platform for researchers",
            "Interactive visualisations & statistical tools",
            "Handles datasets with millions of rows",
            "Accelerated research workflow by 4x",
        ],
        link: null,
    },
    {
        title: "ScreenCap AI",
        image: "/projects/chrome.png",
        tech: ["Chrome API", "Tesseract.js", "React"],
        points: [
            "Chrome extension for screenshot management",
            "OCR text extraction from images & web pages",
            "Organised capture collections with search",
            "Runs fully client-side — zero data sent externally",
        ],
        link: null,
    },
];

const FreelanceProjects = () => {
    return (
        <section className="w-full py-24 md:py-32 bg-[#FAFAFA]" id="freelance">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="subtitle-sans mb-4">Contract & Solo Work</p>
                    <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                        Freelance & Products
                    </h2>
                    <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
                        A curated set of client deliveries and personal startup ventures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {freelanceProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden hover:shadow-lg hover:shadow-black/5 hover:border-[#CCCCCC] transition-all duration-400 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            {/* Image */}
                            <div className="relative w-full h-[160px] overflow-hidden bg-[#F5F5F0]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-serif text-xl font-bold text-[#111111]">{project.title}</h3>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-[#999999] hover:text-[#111111] transition-colors">
                                            Visit →
                                        </a>
                                    )}
                                </div>

                                {/* Tech pills */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-0.5 text-[10px] font-medium bg-[#FAFAFA] text-[#888888] border border-[#EBEBEB] rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Points */}
                                <ul className="space-y-1.5 mt-auto">
                                    {project.points.map((point, i) => (
                                        <li key={i} className="text-[13px] text-[#666666] leading-snug flex items-start gap-2">
                                            <span className="text-[#CCCCCC] mt-1 text-[6px]">●</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FreelanceProjects;
