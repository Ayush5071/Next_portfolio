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
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      tabIndex={0}
      className="cursor-target group bg-gradient-to-b from-[#0b0b10]/60 to-[#0b0b10]/80 rounded-2xl border border-white/8 overflow-hidden shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-pink-400/30"
    >
      <div className="p-4">
        <div className="rounded-xl overflow-hidden border border-white/5 bg-[#05050a] p-1 group-hover:border-pink-500/20 transition-all">
          <div className="rounded-lg overflow-hidden relative aspect-[16/9]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-pink-400/10 to-purple-300/10">
                <span className="text-gray-400 text-xs">Preview coming soon</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[11px] bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
              Live
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-[15px] text-white/90">{title}</h3>
            <p className="text-[12px] text-gray-400 mt-1">
              {tag} {description && <span>· {description}</span>}
            </p>
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-400/10 text-pink-300 text-[10px] px-2 py-0.5 rounded-md border border-pink-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(href, "_blank", "noopener,noreferrer");
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 hover:border-pink-400/40 text-white text-xs font-semibold transition-all hover:bg-white/5"
            >
              Visit
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(href, "_blank", "noopener,noreferrer");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 w-full justify-center rounded-xl bg-white/10 border border-white/10 hover:border-pink-400/40 text-white text-sm font-semibold transition-all hover:bg-white/5"
          >
            Visit site
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>
        </div>
      </div>
    </motion.a>
  );
}
