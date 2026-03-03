// This file will handle fetching data for the Navrion live projects.

export async function fetchLiveProjects() {
  return [
    {
      name: "DealSafe",
      desc: "The Legal Sentinel for India — AI contract analysis powered by 20+ Indian legal frameworks.",
      live: true,
      link: "https://www.linkedin.com/posts/ayushtiwarimnnit_introducing-dealsafe-the-legal-sentinel-activity-7425867982611832833-_Fac?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64",
      cover: "/projects/legal.png",
      technologies: ["Electron.js", "LangGraph", "Qwen 1.5B", "Python"]
    },
    {
      name: "TestSaarthi",
      desc: "AI-powered test preparation platform with adaptive learning and performance analytics.",
      live: true,
      link: "https://testsaarthi.vercel.app",
      cover: "/projects/testsaarthi.png",
      technologies: ["Next.js", "React", "MongoDB", "GenAI"]
    },
    {
      name: "Cipher",
      desc: "Payroll management system built during internship at Computer Software Solutions, Kolkata.",
      live: false,
      link: "#",
      cover: "/projects/cipher.png",
      technologies: ["Next.js", "Express", "MongoDB", "Tailwind CSS"]
    },
    {
      name: "HACK36",
      desc: "Hackathon website funded by ISEA, GitHub Education with 1000+ registrations.",
      live: true,
      link: "https://hack36-9-0.vercel.app/",
      cover: "/projects/hack25.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Green Club",
      desc: "Platform promoting environmental awareness and sustainability on campus.",
      live: false,
      link: "https://enactus-mnnit-allahabad.vercel.app/",
      cover: "/projects/green.png",
      technologies: ["React", "TailwindCSS", "Supabase", "Postgres"]
    },
    {
      name: "Enactus",
      desc: "Platform helping social entrepreneurs create sustainable business solutions.",
      live: true,
      link: "https://enactus-mnnit-allahabad.vercel.app/about",
      cover: "/projects/enactus.png",
      technologies: ["React.js", "JavaScript", "TailwindCSS", "Express"]
    },
    {
      name: "SAE",
      desc: "Society of Automotive Engineers chapter at MNNIT, showcasing projects and events.",
      live: true,
      link: "https://sae-mnnit.vercel.app/",
      cover: "/projects/sae.png",
      technologies: ["Next.js", "Bootstrap", "TailwindCSS"]
    },
    {
      name: "E-Cell",
      desc: "Entrepreneurship Cell website of MNNIT fostering entrepreneurial spirit.",
      live: true,
      link: "https://ecell-mnnit.vercel.app/",
      cover: "/projects/ecell.png",
      technologies: ["Next.js", "React", "TailwindCSS"]
    },
    {
      name: "Hack36 2024",
      desc: "Hackathon website funded by GDSC, GitHub Education with 1000+ registrations.",
      live: true,
      link: "https://hack36-8-0-ten.vercel.app/",
      cover: "/projects/hack24.png",
      technologies: ["Next.js", "TypeScript", "GSAP", "Framer Motion"]
    },
    {
      name: "Culrav x Avishkar",
      desc: "Annual Flagship Techno-Management Festival of MNNIT with 1000+ registrations.",
      live: true,
      link: "https://culrav-avishkar-2k24.vercel.app/",
      cover: "/projects/culrav.png",
      technologies: ["Express", "Node", "MongoDB", "JWT", "React", "TailwindCSS"]
    },
    {
      name: "Paisaa",
      desc: "Platform for personal finance management and investment tracking.",
      live: true,
      link: "https://paissa-9eml.vercel.app/",
      cover: "/projects/paisaa.png",
      technologies: ["Next.js", "GenAI", "Redux", "TailwindCSS", "MongoDB"]
    },
    {
      name: "SCES Conference",
      desc: "International Conference on Sustainable Computing and Engineering Systems at MNNIT.",
      live: true,
      link: "https://confrence-ten.vercel.app/",
      cover: "/projects/sces.png",
      technologies: ["HTML", "PHP", "JavaScript", "TailwindCSS"]
    },
  ];
}
