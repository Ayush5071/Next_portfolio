"use client";

import React from 'react';
import { FaMedal, FaExternalLinkAlt } from 'react-icons/fa';
import { cn } from '@/utils/cn';

interface AchievementCardProps {
  title: string;
  desc: string;
  link: string;
  className?: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  desc,
  link,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative h-[200px] w-full overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] p-4",
        className
      )}
    >
      {/* Medal Icon */}
      <div className="absolute top-3 right-3 text-purple-500/60 group-hover:text-purple-400 transition-colors">
        <FaMedal className="h-5 w-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 pr-8 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-3 line-clamp-2 flex-grow">
          {desc}
        </p>
        
        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base font-medium mt-auto"
        >
          View Achievement
          <FaExternalLinkAlt className="ml-2 h-4 w-4" />
        </a>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black -z-10" />

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
    </div>
  );
}; 