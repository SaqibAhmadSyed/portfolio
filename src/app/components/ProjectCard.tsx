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
      <CardBody className="bg-[#fff5f0] relative group/card border-black/[0.1] w-auto sm:w-[28rem] h-auto rounded-lg p-6 border">
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



// const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl }) => {
//   return (
//     <div>
//       <div
//         className="h-52 md:h-72 rounded-t-xl relative group"
//         style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
//       >
//         <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#2e2e2e] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 rounded-t-xl">
//           <a
//             href={gitUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
//           </a>
//         </div>
//       </div>
//       <div className="text-white rounded-b-xl mt-3 bg-[#232323] py-6 px-4">
//         <h5 className="text-xl font-semibold mb-2">{title}</h5>
//         <p className="text-[#ADB7BE]">{description}</p>
//       </div>
//     </div>
//   );
// };
export default ProjectCard;
