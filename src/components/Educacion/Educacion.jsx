import React from 'react'
import { motion } from "framer-motion"
import Card from './Card'

import Skills from './Skills'
export default function Educacion() {
  const educacion = [
    {
      nombre: "DESARROLLADOR WEB FULL STACK",
      img: { Egg },
      fecha: "MAY/2023 - DIC/2023 (DIGITAL HOUSE)",
      url: "https://drive.google.com/file/d/1gDTt6m4cJmarPTGIUU8_SFEU8AuHfEXP/view?usp=sharing"
    },
    {
      nombre: "PROGRAMA ORACLE NEXT EDUCATION -FRONT END JR",
      img: { Egg },
      fecha: "ABR/2023 - SEPT/2023 (ALURA LATAM-PROGRAMA ONE)",
      url: "https://drive.google.com/file/d/1IXr-bts_5ucxuXzWFprci1HuuzsRoGGn/view?usp=sharing"

    },
    {
      nombre: "DESARROLLADOR WEB INICIAL",
      img: { Egg },
      fecha: "FEB/2023-MAY/2023 (UTN ARGENTINA PROGRAMA )",
      url: "https://drive.google.com/file/d/1geoBNJ9kzavL8VbHhzNGAUebn3F_1k2g/view?usp=sharing",

    },

    {
      nombre: "YO PUEDO PROGRAMAR",
      fecha: "JUN/2023-JUL/2023 (MICROSOFT)",
      img: { Egg },
      url: "https://drive.google.com/file/d/1pC3Iqp_u5AkMD_CcZu5K9ALi1yB2mWvv/view?usp=sharing",

    },
    {
      nombre: "TALLER REACT.JS",
      fecha: "OCT/2023 (TALLERDONWEB)",
      img: { Egg },
      url: "https://drive.google.com/file/d/1iAtCtj4jOxtWnsK8ZAJQgLxAKUK2S8zm/view?usp=sharing",

    },
    {
      nombre: "DESARROLLADOR WEB CON REACT JS",
      img: { Egg },
      fecha: "OCT/2023-NOV/2023 (UTN ARGENTINA PROGRAMA)",
      url: "https://drive.google.com/file/d/1Ocv18fqOPqQZf9hg6UjiCeVy_xLptINa/view?usp=sharing",

    },
    {
      nombre: "PROGRAMACION WEB DESDE CERO",
      img: { Egg },
      fecha: "JUL/2023-AGO/2023 (EGG CORPORATION)",
      url: "https://drive.google.com/file/d/1tGPf5PYlc2_CfIKFVKFQkCY7nxEaqbdD/view?usp=sharing",

    },

  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className='flex flex-col flex-wrap gap-8 p-8 justify-center'

    >
      <Skills></Skills>
      <h1 className='text-center text-xl font-semibold md:text-2xl md:m-1'>Formación académica </h1>
      <div className='flex flex-wrap gap-8 justify-center'>

        {educacion.map((educ, i) => (
          <Card
            img={educ.img}
            index={i}
            key={educ.nombre}
            nombre={educ.nombre}
            fecha={educ.fecha}
            url={educ.url}
          ></Card>
        ))}
      </div>
    </motion.div>
  );
}