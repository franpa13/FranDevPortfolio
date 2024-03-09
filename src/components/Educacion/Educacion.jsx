import React from 'react'
import { motion } from "framer-motion"
import Card from './Card'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'
import { MdSchool } from "react-icons/md";

import Skills from './Skills'
export default function Educacion() {
  const educacion = [
    {
      nombre: "DESARROLLADOR WEB FULL STACK",
      fecha: "MAY/2023 - DIC/2023 (DIGITAL HOUSE)",
      url: "https://drive.google.com/file/d/1gDTt6m4cJmarPTGIUU8_SFEU8AuHfEXP/view?usp=sharing"
    },
    {
      nombre: "PROGRAMA ORACLE NEXT EDUCATION -FRONT END JR",

      fecha: "ABR/2023 - SEPT/2023 (ALURA LATAM-PROGRAMA ONE)",
      url: "https://drive.google.com/file/d/1IXr-bts_5ucxuXzWFprci1HuuzsRoGGn/view?usp=sharing"

    },
    {
      nombre: "DESARROLLADOR WEB INICIAL",

      fecha: "FEB/2023-MAY/2023 (UTN ARGENTINA PROGRAMA )",
      url: "https://drive.google.com/file/d/1geoBNJ9kzavL8VbHhzNGAUebn3F_1k2g/view?usp=sharing",

    },

    {
      nombre: "YO PUEDO PROGRAMAR",
      fecha: "JUN/2023-JUL/2023 (MICROSOFT)",

      url: "https://drive.google.com/file/d/1pC3Iqp_u5AkMD_CcZu5K9ALi1yB2mWvv/view?usp=sharing",

    },
    {
      nombre: "TALLER REACT.JS",
      fecha: "OCT/2023 (TALLERDONWEB)",

      url: "https://drive.google.com/file/d/1iAtCtj4jOxtWnsK8ZAJQgLxAKUK2S8zm/view?usp=sharing",

    },
    {
      nombre: "DESARROLLADOR WEB CON REACT JS",

      fecha: "OCT/2023-NOV/2023 (UTN ARGENTINA PROGRAMA)",
      url: "https://drive.google.com/file/d/1Ocv18fqOPqQZf9hg6UjiCeVy_xLptINa/view?usp=sharing",

    },
    {
      nombre: "PROGRAMACION WEB DESDE CERO",

      fecha: "JUL/2023-AGO/2023 (EGG CORPORATION)",
      url: "https://drive.google.com/file/d/1tGPf5PYlc2_CfIKFVKFQkCY7nxEaqbdD/view?usp=sharing",

    },

  ]
  return (
    <div id='educacion'>


      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className='flex flex-col flex-wrap gap-8 p-8 justify-center items-center parabg'

      >
        <Skills></Skills>
        <h1 className="text-lg text-center border-b-2 w-3/4 md:w-1/4 gap-1 mt-12 color border-blue-500 flex justify-center items-center md:gap-4 font-semibold md:text-2xl md:pb-1 relative z-10"><MdSchool /> Formación académica </h1>
        <div className='flex flex-wrap gap-8 justify-center'>

          {educacion.map((educ, i) => (
            <Card

              index={i}
              key={educ.nombre}
              nombre={educ.nombre}
              fecha={educ.fecha}
              url={educ.url}
            ></Card>
          ))}

        </div>
      </motion.div>
      <span className='parabg flex items-center justify-center text-gray-400 py-6'>2024 - Francisco Javier Paredes</span>
    </div>
  );
}