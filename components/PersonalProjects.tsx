import React, { useEffect, useState } from "react";
import { fetchLiveProjects } from "@/utils/fetchLiveProjects";
import { WorkCard } from "@/components/ui/WorkCard";
import { motion } from "framer-motion";

interface LiveProject {
  name: string;
  desc: string;
  live?: boolean;
  link: string;
  cover: string;
  technologies?: string[];
}

const PersonalProjects = () => {
  const [projects, setProjects] = useState<LiveProject[]>([]);

  useEffect(() => {
    fetchLiveProjects().then(setProjects);
  }, []);

  return (
    <section className="w-full py-24 md:py-32 bg-white" id="personal-projects">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle-sans mb-4">Portfolio</p>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Personal Projects
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
            A selection of my recent open-source work and personal experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WorkCard
                title={project.name}
                tag={project.live ? "Live" : "Preview"}
                href={project.link}
                imageSrc={project.cover}
                description={project.desc}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
