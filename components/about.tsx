"use client";

import React from "react";
import SectionHeading from "./section-heading";
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
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My professional path began with a degree in , <span className="font-bold">Information Technology</span>, followed by intensive training in <span className="font-bold">full-stack web development</span>. at a coding bootcamp. Over the past year, I’ve worked on various projects that have honed my skills in <span className="font-medium">RESTful API development and reactive programming</span> , enabling me to build responsive and resilient applications. With a core stack centered around Java, Spring Boot, Reactive Java Programming, and MySQL, I have built a solid foundation in back-end development. Additionally, I have experience with front-end technologies such as ReactJS and NodeJS, allowing me to create seamless and comprehensive web applications.
      </p>
      <p className="mb-8">
      I am a firm believer in continuous learning and staying updated with the latest technological advancements.This commitment to growth helps me deliver innovative solutions and stay competitive in the ever - evolving field of web development.My philosophy is simple: code with precision, innovate with passion.
      </p>
    </motion.section>
  );
}