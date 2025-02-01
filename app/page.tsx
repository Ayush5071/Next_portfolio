"use client"
import Achievement from "@/components/Achievement";
import Approach from "@/components/Approach";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";




export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience/>
        <Achievement/>
        <Approach/>
        <Footer/>
      </div>
      <motion.div
        className="fixed bottom-5 right-5 bg-[#a166f8] rounded-full p-4 cursor-pointer shadow-lg"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        animate={{ 
          y: ["0%", "-30%"], 
          boxShadow: ["0 0 10px #CBACF9", "0 0 20px #CBACF9", "0 0 10px #CBACF9"],
          x: [0, -10, 10, -10, 10, 0]
        }}
        transition={{ 
          boxShadow: { duration: 1.5, yoyo: Infinity, ease: "easeInOut" },
        }}
      >
        <a href="/download/resume.pdf" download>
          <FaDownload className="text-white" />
        </a>
      </motion.div>
    </main>
  );
}
