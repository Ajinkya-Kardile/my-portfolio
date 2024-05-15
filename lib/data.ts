import React from "react";
import { FaJava, FaAndroid } from "react-icons/fa";
import AdgebraImg from "@/public/adgebra.png";
import PreetyMealImg from "@/public/preetymeal.png";
import ClickTrackerImg from "@/public/ClickTrackerImg.png";
import DSPImg from "@/public/dsp.png";


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
    title: "Android Developer Intern",
    location: "Transworld Technologies Ltd, Viman Nagar, Pune",
    description: "Part of the FleetView android application project, responsible for developing new features using Java and XML. Worked on Google Map-APIs and developed features like vehicle tracking. Used Restful API and handled JSON format output.",
    icon: React.createElement(FaAndroid),
    date: "Jun 2022 - Dec 2022",
  },
  {
    title: "Java Developer",
    location: "Inuxu Digital Media Technologies, Baner, Pune",
    description:
      "Designing, developing, and maintaining APIs for website and mobile apps, creating endpoints for user auth, product listings, and orders. Integrating external services like payment gateways and analytics tools for enhanced functionality. Incorporated reactive programming with Java to handle asynchronous operations efficiently. Identifying and resolving performance bottlenecks through caching, code optimization, and infrastructure enhancements. Managing schema, writing queries, optimizing performance, and ensuring scalability. Creating clear documentation for code, APIs, and architectural decisions for collaboration. Participating in daily stand-ups and sprints, collaborating with cross-functional teams to deliver features on time.",
    icon: React.createElement(FaJava),
    date: "Sept 2023 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "Adgebra 3.0",
    description:
      "Developed REST APIs with Java 17 and Spring Boot. Integrated PayU and Easebuzz in financial module. Created real-time analytics dashboard APIs. Used MySQL for storage and BigQuery for analytics.",
    tags: ["Java 17", "Spring Boot", "Rest APIs","Mysql", "BigQuery"],
    imageUrl: AdgebraImg,
  },
  {
    title: "DSP Service",
    description:
      "Developed a reactive Java app with Spring Boot to integrate custom APIs from demand partners. Utilized reactive programming and asynchronous processing for efficient requests.",
    tags: ["Java 17", "Reactive Java", "Aerospike Cache", "BigQuery"],
    imageUrl: DSPImg,
  },
  {
    title: "Click Tracker Application",
    description:
      "Used Aerospike for efficient data caching. Implemented validation logic to prevent fraud. Integrated with Google Pub/Sub for publishing click messages.",
      tags: ["Java 17", "Spring Boot", "AeroSpike Cache", "GCP Pub/Sub"],
      imageUrl: ClickTrackerImg,
  },
  {
    title: "PreetyMeal",
    description:
      "This is an application where a mess owners connects with more customers. And rather than going to the same mess, users can access all the messes in their particular area.",
      tags: ["Android", "Java 8", "Firebase database", "SqLite"],
      imageUrl: PreetyMealImg,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Java (Core, Advanced, J2EE, J2SE)",
  "Java reactive programming",
  "Spring boot",
  "Hibernate",
  "Bootstrap",
  "Android",
  "MySql",
  "SQLite",
  "Google Firebase",
  "Aerospike cache",
  "BigQuery",
  "Git",
  "Bitbucket",
  "GitHub"
] as const;
