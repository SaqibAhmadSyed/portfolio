import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Website to showcase more about me and display my experience and projects",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
  },
  {
    id: 2,
    title: "Tenkesalja Animal Welfare Protection Association Website",
    description: "Website to connect non-profit hungarian shelter to volunteers and give detailed explanation on how to adopt new animals",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "https://github.com/SaqibAhmadSyed/tenkesaljaallatvedok",
  },
  {
    id: 3,
    title: "Transportation Api",
    description: "Project 3 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
  },
  {
    id: 4,
    title: "Ecommerce Application",
    description: "Project 4 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
  },
  {
    id: 5,
    title: "Network Address Translation Home Lab",
    description: "Used virtual machine to simulate a real network environment with clients and server which includes active directory, ftp, dns, dhcp and IIS",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
  },
  {
    id: 6,
    title: "Penetration Testing (Capture the Flag)",
    description: "Project 5 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
  },
  {
    id: 7,
    title: "Bank Account Management System",
    description: "Project 5 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
  },
  {
    id: 8,
    title: "Undead Desolation: FPS Game",
    description: "Fps game made in Unity Engine in a team of 5. The goal of the game is to kill zombies and traverse the map",
    image: "/imgs/id8.png",
    gitUrl: "https://github.com/SaqibAhmadSyed/ZombieFPSGame",
  }
];

const ProjectsSection: React.FC = () => {
  const inViewRef = React.useRef<HTMLUListElement>(null);
  const inView = useInView(inViewRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="relative z-10">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <ul ref={inViewRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
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
