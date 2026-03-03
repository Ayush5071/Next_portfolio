"use client";

import { workExperience } from '@/data'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Achievement = () => {
  return (
    <section id="achievements" className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle-sans mb-4">Milestones</p>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-5xl mb-6">
            Hackathons & Events
          </h2>
          <p className="text-[#666666] text-base leading-relaxed font-sans">
            A showcase of my accomplishments, victories, and milestones in various tech competitions and events.
          </p>
        </motion.div>

        <ul className="space-y-0">
          {workExperience.map((achievement, index) => (
            <motion.li
              key={achievement.id}
              className="group py-6 sm:py-8 border-b border-[#E5E5E5] last:border-b-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mb-2 group-hover:text-[#666666] transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-sans text-[#666666] leading-relaxed">
                  {achievement.desc}
                </p>
              </div>

              {achievement.link && achievement.link !== "#" && (
                <div className="flex items-center mt-2 sm:mt-0">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E5E5E5] text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300 group-hover:-translate-y-1"
                    aria-label={`Open ${achievement.title}`}
                    title={`Open ${achievement.title}`}
                  >
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </a>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievement;
