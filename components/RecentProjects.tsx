import { projects } from "@/data";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaVideo, FaExternalLinkAlt } from "react-icons/fa";

export function RecentProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container mx-auto px-4 mt-8 md:mt-16">
      <h1 className="heading">
        Projects{" "}
        <span className="text-purple">Showcase</span>
      </h1>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <div className="relative shadow-lg shadow-black-300 bg-[#0507139b] overflow-hidden h-full rounded-2xl transition duration-200 group hover:shadow-xl border border-gray-700">
              <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_20px_10px_rgba(255,0,255,0.6)] transition-shadow duration-200"></div>
              <div className="p-4 relative">
                <h2 className="font-bold my-4 text-lg text-white">
                  {project.title}
                </h2>
                <h2 className="font-normal my-4 text-sm text-gray-200">
                  {project.des}
                </h2>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    {project.iconLists.map((icon, index) => (
                      <Image key={index} src={icon} height="20" width="20" alt="icon" />
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.link} className="text-gray-200">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.live} className="text-gray-200">
                      <FaVideo size={24} />
                    </a>
                    {project.hosted && (
                      <a href={project.hosted} className="text-gray-200">
                        <FaExternalLinkAlt size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className="text-white">{title}</p>
  </div>
);
