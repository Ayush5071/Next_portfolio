import React, { useEffect, useState } from "react";
import { fetchLiveProjects } from "@/utils/fetchLiveProjects";
import { WorkCard } from "@/components/ui/WorkCard";

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
    <section className="w-full py-20" id="personal-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            Personal Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Explore my live and impactful projects
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <WorkCard
              key={project.name}
              title={project.name}
              tag={project.live ? "Live" : "Preview"}
              href={project.link}
              imageSrc={project.cover}
              description={project.desc}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
