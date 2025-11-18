"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  IconBrandReact, IconBrandNodejs, IconBrandTailwind, IconBrandNextjs,
  IconBrandUnity, IconDatabase, IconShieldLock, IconNetwork,
  IconBrandJavascript, IconCoffee, IconBrandCSharp, IconBrandPhp,
  IconApi, IconBrandPython, IconTerminal2, IconBrandGit, IconBrandTypescript,
}
  from "@tabler/icons-react";

type TabData = {
  title: string;
  id: string;
  content: React.ReactNode;
};

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3">
        <div>
          <ul className="pl-4">
            <li className="flex items-center space-x-2">
              <IconDatabase stroke={1.5} color="#38bdff" size={22} />
              <span className="ml-2">SQL</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconShieldLock stroke={1.5} color="#3898ff" size={22} />
              <span className="ml-2">Ethical Hacking</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconNetwork stroke={1.5} color="#7fe34d" size={22} />
              <span className="ml-2">Network</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconTerminal2 stroke={1.5} color="orange" size={22} />
              <span className="ml-2">Linux</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="flex items-center space-x-2">
              <IconBrandJavascript stroke={1.5} color="#e1f013" size={22} />
              <span className="ml-2">JavaScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconCoffee stroke={1.5} color="#d12a2a" size={22} />
              <span className="ml-2">Java</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconBrandCSharp stroke={3} color="#7d1485" size={22} />
              <span className="ml-2">C#</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconBrandGit  stroke={1.5} color="#e63212" size={22} />
              <span className="ml-2">Git</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="flex items-center space-x-2">
              <IconBrandPhp stroke={1.5} color="#8361f2" size={22} />
              <span className="ml-2">PHP</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconApi stroke={1.5} color="#e612c9" size={22} />
              <span className="ml-2">RestAPI</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconBrandPython stroke={1.5} color="white" size={22} />
              <span className="ml-2">Python</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconBrandTypescript stroke={1.5} color="#0390fc" size={22} />
              <span className="ml-2">Typescript</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
{
  title: "Education",
  id: "education",
  content: (
    <>
      <div>
        <h3 className="text-lg font-semibold">Computer Science and Technology (DEC)</h3>
        <p>Vanier College, 2024</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Computer Science (Bachelors)</h3>
        <p>Concordia University, 2027</p>
      </div>
    </>
  ),
},
  {
    title: "Course Taken",
    id: "course",
    content: (
      <ul className="grid grid-cols-2 list-disc ml-8">
        <li>Programming (OOP/Data Structure)</li>
        <li>Database</li>
        <li>Game Programming</li>
        <li>App Development (Desktop/Mobile)</li>
        <li>Web Programming</li>
        <li>Networks</li>
        <li>System Development</li>
        <li>E-Commerce</li>
        <li>Internet of Things</li>
        <li>Web Service</li>
        <li>Ethical Hacking</li>
        <li>Unix</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <div className="grid grid-cols-2">
        <div>
          <ul className="pl-4">
            <li className="flex items-center space-x-2">
              <IconBrandReact stroke={1.5} color="#38bdff" size={22} />
              <span className="ml-2">React.js</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconBrandTailwind stroke={1.5} color="#3898ff" size={22} />
              <span className="ml-2">Tailwind CSS</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconBrandNodejs stroke={1.5} color="#7fe34d" size={22} />
              <span className="ml-2">Node.js</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="flex items-center space-x-2">
              <IconBrandUnity stroke={1.5} color="white" size={22} />
              <span className="ml-2">Unity Game Engine</span>
            </li>
            <li className="flex items-center space-x-2">
              <IconBrandNextjs stroke={1.5} color="white" size={22} />
              <span className="ml-2">Next.js</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/imgs/workstation.jpg"
          width={800}
          height={800}
          alt="About me"
          className="mr-5"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full py-5">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a student currently pursuing my Bachelor of Computer Science, building on top of an Associate Degree in Computer Science.
            My background has given me a strong base in programming, system design, and security-focused development. I enjoy creating practical, efficient applications and understanding how systems work under the hood.
            Throughout my studies, I’ve worked on projects ranging from web applications to security-oriented tools, always aiming to write clean, reliable, and maintainable code.
            I am driven by problem-solving, continuous learning, and the challenge of turning ideas into real, functional software.
            I am working toward a career where I can build impactful solutions, expand my expertise, and grow as a developer in a dynamic, fast-moving environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              Frameworks
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("course")}
              active={tab === "course"}
            >
              Courses
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
