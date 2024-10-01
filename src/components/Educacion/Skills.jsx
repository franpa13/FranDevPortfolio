import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { blue, green, orange, yellow, grey } from "@mui/material/colors";
export default function Skills() {
  const skills = [
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: orange[900],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <FaHtml5 size={40} />
        </Avatar>
      ),
      title: "HTML5",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: blue[500],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <IoLogoCss3 size={40} />
        </Avatar>
      ),
      title: "CSS",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: yellow[800],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <BiLogoJavascript size={40} />
        </Avatar>
      ),
      title: "JAVASCRIPT",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: blue[900],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <FaReact size={40} />
        </Avatar>
      ),

      title: "REACT JS",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: grey[800],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <RiNextjsLine size={40} />
        </Avatar>
      ),

      title: "NEXT JS ",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: blue[900],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <BiLogoTypescript size={40} />
        </Avatar>
      ),

      title: "TYPESCRIPT",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: blue[400],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <SiTailwindcss size={40} />
        </Avatar>
      ),

      title: "TAILWIND CSS",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: grey[600],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <FaGitAlt size={40} />
        </Avatar>
      ),

      title: "GIT",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: grey[900],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <FaGithub size={40} />
        </Avatar>
      ),

      title: "GITHUB",
    },
    {
      icon: (
        <Avatar
          sx={{
            bgcolor: green[900],
            width: "50px",
            height: "50px",
            fontSize: "50px",

            "@media (max-width:600px)": {
              width: "40px",
              height: "40px",
              fontSize: "30px",
            },
          }}
        >
          <FaNode size={40} />
        </Avatar>
      ),
      title: "NODE JS",
    },
  ];

  return (
    <ScrollAnimation>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          color: "#ffffff",
          transition: { delay: 0.2, duration: 0.2 },
        }}
        className="flex flex-col w-full mt-12 md:mt-[90px] md:mb-14 items-center gap-8"
      >
        <h1 className="text-lg text-center border-b-2 w-1/2 md:w-1/4 color border-blue-500 flex justify-center items-center gap-4 font-semibold md:text-2xl md:pb-1 relative z-10">
          <GiSkills className="text-blue-500" />
          Tech Stack
        </h1>
        <div className="flex gap-4 justify-center  p-1 flex-wrap w-full md:gap-3 ">
          {skills.map((skill, i) => {


            return (
              <div
                key={i}
                className="w-1/4 flex flex-col gap-2 items-center justify-center md:w-1/6 md:mb-3 "
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ScrollAnimation>{skill.icon}</ScrollAnimation>
                </motion.div>
                <motion.p
                  className="font-semibold text-xs md:text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  style={{ textAlign: "center" }}
                >
                  {skill.title}
                </motion.p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </ScrollAnimation>
  );
}
