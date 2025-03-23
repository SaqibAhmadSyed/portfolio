import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tenkesalja Animal Welfare Protection Association Website",
    description: "Project 2 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "https://github.com/SaqibAhmadSyed/tenkesaljaallatvedok",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Transportation Api",
    description: "Project 3 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Ecommerce Application",
    description: "Project 4 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Network Address Translation (NAT) Implementation (GNS3 + VM)",
    description: "Authentication and CRUD operations",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Penetration Testing (Capture the Flag)",
    description: "Project 5 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Bank Account Management System",
    description: "Project 5 description",
    image: "/imgs/VIVID_VICE.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const inViewRef = React.useRef<HTMLUListElement>(null);
  const inView = useInView(inViewRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="container mx-auto px-12 ">
      <div className="relative z-10">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <ul ref={inViewRef} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
