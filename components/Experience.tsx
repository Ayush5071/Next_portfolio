import { CardSpotlight } from "./ui/CardSpotlight";
import { Experiences } from "../data/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Experience() {
  return (
    <>
      <h1 className="heading text-3xl font-bold mt-2 mb-6">
        Professional Experience <span className="text-purple">Overview</span>
      </h1>
      <div id="experience" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Experiences.map((experience) => (
          <CardSpotlight key={experience.id} className="h-80 w-full">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              {experience.title}
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              {experience.desc}
              
              <ul className="list-none mt-2 flex flex-wrap">
                <li className="text-sm font-extrabold text-neutral-300">Technology Used :</li>
                {experience.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-neutral-300 ml-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-neutral-300 mt-4 z-20 flex space-x-4 absolute bottom-4 right-4">
              <a href={experience.github} className="text-white flex items-center">
                <FaGithub className="mr-1 text-xl md:text-2xl" />
              </a>
              <a href={experience.linkedin} className="text-white flex items-center">
                <FaLinkedin className="mr-1 text-xl md:text-2xl" />
              </a>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </>
  );
}
