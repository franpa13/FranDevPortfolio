import * as React from 'react';

import Button from '@mui/material/Button';
import Todolist from "/PORTFOLIO REACT/public/proyectos/ToDoList.png"
import appeperia from "/PORTFOLIO REACT/public/proyectos/apepperia.png"
import Minialura from "/PORTFOLIO REACT/public/proyectos/miniAlura.png"
import Pokedex from "/PORTFOLIO REACT/public/proyectos/pokedex.png"
import MercadoLibre from "/PORTFOLIO REACT/public/proyectos/mercadoLibre.png"
import Calcu from "/PORTFOLIO REACT/public/proyectos/calculadora.png"
import Verdu from "/PORTFOLIO REACT/public/proyectos/verduleria.png"
import LoginNext from "/PORTFOLIO REACT/public/proyectos/proyectoLogin.png"
import Encriptador from "/PORTFOLIO REACT/public/proyectos/encriptador.png"

import { motion } from 'framer-motion';


export default function MediaCard({ title, description, url, index }) {
  return (
    <motion.div whileHover={{ scale: 1.08 }} className='  md:w-1/4 h-full flex flex-col  bg-blue-600 p-2 rounded-md'>

      {index === 0 && (
        <img src={Minialura} alt="" />
      )}
      {index === 1 && (
        <img src={Todolist} alt="" />
      )}
      {index === 2 && (
        <img src={appeperia} alt="" />
      )}
      {index === 3 && (
        <img src={Encriptador} alt="" />
      )}
      {index === 4 && (
        <img src={Pokedex} alt="" />
      )}
      {index === 5 && (
        <img src={MercadoLibre} alt="" />
      )}
      {index === 6 && (
        <img src={Calcu} alt="" />
      )}
      {index === 7 && (
        <img src={Verdu} alt="" />
      )}
      {index === 8 && (
        <img src={LoginNext} alt="" />
      )}


      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
  
        className='flex flex-col h-full justify-around items-start gap-2'>
        <p

          className='font-semibold text-sm mt-2' >{title}</p>
        <span className='text-xs'>{description}</span>
        <a href={url} target='_blank' >
          <Button variant="contained" color='success'>Ver..</Button>

        </a>

      </motion.div>
    </motion.div>
  );
}
