import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {RiBuilding4Line} from "react-icons/ri"
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Senior Commerical Data Analyst",
    location: "Bothell, WA",
    description:
      "I worked as a Senior Data Analyst for almost 2 years. I developed  a python application and upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Completed Certification",
    location: "Irvine, CA",
    description:
      "I graduated while working.  I immediately started utilizing what I had learned.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Data Engineer",
    location: "Renton, WA",
    description:
      "I worked as a Data Engineer. I developed a company phramacy app and my stack included React, Next.js, TypeScript, Tailwind, and SQL. I also developed a multi-thread program",
    icon: React.createElement(RiBuilding4Line),
    date: "2022 - 2023",
  },
  {
    title: "Senior Data Engineer",
    location: "Bellevue, WA",
    description:
      "I'm now a Senior Data Engineer. I developed a company app. My stack includes React, Next.js, TypeScript, Tailwind, Python, AWS, Fast API and Snowflake. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Pharmacy Tracker App",
    description:
      "Pharmacy app for users. I was the front-end developer. This CRUD tool uses both advanced filtering and data handling",
    tags: ["React", "MongoDB", "Tailwind", "FastAPI", "Zustand"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Weather Report API",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can check the weather in their area.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Mutithreading Server Connection",
    description:
      "I created a program that simultaneously connects to hundreds of servers, extracts data and loads the data to another server for processing",
    tags: ["Python", "Next.js", "SQL",],
    imageUrl: wordanalyticsImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Zustand",
  "Express",
  "Snowflake",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "Django",
  "AWS",
  "Framer Motion",
] as const;
