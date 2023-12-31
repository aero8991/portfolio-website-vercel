"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a BA degree in{" "}
        <span className="font-medium">Sociology</span>, I decided to pursue my
        passion for programming. I enrolled in a coding certification course and learned{" "}
        <span className="font-medium">both Python and full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Python, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a full-stack
        engineer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy cycling,
        watching movies, and spending time with my family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and finance</span>. 
      </p>
    </motion.section>
  );
}
