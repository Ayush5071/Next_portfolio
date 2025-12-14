// This file will handle fetching data for the Navrion live projects.

export async function fetchLiveProjects() {
  // Mock data for development/testing
  return [
    {
      name: "PrepSutra",
      desc: "A platform offering curated study materials and practice tests for coding interviews (Premium).",
      live: true,
      link: "https://prepsutra.tech",
      cover: "/navrion/prepsutra.png",
      technologies: ["Next.js", "React", "TailwindCSS", "Mongodb", "langchain", "genAI", "OCR", "NEXT_API","Express","OAUTH"]
    },
    {
      name: "HACK36",
      desc: "Hackthon website funded by ISEA, GITHUB Education, and other sponsors in MNNIT with 1000+ registrations.",
      live: true,
      link: "https://hack36-9-0.vercel.app/",
      cover: "/navrion/hack25.png",
      technologies: ["Next.js", "TypeScript", "Tailwind css"]
    },
    {
      name: "Green Club",
      desc: "A platform promoting environmental awareness and sustainability initiatives on campus.",
      live: false,
      link: "https://enactus-mnnit-allahabad.vercel.app/",
      cover: "/navrion/green.png",
      technologies: ["React", "TailwindCSS","Supabase","Postgres"]
    },
    {
      name: "Enactus",
      desc: "Platform that helps social entrepreneurs to create sustainable business solutions for community development.",
      live: true,
      link: "https://enactus-mnnit-allahabad.vercel.app/about",
      cover: "/navrion/enactus.png",
      technologies: ["React.js", "JavaScript", "TailwindCSS","Express"]
    },
    {
      name: "SAE",
      desc: "Platform for the Society of Automotive Engineers (SAE) chapter at MNNIT, showcasing projects and events.",
      live: true,
      link: "https://sae-mnnit.vercel.app/",
      cover: "/navrion/sae.png",
      technologies: ["Nextjs", "Bootstrap","TailwindCss"]
    },
    {
      name: "E-Cell",
      desc: "Entrepreneurship Cell website of MNNIT to foster entrepreneurial spirit among students.",
      live: true,
      link: "https://ecell-mnnit.vercel.app/",
      cover: "/navrion/ecell.png",
      technologies: ["Next.js", "React", "TailwindCSS"]
    },
    {
      name: "Hack36 2024",
      desc: "Hackthon website funded by GDSC, GITHUB Education, and other sponsors in MNNIT with 1000+ registrations.",
      live: true,
      link: "https://hack36-8-0-ten.vercel.app/",
      cover: "/navrion/hack24.png",
      technologies: ["Next.js", "TypeScript", "GSAP","Framer Motion"]
    },
    {
      name: "Curav x Avishkar",
      desc: "webiste with 1000+ regitrations of Annual Flagship Techno-Management Festival of MNNIT Allahabad with modern UI (must check).",
      live: true,
      link: "https://culrav-avishkar-2k24.vercel.app/",
      cover: "/navrion/culrav.png",
      technologies: ["Express","Node","Mongodb","JWT", "React", "TailwindCSS","Framer Motion"]
    },
    {
      name: "Paisaa",
      desc: "Platform for personal finance management and investment tracking.",
      live: true,
      link: "https://paissa-9eml.vercel.app/",
      cover: "/navrion/paisaa.png",
      technologies: ["Next","Genai", "Redux", "TailwindCSS","MongoDB"]
    },
    {
      name: "International Confrence (SCES)",
      desc: "For International Conference on Sustainable Computing and Engineering Systems organized by MNNIT.",
      live: true,
      link: "https://confrence-ten.vercel.app/",
      cover: "/navrion/sces.png",
      technologies: ["html", "php", "javascript","TailwindCSS"]
    },
    {
      name: "DISPENSARY REPORT SYSTEM",
      desc: "Helps to create and print dispensary reports for patients in a structured format.",
      link: "https://mnnit-dispensary.vercel.app/",
      cover: "/navrion/disp.png",
      technologies: ["HTML","Vanilla css", "TailwindCSS"]
    },
    {
      name: "Patient and Disease Tracking System for Research",
      desc: "get downlaod and store patient disease data for research and analysis.",
      link: "https://patiententry.vercel.app/",
      cover: "/navrion/entry.png",
      technologies: ["NEXT", "TailwindCSS","NEON","Postgres"]
    },
  ];
}
