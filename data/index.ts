export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
      id: 1,
      title: "I believe in fostering teamwork and maintaining transparency in all communications.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
  },
  {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
  },
  {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
  },
  {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
  },
  {
      id: 5,
      title: "Building QuantsProgrammer - a learning platform that contains Roadmaps for various technologies.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
  },
  {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Quants Programmer",
    des: "A comprehensive platform offering detailed and structured roadmaps to help users master various technologies efficiently.",
    img: "/quantsprogrammer.jpg",
    hosted: "https://liveproject.com",
    iconLists: ["/nextjs.png","/TypeScript.svg", "/mongo.svg", "/node.svg","/express.svg", "/gsap.svg", "/tailwindcss.svg"],
    link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_quantsprogrammer-turning-dreams-into-digital-activity-7279265377153335296-nMto?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64",
    live: "https://quantsprogrammer.vercel.app",
  },
  {
    id: 2,
    title: "CampusX: College OlX",
    des: "An application designed for creating ads, facilitating live auctions, and enabling real-time chat to assist college users.",
    img: "/campusx.jpg",
    hosted: "https://liveproject.com",
    iconLists: ["/nextjs.png", "/express.svg", "/mongo.svg", "/tailwindcss.svg", "/node.svg"],
    link: "https://github.com/Ayush5071/Web_Stark",
    live: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_campus-x-the-winning-project-of-innodev-activity-7263876541317603328-2cGr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64"
  },
  {
    id: 3,
    title: "KISAAN - Farm Management System",
    des: "A farm management system using Express, Node.js, and MongoDB, integrated with an NLP chatbot using the bag-of-words model.",
    img: "/kisaan.jpg",
    hosted: "ghgh",
    iconLists: ["/express.svg", "/node.svg", "/mongo.svg", "/js.svg"],
    link: "https://github.com/Ayush5071/Agro_Techies",
    live: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_empowering-kisaans-with-next-gen-agritech-activity-7189592418441216000-oWNh?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 4,
    title: "E-commerce Website",
    des: "A fully featured e-commerce website with a user-friendly interface and secure payment integration.",
    img: "/p4.svg",
    hosted:"",
    iconLists: ["/js.svg", "/node.svg", "/mongo.svg", "/express.svg"],
    link: "https://github.com/Ayush5071/Pixel-Paladins",
    live: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_hogwarts-haul-where-fantasy-meets-reality-activity-7177179704649555968-AMnW?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 5,
    title: "Landing Pages for Various Websites",
    des: "Developed 3-4 visually appealing landing pages for different websites, showcasing modern design and responsive layouts.",
    img: "/p3.svg",
    hosted:"",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/react.svg"],
    link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_webdevelopment-mnnit-ece-activity-7147646116480626688-OB98?utm_source=share&utm_medium=member_desktop",
    live: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_webdevelopment-mnnit-ece-activity-7147646116480626688-OB98?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "Real Time Chat App",
    des: "Developed a Real time chat app using Socket.io ",
    hosted:"",
    img: "/p4.jpg",
    iconLists: ["/express.svg", "/node.svg", "/mongo.svg", "/js.svg"],
    live: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_webdevelopment-realtimechat-socketio-activity-7236120270309105664-dxlu?utm_source=share&utm_medium=member_desktop",
    link: "https://github.com/Ayush5071/chatApp",
  },
  {
    id: 7,
    title: "Video Transcoding App",
    des: "Developed a video transcoding app using FFmpeg that uploads a video and breaks it into chunks.",
    img: "/p5.png",
    hosted: "",
    iconLists: ["/express.svg", "/node.svg", "/mongo.svg", "/js.svg"],
    link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_excited-to-unveil-my-latest-creation-activity-7253086498621644800-UayK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64",
    live: "https://github.com/Ayush5071/Video-Transcoding-ffmpeg",
  },
];


