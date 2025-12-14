"use client";

import { workExperience } from '@/data'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Achievement = () => {
  return (
    <section id="achievements" className="min-h-screen w-full py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Hackathon & Events
        </h2>
        <p className="text-gray-400 max-w-2xl mb-10 mx-auto text-lg leading-relaxed text-center">
          A showcase of my accomplishments, victories, and milestones in various tech competitions and events
        </p>
        <ul className="space-y-4">
          {workExperience.map((achievement) => (
            <li
              key={achievement.id}
              className="cursor-target py-3 px-4 rounded-lg bg-white/3 border border-white/6 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              tabIndex={0}
              aria-label={`Achievement: ${achievement.title}`}
            >
              <div>
                <div className="text-base font-semibold text-white">{achievement.title}</div>
                <div className="text-sm text-gray-300">{achievement.desc}</div>
              </div>
              <div className="flex items-center gap-3">
                {achievement.link && achievement.link !== "#" ? (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md hover:scale-105 transition-transform"
                    aria-label={`Open ${achievement.title}`}
                    title={`Open ${achievement.title}`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievement
