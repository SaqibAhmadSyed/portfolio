import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Website built with TypeScript React to showcase my experience and projects.",
    image: "/imgs/id1.png",
    gitUrl: "https://github.com/SaqibAhmadSyed/portfolio",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Animal Welfare Website",
    description: "Website built with React connecting a non-profit Hungarian shelter with volunteers and adopters.",
    image: "/imgs/id2.png",
    gitUrl: "https://github.com/SaqibAhmadSyed/tenkesaljaallatvedok",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Transportation API",
    description: "A Montreal STM API with logging, versioning, caching and commmon API calls.",
    image: "/imgs/id3.png",
    gitUrl: "/",
    category: "Software Development",
  },
  {
    id: 4,
    title: "Ecommerce Application: Horizon",
    description: "E-commerce platform with user authentication and payment integration.",
    image: "/imgs/id4.png",
    gitUrl: "https://github.com/SaqibAhmadSyed/EcommerceProject",
    category: "Web Development",
  },
  {
    id: 5,
    title: "NAT Home Lab",
    description: "Virtual machine setup simulating a real network with Active Directory, DNS, and DHCP.",
    image: "/imgs/id5.png",
    gitUrl: "https://youtu.be/MFLl8E49lic",
    category: "Other",
  },
  {
    id: 6,
    title: "Penetration Testing (CTF)",
    description: "Ethical hacking project demonstrating penetration testing techniques.",
    image: "/imgs/id6.png",
    gitUrl: "https://www.youtube.com/watch?v=I77pGdttkh4",
    category: "Other",
  },
  {
    id: 7,
    title: "Bank Account Management System",
    description: "A financial application handling user accounts and transactions.",
    image: "/imgs/id7.png",
    gitUrl: "/",
    category: "Software Development",
  },
  {
    id: 8,
    title: "Undead Desolation: FPS Game",
    description: "A Unity-based FPS zombie game developed in a team.",
    image: "/imgs/id8.png",
    gitUrl: "https://github.com/SaqibAhmadSyed/ZombieFPSGame",
    category: "Other",
  },
  {
    id: 9,
    title: "Client/Server Communication",
    description: "Java project about simulating back end server/client communication with encrypted message. Hackathon 2023 project with the theme of data security",
    image: "/imgs/id9.png",
    gitUrl: "https://github.com/SaqibAhmadSyed/Geekfest2023",
    category: "Software Development",
  },
];

const categories = ["All", "Web Development", "Software Development", "Other"];

const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const inViewRef = React.useRef<HTMLUListElement>(null);
  const inView = useInView(inViewRef, { once: true });

  const filteredProjects = selectedTag === "All" 
    ? projectsData 
    : projectsData.filter((project) => project.category === selectedTag);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      {/* Tags Section */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {categories.map((category) => (
          <ProjectTag
            key={category}
            name={category}
            isSelected={selectedTag === category}
            onClick={setSelectedTag}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <ul ref={inViewRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
