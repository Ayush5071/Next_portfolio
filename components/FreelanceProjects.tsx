"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const freelanceProjects = [
    {
        title: "DealSafe",
        image: "/projects/legal.png",
        tech: ["Electron.js", "LangGraph", "Qwen 1.5B"],
        points: [
            "Legal Sentinel for India — AI contract analysis app",
            "Vector ingestion of 20+ Indian legal frameworks (ICA 1872, IPC)",
            "Highlights risky clauses, extracts terms & generates summaries",
            "Privacy-first — entire analysis runs locally on-device",
        ],
        link: "https://www.linkedin.com/posts/ayushtiwarimnnit_introducing-dealsafe-the-legal-sentinel-activity-7425867982611832833-_Fac?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64",
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
    {
        title: "TestSaarthi",
        image: "/projects/prepsutra.png",
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
        title: "Cipher",
        image: "/projects/prepsutra.png",
        tech: ["Next.js", "Express", "MongoDB"],
        points: [
            "Payroll management system — built at CSS, Kolkata",
            "Employee management & salary processing",
            "Attendance tracking & financial reports",
            "Full stack — Next.js frontend + Express APIs",
        ],
        link: null,
    },
    {
        title: "Mentix",
        image: "/projects/prepsutra.png",
        tech: ["Next.js", "React", "MongoDB"],
        points: [
            "Courses & test series for JEE students",
            "500+ active users on the platform",
            "Built entirely solo from scratch",
            "Adaptive content delivery system",
        ],
        link: "https://mentix.in",
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
                    <p className="subtitle-sans mb-4">Freelance</p>
                    <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                        Freelance Projects
                    </h2>
                    <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
                        A curated set of client and personal projects built end-to-end.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {freelanceProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden hover:shadow-lg hover:shadow-black/5 hover:border-[#CCCCCC] transition-all duration-400"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            {/* Image */}
                            <div className="relative w-full h-[140px] overflow-hidden bg-[#F5F5F0]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-serif text-lg font-bold text-[#111111]">{project.title}</h3>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-[#999999] hover:text-[#111111] transition-colors">
                                            View →
                                        </a>
                                    )}
                                </div>

                                {/* Tech pills */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-0.5 text-[9px] font-medium bg-[#FAFAFA] text-[#888888] border border-[#EBEBEB] rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Points */}
                                <ul className="space-y-1">
                                    {project.points.map((point, i) => (
                                        <li key={i} className="text-[12px] text-[#666666] leading-relaxed flex items-start gap-1.5">
                                            <span className="text-[#CCCCCC] mt-0.5 text-[8px]">●</span>
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
