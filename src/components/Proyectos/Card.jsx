

import Button from '@mui/material/Button';
import "./Card.css"

import Todolist from "/src/assets/proyectos/toDoList.png"
import appeperia from "/src/assets/proyectos/apepperia.png"
import Minialura from "/src/assets/proyectos/miniAlura.png"
import Pokedex from "/src/assets/proyectos/pokedex.png"
import MercadoLibre from "/src/assets/proyectos/mercadoLibre.png"
import MendozaNews from "/src/assets/proyectos/MendozaNews.png"
import Calcu from "/src/assets/proyectos/calculadora.png"
import Verdu from "/src/assets/proyectos/verduleria.png"
import CoffeSoph from "/src/assets/proyectos/CoffeShop.png"
import { Avatar } from '@mui/material';
import LoginNext from "/src/assets/proyectos//proyectoLogin.png"
import Encriptador from "/src/assets/proyectos/encriptador.png"
import elRinconDelLibro from "/src/assets/proyectos/elRinconDelLibro.png"
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import { CSSTransition } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export default function MediaCard({ title, description, url, index, github }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('target-element').offsetTop;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <ScrollAnimation>
      <div className='flex-col md:flex-row md:w-full rounded-sm flex gap-4 p-5 md:p-10 relative overflow-hidden transform transition-transform duration-300 hover:scale-95'>
        <div className='md:w-2/5' >

          {index === 0 && (
            <img src={MendozaNews} alt="" />
          )}
          {index === 1 && (
            <img src={CoffeSoph} alt="" />
          )}
          {index === 2 && (
            <img src={elRinconDelLibro} alt="" />
          )}
          {index === 3 && (
            <img src={MercadoLibre} alt="" />
          )}

          {index === 4 && (
            <img src={Todolist} alt="" />
          )}
          {index === 5 && (
            <img src={appeperia} alt="" />
          )}
          {index === 6 && (
            <img src={Encriptador} alt="" />
          )}
          {index === 7 && (
            <img src={Pokedex} alt="" />
          )}
          {index === 8 && (
            <img src={Minialura} alt="" />
          )}
          {index === 9 && (
            <img src={Calcu} alt="" />
          )}
          {index === 10 && (
            <img src={Verdu} alt="" />
          )}
          {index === 11 && (
            <img src={LoginNext} alt="" />
          )}
        </div>
        <div className='md:w-3/5 flex flex-col items-startjustify-between gap-6'>
          <div className='flex flex-col gap-2'>

            <h2 className='md:text-2xl text-sm font-medium'>{title}</h2>
            <p className='text-sm md:text-base'>{description}</p>
          </div>
          <div className='flex gap-2 justify-start items-center'>

            <a href={url} target='_blank' >
              <button className="bg-blue-700 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded">Ver Demo</button>
            </a>
            <a target='_blank' href={github}>


              <Avatar alt="Remy Sharp" src="/git.png" />
            </a>
          </div>
        </div>
        <div className='linea flex justify-center'>

        </div>
      </div>
    </ScrollAnimation>
  );
}



{/* <motion.div id="target-element"  whileHover={{ scale: 1.08 }} className=' md:w-1/2 h-full flex flex-row  bg-blue-600 p-2 rounded-md'> */ }
{/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}

        className='flex flex-col h-full justify-around items-start gap-2'>
        <p

          className='font-semibold text-sm mt-2' >{title}</p>
        <span className='text-sm md:text-base'>{description}</span>
        <a href={url} target='_blank' >
          <button className="bg-blue-900 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded">Ver Demo</button>

        </a>

      </motion.div> */}
// </motion.div>
