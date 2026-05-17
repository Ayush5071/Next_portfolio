"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import FreelanceProjects from "@/components/FreelanceProjects";
import PersonalProjects from "@/components/PersonalProjects";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function FreelancePage() {
    return (
        <PageTransition>
            <main className="relative min-h-screen w-full overflow-x-hidden bg-[#FAFAFA]">
                <Navbar />

                {/* High-Converting Client Hero */}
                <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Value Proposition Content */}
                        <div className="flex-1 w-full text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-block px-4 py-1.5 mb-6 bg-[#FAFAFA] border border-[#E5E5E5] rounded-full">
                                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#111111]">
                                        Available for Contracts
                                    </span>
                                </div>

                                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.1] tracking-tight mb-8">
                                    I Build Software <br />
                                    <span className="text-[#666666] italic font-normal">That Scales.</span>
                                </h1>

                                <p className="text-lg text-[#666666] font-sans leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                                    Stop settling for cookie-cutter websites. I engineer premium, high-performance web and mobile applications custom-tailored to accelerate your business growth. From AI-integrations to complex dashboards, I deliver end-to-end.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <a href="mailto:your-email@example.com" className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white text-sm tracking-widest uppercase hover:bg-black transition-colors rounded-none font-medium flex items-center justify-center gap-3 group">
                                        Start a Project
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <Link href="#freelance" className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#111111] border border-[#111111] text-sm tracking-widest uppercase hover:bg-[#F5F5F0] transition-colors rounded-none font-medium flex items-center justify-center gap-2">
                                        View Past Work
                                    </Link>
                                </div>

                                {/* Client Trust Badges */}
                                <div className="mt-16 pt-10 border-t border-[#F0F0F0] flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-6">
                                    <div className="flex flex-col items-center lg:items-start">
                                        <span className="font-serif text-3xl font-bold text-[#111111]">100%</span>
                                        <span className="text-[10px] uppercase font-sans tracking-widest text-[#999999]">Delivery Rate</span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start">
                                        <span className="font-serif text-3xl font-bold text-[#111111]">14+</span>
                                        <span className="text-[10px] uppercase font-sans tracking-widest text-[#999999]">Projects Shipped</span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start">
                                        <span className="font-serif text-3xl font-bold text-[#111111]">5⭐</span>
                                        <span className="text-[10px] uppercase font-sans tracking-widest text-[#999999]">Client Satisfaction</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Premium Imagery */}
                        <div className="flex-1 w-full max-w-[500px]">
                            <motion.div
                                className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#FAFAFA]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10 mix-blend-overlay"></div>
                                <Image
                                    src="/profile/ayush.jpg"
                                    alt="Ayush Tiwari - Freelance Developer"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    priority
                                />
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* The freelance projects gallery */}
                <FreelanceProjects />

                {/* The personal projects gallery */}
                <PersonalProjects />

                {/* Final CTA */}
                <section className="py-24 bg-white border-t border-[#F0F0F0]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-8">Ready to build something extraordinary?</h2>
                        <a href="mailto:your-email@example.com" className="inline-flex px-10 py-5 bg-[#111111] text-white text-sm tracking-widest uppercase hover:bg-black transition-colors rounded-none font-medium items-center justify-center gap-3 group">
                            Get in Touch Today
                        </a>
                    </div>
                </section>

                <Footer />
            </main>
        </PageTransition>
    );
}
