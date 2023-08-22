"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl py-3 px-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
