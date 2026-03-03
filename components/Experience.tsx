"use client";

import React from "react";
import { Experiences } from "../data/index";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#FAFAFA]" id="experience">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle-sans mb-4">Journey</p>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Experience
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
            Professional roles and notable ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {Experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] hover:shadow-lg hover:shadow-black/5 transition-all duration-400 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col w-full mb-4">
                <span className="text-[11px] font-sans tracking-widest uppercase text-[#999999] mb-2">{exp.role}</span>
                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-1">{exp.title}</h3>
              </div>

              <p className="text-[14px] text-[#666666] leading-relaxed mb-6 flex-1">
                {exp.detailedDesc || exp.desc}
              </p>

              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[10px] font-medium bg-[#FAFAFA] text-[#888888] border border-[#EBEBEB] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
