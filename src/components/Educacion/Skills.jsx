import React from 'react'
import { motion } from "framer-motion"
import { Avatar } from '@mui/material'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { blue, green, orange, yellow, grey } from '@mui/material/colors';
export default function Skills() {
  return (
    <ScrollAnimation>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.2, duration: 0.2 } }}
        className=''>
        <h1 className='text-center text-xl font-semibold md:text-2xl md:m-4'>Skills</h1>
        <div className='flex gap-4 justify-center  p-2 flex-wrap w-full md:gap-6 ' >
          <div className='w-1/4 flex flex-col gap-2 items-center justify-center md:w-1/5  '>
              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>
                <Avatar sx={{
                  bgcolor: orange[900],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <FaHtml5 />


                </Avatar>
              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >HTML</motion.p>
          </div>
          <div className=' w-1/4  flex flex-col gap-2 items-center justify-center md:w-1/5'>

              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>
                <Avatar sx={{
                  bgcolor: blue[500],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <IoLogoCss3 />

                </Avatar>
              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs md:text-base '
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >CSS</motion.p>
          </div>


          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>

              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>
                <Avatar sx={{
                  bgcolor: yellow[800],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <BiLogoJavascript />

                </Avatar>
              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >JAVASCRIPT</motion.p>
          </div>

          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>

              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>
                <Avatar sx={{
                  bgcolor: blue[800],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <FaReact />

                </Avatar>
              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >REACT JS</motion.p>
          </div>

          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>

              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>
                <Avatar sx={{
                  bgcolor: grey[900],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <SiNextdotjs />

                </Avatar>

                </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >NEXT JS</motion.p>
          </div>


          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center md:w-1/5 '>
              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>

                <Avatar sx={{
                  bgcolor: blue[900],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <TbBrandReactNative />

                </Avatar>

              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >REACT NATIVE</motion.p>
          </div>


          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>

              <motion.div whileHover={{ scale: 1.3 }}>
                <ScrollAnimation>
                <Avatar sx={{
                  bgcolor: green[900],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <FaNode />

                </Avatar>

              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >NODE JS</motion.p>
          </div>


          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>
              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>

                <Avatar sx={{
                  bgcolor: blue[300],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <SiTailwindcss />

                </Avatar>


              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >TAILWIND </motion.p>
          </div>

          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>
              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>

                <Avatar sx={{
                  bgcolor: grey[600],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <SiExpress />

                </Avatar>

                </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >EXPRESS</motion.p>
          </div>

          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>
              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>

                <Avatar sx={{
                  bgcolor: blue[900],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <SiMysql />

                </Avatar>

              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >MYSQL</motion.p>
          </div>

          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>
              <motion.div whileHover={{ scale: 1.3 }}>
            <ScrollAnimation>

                <Avatar sx={{
                  bgcolor: orange[800],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <FaGitAlt />

                </Avatar>
              </ScrollAnimation>

              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >GIT</motion.p>
          </div>

          <div className='  w-1/4  flex flex-col gap-2 items-center justify-center  md:w-1/5'>

              <motion.div whileHover={{ scale: 1.3 }}>
                <ScrollAnimation>
                <Avatar sx={{
                  bgcolor: grey[900],
                  width: "60px",
                  height: "60px",
                  fontSize: "50px",

                  '@media (max-width:600px)': {
                    width: "40px",
                    height: "40px",
                    fontSize: "30px",
                  },
                }}>

                  <FaGithub />

                </Avatar>
              </ScrollAnimation>
              </motion.div>
              <motion.p
                className='font-semibold text-xs  md:text-base'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center' }}
              >GITHUB</motion.p>
          </div>

        </div>
      </motion.div>
    </ScrollAnimation>
  )
}
