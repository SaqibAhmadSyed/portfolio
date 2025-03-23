"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
    <ul className="grid grid-cols-2 list-disc pl-4">
      <li>SQL</li>
      <li>Ethical Hacking</li>
      <li>Network</li>
      <li>JavaScript</li>
      <li>Java</li>
      <li>C#</li>
      <li>PHP</li>
      <li>RestAPI</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>problem solving</li>
      
    </ul>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <h3 className="text-lg font-semibold">Computer Science and Tecnhology (DEC)</h3>
        <p>Vanier College, 2024</p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <h3 className="text-lg font-semibold">Coming Soon</h3>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

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
        layout="intrinsic"
        className="mr-5"
      />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full py-5">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            A recent Computer Science graduate with a strong passion for cybersecurity and Software Development.
            My academic journey has equipped me with
            a solid foundation in network security, programming and ethical hacking.
            Throughout my journey in college, I went through many challenges and I had the opportunity
            to have on hands unique experience such as pentesting, build web apps, etc.
            I’m excited to contribute my skills to a dynamic environment where I can make a meaningful impact.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
