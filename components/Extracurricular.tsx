"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const bannerImage = {
  image: "/profile/guidance.jpeg",
  caption: "Speaking at a college briefing — 800+ students attended",
};

const galleryItems = [
  {
    image: "/profile/cc_breifing.jpeg",
    caption: "Introducing Computer Coding Club to freshers",
  },
  {
    image: "/profile/websprint.jpeg",
    caption: "Organised a hackathon with 300+ participants on Web Dev & AI",
  },
  {
    image: "/profile/yt_thumbnail.jpeg",
    caption: "Created multiple videos for my YouTube channel",
  },
];

const Extracurricular = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white" id="extracurricular">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle-sans mb-4">Impact</p>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Beyond Code
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
            Building communities, sharing knowledge, and leading initiatives on and off campus.
          </p>
        </motion.div>

        {/* Elegant Two-Column Layout for Content & Community */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#999999] mb-4">
              01 — Content Creation
            </h3>
            <h4 className="font-serif text-4xl text-[#111111] mb-6 font-bold leading-tight">
              Sharing the Journey
            </h4>
            <div className="space-y-8">
              <div className="border-l border-[#E5E5E5] pl-6">
                <p className="font-sans font-bold text-lg text-[#111111] mb-1">LinkedIn <span className="text-[#888] font-normal">— 13k+ Followers</span></p>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                  Regularly sharing insights on software development, open-source projects, and technical deep dives. Building an active community of developers and tech enthusiasts.
                </p>
              </div>
              <div className="border-l border-[#E5E5E5] pl-6">
                <p className="font-sans font-bold text-lg text-[#111111] mb-1">YouTube <span className="text-[#888] font-normal">— 1.3k+ Subscribers</span></p>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                  Serving as a mentor for JEE students, providing strategy breakdowns, project tutorials, and development ecosystem walkthroughs via video content.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#999999] mb-4">
              02 — Leadership
            </h3>
            <h4 className="font-serif text-4xl text-[#111111] mb-6 font-bold leading-tight">
              Speaking & Events
            </h4>
            <div className="space-y-8">
              <div className="border-l border-[#E5E5E5] pl-6">
                <p className="font-sans font-bold text-lg text-[#111111] mb-1">Public Orator</p>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                  Conducted highly attended briefings, addressed crowds of 800+ students, and advocated for technical literacy across college departments.
                </p>
              </div>
              <div className="border-l border-[#E5E5E5] pl-6">
                <p className="font-sans font-bold text-lg text-[#111111] mb-1">Community Building</p>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                  Organized hackathons, managed the Computer Coding Club&apos;s introductory sessions, and collaborated with diverse teams to execute large-scale university events.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Photo Gallery with distinct premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 border-t border-[#EBEBEB]"
        >
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-[#111111] font-bold">
              Moments <span className="font-normal italic text-[#666]">in action</span>
            </h3>
          </div>

          {/* Full-width banner */}
          <motion.div
            className="group relative w-full aspect-[21/9] rounded-none overflow-hidden bg-[#FAFAFA] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={bannerImage.image}
              alt={bannerImage.caption}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-16">
              <p className="text-white text-sm font-sans tracking-wide">{bannerImage.caption}</p>
            </div>
          </motion.div>

          {/* Grid gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative aspect-[4/3] rounded-none overflow-hidden bg-[#FAFAFA]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 pt-12">
                  <p className="text-white text-xs font-sans tracking-wide font-medium">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Extracurricular