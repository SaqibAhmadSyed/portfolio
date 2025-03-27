/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "./DownloadButton";
import { IconBrandGithub, IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react";


<TypeAnimation
  sequence={[
    'Qibber',
    1000,
    'Nigqib',
    1000,
    'Saqueef',
    1000,
    'Queefqib',
    1000
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>


function HeroSection() {
  return (
    <section className="lg:py-1">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-5 place-self-center text-center sm:text-left lg:pr-[8rem]">
          <h1 className="text-white mb-4 text-4xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Hello, I'm <br /> </span>
            <span>Saqib</span>
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-2">welcome to my portfolio website</p>
          <div className="inline-grid grid-cols-1">
            <DownloadButton />
            <a href="https://github.com/SaqibAhmadSyed" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-1 px-5 py-2 rounded-full w-full sm:w-[200px] mr-4 transition ease-in-out bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 mt-3 text-white hover:-translate-y-1">
                <IconBrandGithub className="text-white" size={20} /> Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/saqib-ahmad-syed-8a6a45237/" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-full w-full sm:w-[200px] mr-4 transition ease-in-out bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 mt-3 text-white hover:-translate-y-1">
                <IconBrandLinkedinFilled className="text-white" size={20} /> LinkedIn
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-2 place-self-center mt-4 lg:mt-0 relative">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
            <Image
              src={"/imgs/panda.gif"}
              alt="panda"
              width={0}
              height={0}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
            />
          </div>
        </div>
        <div className="col-span-5 place-self-center sm:text-left lg:pl-[10rem] pt-10">
          <h1 className="text-white mb-4 text-4xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              <TypeAnimation
                sequence={[
                  'Problem Solver',
                  1000,
                  'Fast Learner',
                  1000,
                  'Adaptable',
                  1000,
                  'Communicator',
                  1000,
                  'Teamwork',
                  1000,
                  'Open-Minded',
                  1000,
                  'Detail-Oriented',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
