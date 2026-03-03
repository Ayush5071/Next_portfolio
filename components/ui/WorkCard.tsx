import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WorkCardProps {
  title: string;
  tag: string;
  href: string;
  imageSrc?: string;
  description?: string;
  technologies?: string[];
}

export function WorkCard({
  title,
  tag,
  href,
  imageSrc,
  description,
  technologies = [],
}: WorkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} in a new tab`}
      whileHover={{ y: -4 }}
      tabIndex={0}
      className="group block w-full bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-[#CCCCCC] transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-[#111111]"
    >
      <div className="p-4 sm:p-5">
        <div className="rounded-xl overflow-hidden bg-[#F5F5F0] relative aspect-[16/10] mb-5">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-serif text-2xl font-bold text-[#CCCCCC] tracking-tight">{title}</span>
            </div>
          )}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-widest bg-white text-[#111111] font-medium shadow-sm">
            {tag}
          </span>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-serif text-[18px] font-bold text-[#111111]">{title}</h3>
            <ArrowRight className="w-4 h-4 text-[#999999] group-hover:text-[#111111] transition-colors duration-300 transform group-hover:translate-x-1" />
          </div>

          <p className="text-[13px] text-[#666666] leading-relaxed font-sans mb-4 line-clamp-2">
            {description}
          </p>

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#F0F0F0]">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] font-medium bg-[#FAFAFA] text-[#888888] border border-[#EBEBEB] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}
