"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../utils/cn";
import Link from "next/link";
import { IconHome, IconLayersSubtract, IconUser, IconMessage } from "@tabler/icons-react";

export const Navbar = ({ className }: { className?: string }) => {
  const navItems = [
    {
      name: "Home",
      link: "#home", // Scroll to the Home section
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
      isScroll: true,
    },
    {
      name: "About",
      link: "#about", // Scroll to the About section
      icon: <IconUser className="h-4 w-4 text-neutral-500 " />,
      isScroll: true,
  },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconLayersSubtract className="h-4 w-4 text-neutral-500 " />,
      isScroll: true,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
      isScroll: true,
    },
  ];

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, isScroll: boolean, href: string) => {
    if (isScroll) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-[#fff5f0] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 items-center justify-center space-x-10",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleScroll(e, navItem.isScroll, navItem.link)}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-800 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-[15px]">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
