"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const startups = [
    {
        title: "Mentix",
        role: "Founder & Creator",
        desc: "A comprehensive platform dedicated to JEE students. Features include curated test series, deep performance analysis, adaptive guidance, and daily problem revisions to boost exam readiness.",
        metrics: [
            { label: "Active Users", value: "700+" },
            { label: "Revenue", value: "₹10k+" }
        ],
        image: "/projects/mentix.png",
        link: "https://www.mentix.in/",
        tags: ["Next.js", "React", "MongoDB"]
    },
    {
        title: "PrepSutra",
        role: "Founder & Creator",
        desc: "An all-in-one learning ecosystem designed for college freshers building a career in tech. Provides guided roadmaps, tech stack tutorials, practice questions, and AI-powered mock interviews.",
        metrics: [
            { label: "Active Users", value: "800+" },
            { label: "Revenue", value: "₹8k+" }
        ],
        image: "/projects/prepsutra.png",
        link: "https://prepsutra.tech",
        tags: ["Next.js", "GenAI", "LangChain"]
    }
];

const Startups = () => {
    return (
        <section className="w-full py-24 md:py-32 bg-white" id="startups">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="subtitle-sans mb-4">Entrepreneurship</p>
                    <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                        My Startups
                    </h2>
                    <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
                        Profitable, solo-founded products solving real problems in the ed-tech space.
                    </p>
                </motion.div>

                {/* Startups List */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {startups.map((startup, idx) => (
                        <motion.div
                            key={idx}
                            className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 aspect-[16/10] relative rounded-2xl overflow-hidden border border-[#E5E5E5] bg-[#FAFAFA] group hover:shadow-xl hover:shadow-black/5 transition-all duration-500">
                                <Image
                                    src={startup.image}
                                    alt={startup.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Link */}
                                <a
                                    href={startup.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
                                >
                                    <span className="px-6 py-3 bg-white text-[#111111] text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Visit Website
                                    </span>
                                </a>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#999999] mb-3">
                                    {startup.role}
                                </span>

                                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
                                    {startup.title}
                                </h3>

                                <p className="text-base text-[#666666] leading-relaxed font-sans mb-8">
                                    {startup.desc}
                                </p>

                                {/* Metrics */}
                                <div className="flex items-center gap-8 mb-8 pb-8 border-b border-[#F0F0F0]">
                                    {startup.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <p className="font-serif text-3xl text-[#111111] font-bold mb-1">
                                                {metric.value}
                                            </p>
                                            <p className="text-[11px] font-sans uppercase tracking-widest text-[#999999]">
                                                {metric.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {startup.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 text-[11px] font-medium bg-[#FAFAFA] text-[#888888] border border-[#EBEBEB] rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Startups;
