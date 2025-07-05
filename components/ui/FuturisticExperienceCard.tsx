import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/utils/cn";
import { MovingBorder } from "./MovingBorders";
import { useRouter } from "next/navigation";

interface FuturisticExperienceCardProps {
  title: string;
  desc: string;
  skills: string[];
  github: string;
  linkedin: string;
  className?: string;
  id: number;
}

export const FuturisticExperienceCard: React.FC<FuturisticExperienceCardProps> = ({
  title,
  desc,
  skills,
  github,
  linkedin,
  className = "",
  id,
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "relative h-80 w-full flex flex-col justify-between p-6 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-purple-500/60 border border-transparent active:scale-95",
        className
      )}
      onClick={() => router.push(`/experience/${id}`)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/experience/${id}`); }}
    >
      {/* Animated Border */}
      <MovingBorder
        duration={3000}
        rx="1.5rem"
        ry="1.5rem"
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="h-full w-full bg-gradient-to-tr from-purple-700/30 via-blue-500/20 to-pink-500/30 opacity-60 blur-2xl" />
      </MovingBorder>
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 z-0 bg-white/10 dark:bg-[#0a0a23]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300" />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <p className="text-2xl font-extrabold text-white drop-shadow-lg mb-2 futuristic-font tracking-wide">
          {title}
        </p>
        <div className="text-neutral-200 text-sm mb-3 flex-1">
          {desc}
        </div>
        <ul className="list-none flex flex-wrap items-center mb-4">
          <li className="text-xs font-bold text-purple-300 mr-2">Technology Used:</li>
          {skills.map((skill, idx) => (
            <li key={idx} className="text-xs text-blue-200 bg-blue-900/40 rounded px-2 py-0.5 mr-2 mb-1 border border-blue-500/20">
              {skill}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 mt-auto">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors flex items-center" onClick={e => e.stopPropagation()}>
            <FaGithub className="mr-1 text-xl" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors flex items-center" onClick={e => e.stopPropagation()}>
            <FaLinkedin className="mr-1 text-xl" />
          </a>
        </div>
      </div>
      {/* Futuristic Glow */}
      <div className="absolute -inset-1 rounded-2xl pointer-events-none blur-2xl opacity-40 bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 z-0" />
    </div>
  );
};

// Optionally, add a futuristic font via global CSS or Tailwind config for .futuristic-font 