export const workExperience = [
  {
      id: 1,
      title: "Winner of Innodev 2k25",
      desc: "Achieved 1st place among 80+ teams in a web development competition at NIT Allahabad.",
      className: "md:col-span-2",
      link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_thrilled-to-share-my-achievements-in-avishkar-activity-7264005934639644672-6nEq",
  },
  {
      id: 2,
      title: "Third Prize in Quintathalon 2k25",
      desc: "Secured 3rd place in a mock placement event, which included an online assessment and technical interview.",
      className: "md:col-span-2",
      link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_thrilled-to-share-my-achievements-in-avishkar-activity-7264005934639644672-6nEq",
  },
  {
      id: 3,
      title: "Winner of Dev or Die 2k24",
      desc: "Won the annual technical event for full-stack web development at NIT Allahabad.",
      className: "md:col-span-2",
      link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_thrilled-to-share-my-achievements-in-avishkar-activity-7264005934639644672-6nEq",
  },
  {
      id: 4,
      title: "Third Prize in Quintathalon 2k24",
      desc: "Awarded 3rd place in the annual mock placement event at NIT Allahabad, designed to simulate real placement processes.",
      className: "md:col-span-2",
      link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_thrilled-to-share-my-achievements-in-avishkar-activity-7264005934639644672-6nEq",
  },
  {
      id: 5,
      title: "Leetcode Rank 1230",
      desc: "Ranked 1230 out of 32,000 participants, achieving a maximum rating of 1760.",
      className: "md:col-span-2",
      link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_thrilled-to-share-my-achievements-in-avishkar-activity-7264005934639644672-6nEq",
  },
  {
      id: 6,
      title: "10k Followers on LinkedIn and 1k Subscribers on YouTube",
      desc: "Gained a significant following by sharing my tech journey and projects, reaching 10k followers on LinkedIn and 1k subscribers on YouTube.",
      className: "md:col-span-2",
      link: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_thrilled-to-share-my-achievements-in-avishkar-activity-7264005934639644672-6nEq",
  },
];


export const Experiences = [
  {
    id: 1,
    title: "Frontend Developer of Culrav Avishkar 2k25",
    desc: "Developed the frontend of the official website for Culrav Avishkar 2k25, the annual cultural and technical fest of NIT Allahabad.",
    skills: ["React", "Tailwind CSS", "GSAP", "Responsive Design"],
    github: "https://github.com/IAMAmanRaj/culrav-avishkar-2k24",
    linkedin: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_culravavishkar-webdevelopment-activity-7262153499658866688-8DPy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64",
  },
  {
    id: 2,
    title: "Frontend Developer for Weekend of Code Website",
    desc: "Developed the frontend for the Weekend of Code website, a tech event organized by the CC Club.",
    skills: ["React", "Tailwind CSS", "Next.js", "TypeScript"],
    github: "https://weekendofcode.computercodingclub.in/",
    linkedin: "https://weekendofcode.computercodingclub.in/",
  },
  {
    id: 3,
    title: "Created Official Website for Green Club MNNIT",
    desc: "Developed the official website for the Green Club MNNIT using GSAP, Framer Motion, Next.js, and TypeScript.",
    skills: ["GSAP", "Framer Motion", "Next.js", "TypeScript"],
    github: "https://github.com/Ayush5071/GreenClubMNNIT",
    linkedin: "https://green-club-mnnit.vercel.app",
  },
  {
    id: 4,
    title: "Full Stack Developer for Quants Programmer",
    desc: "Created a full stack application for Quants Programmer, an initiative to guide students in the tech domain.",
    skills: ["Next.js", "MongoDB","Tailwindcss", "Typescript"],
    github: "#",
    linkedin: "https://www.linkedin.com/posts/ayush-tiwari-84a823281_quantsprogrammer-turning-dreams-into-digital-activity-7279265377153335296-nMto?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64",
  },
  {
    id: 5,
    title: "Contributor to User Dashboard for CodeHub Website",
    desc: "Contributed to creating the User Dashboard for the CodeHub website, the official website of the CC Club.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    linkedin: "https://www.linkedin.com/posts/link-aditya-rai_coding-programming-opensource-activity-7281977400626761729-lovd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESkqvoBH6PYTNow6d35qEuxga6jIDGFx64",
  },
  {
    id: 6,
    title: "Web Developer at Enactus",
    desc: "Created the frontend and integrated the payment gateway in the official website of Enactus MNNIT.",
    skills: ["React", "Express", "Tailwind CSS", "GSAP"],
    github: "https://enactus-mnnit2k25.netlify.app",
    linkedin: "https://enactus-mnnit2k25.netlify.app",
  }
];