"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaLinkedin, FaYoutube, FaCode } from 'react-icons/fa'
import Image from 'next/image'

const galleryItems = [
  {
    image: "/profile/guidance.jpg",
    caption: "Speaking at a college briefing — 800+ students attended",
  },
  {
    image: "/profile/cc_briefing.jpg",
    caption: "Introducing Computer Coding Club to freshers",
  },
  {
    image: "/profile/websprint.jpg",
    caption: "Organised a hackathon with 300+ participants on Web Dev & AI",
  },
  {
    image: "/profile/yt_thumbnail.jpg",
    caption: "Created multiple videos for my YouTube channel",
  },
];

const categories = [
  {
    title: "My Startups",
    icon: FaRocket,
    items: [
      {
        name: "PrepSutra.tech",
        badge: "Founder",
        desc: "Platform helping college freshers learn tech stacks, coding, and placement prep. 800+ active users. Built entirely solo.",
      },
      {
        name: "Mentix.in",
        badge: "Founder",
        desc: "Courses & test series for JEE students. 500+ active users. Solo product — built from scratch.",
      },
    ],
  },
  {
    title: "Content & Community",
    icon: FaLinkedin,
    items: [
      {
        name: "LinkedIn",
        badge: "13k+ Followers",
        desc: "Regularly posting projects, tech insights, and development updates.",
      },
      {
        name: "YouTube — JEE Mentor",
        badge: "1.3k Subscribers",
        desc: "Creating tutorials, project walkthroughs, and JEE mentoring videos.",
      },
    ],
  },
  {
    title: "Skills & Speaking",
    icon: FaCode,
    items: [
      {
        name: "Technical Skills",
        badge: "Builder",
        desc: "Generative AI, Web Development, React Native, Next.js, Electron.js, Node.js, TypeScript",
      },
      {
        name: "Public Speaking",
        badge: "Orator",
        desc: "Conducted briefings for 800+ students and led multiple college-level events. Very good orator.",
      },
    ],
  },
];

const Extracurricular = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white" id="extracurricular">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle-sans mb-4">Beyond Code</p>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            What I Do
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
            Startups, content creation, technical expertise, and community building.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-24">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                className="bg-[#FAFAFA] rounded-2xl border border-[#E5E5E5] p-8 hover:border-[#CCCCCC] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#EBEBEB]">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#E5E5E5] text-[#111111]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-[#111111]">{item.name}</h4>
                        <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest bg-[#111111] text-white rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[14px] font-sans text-[#666666] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="subtitle-sans mb-4">Gallery</p>
            <h3 className="heading-serif text-3xl md:text-4xl">
              In Action
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E5E5E5] bg-[#F5F5F0]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-5 pt-10">
                  <p className="text-white text-sm font-sans font-medium">{item.caption}</p>
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