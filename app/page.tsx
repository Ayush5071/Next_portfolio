"use client"
import Achievement from "@/components/Achievement";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import Extracurricular from '@/components/Extracurricular'
import PersonalProjects from "@/components/PersonalProjects";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen w-full overflow-x-hidden bg-[#FAFAFA]">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="relative w-full">
          <Hero />
          <PersonalProjects />
          <Experience />
          <Achievement />
          <Extracurricular />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}