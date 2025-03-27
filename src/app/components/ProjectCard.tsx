import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Link from "next/link"
import Image from "next/image";
import {IconCode } from "@tabler/icons-react";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#fff1e8] relative group/card border-black/[0.1] w-auto sm:w-[28rem] h-auto rounded-lg p-6 border">
        <CardItem
          translateZ="40"
          className="text-xl font-semibold text-black"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-800 text-xs max-w-xs mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="80" className="w-full mt-3">
          <Image
            alt=""
            src={imgUrl}
            height={800}
            width={800}
            className="h-56 w-full object-cover rounded-lg group-hover/card:shadow-lg"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
        <CardItem
            translateZ={15}
            as="a"
            href={gitUrl}
            target="_blank"
            className="px-3 py-1 rounded-lg bg-black text-white text-sm font-bold"
          >
            View Project
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
export default ProjectCard;
