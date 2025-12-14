"use client";

import React from "react";
import { FaGithub, FaVideo, FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

interface FuturisticProjectCardProps {
  id: number;
  title: string;
  des: string;
  skills: string[];
  link: string;
  live: string;
  hosted?: string;
  className?: string;
}

export const FuturisticProjectCard: React.FC<FuturisticProjectCardProps> = ({
  id,
  title,
  des,
  skills,
  link,
  live,
  hosted,
  className,
}) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "cursor-target group relative h-[250px] w-full overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] focus:outline-none focus:ring-2 focus:ring-purple-400/60",
        className
      )}
      tabIndex={0}
      onClick={() => router.push(`/project/${id}`)}
      aria-label={`Open project ${title}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-3">
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="mb-3 flex-1 text-xs text-neutral-300 line-clamp-3">
          {des}
        </p>

        {/* Skills */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-purple-400 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs text-blue-200 bg-blue-900/40 rounded px-2 py-0.5 border border-blue-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center space-x-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaVideo className="h-4 w-4" />
          </a>
          {hosted && (
            <a
              href={hosted}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}; 