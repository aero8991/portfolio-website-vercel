"use client";

import Image from "next/image";
import React from "react";
import dimage from "@/public/dan_shot.jpg";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={dimage}
              alt="Daniel portrait photo"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className=" absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 125 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Daniel.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">7 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group text-white bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:active:scale-105 transition  cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="bg-white p-4 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:active:scale-105 transition  cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://www.github.com"
          target="_blank"
          className="bg-white p-4 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:active:scale-105 transition  cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
