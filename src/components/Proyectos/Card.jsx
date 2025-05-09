import Button from "@mui/material/Button";
import "./Card.css";

import Todolist from "/src/assets/proyectos/toDoList.png";
import appeperia from "/src/assets/proyectos/apepperia.png";
import Minialura from "/src/assets/proyectos/miniAlura.png";
import Pokedex from "/src/assets/proyectos/pokedex.png";
import MercadoLibre from "/src/assets/proyectos/mercadoLibre.png";
import MendozaNews from "/src/assets/proyectos/MendozaNews.png";
import rimberio from "/src/assets/proyectos/rimberio.png";
import Calcu from "/src/assets/proyectos/calculadora.png";
import Verdu from "/src/assets/proyectos/verduleria.png";
import CoffeSoph from "/src/assets/proyectos/CoffeShop.png";
import { Avatar } from "@mui/material";
import githubSearch from "/src/assets/proyectos/girhubSearch.png";
import LoginNext from "/src/assets/proyectos//proyectoLogin.png";
import Encriptador from "/src/assets/proyectos/encriptador.png";
import elRinconDelLibro from "/src/assets/proyectos/elRinconDelLibro.png";
import World from "/src/assets/proyectos/Word.png";
import SchoolWeb from "/src/assets/proyectos/schoolweb.png";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { CSSTransition } from "react-transition-group";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MediaCard({
  title,
  description,
  url,
  index,
  github,
  img,
}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("target-element").offsetTop;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ScrollAnimation>
      <div className="flex-col shadow-lg md:flex-row md:w-full rounded-sm flex gap-4 p-2 md:p-10 relative overflow-hidden transform transition-transform duration-300 hover:scale-95">
        <div className="md:w-2/5">
          {/* 
          {index === 0 && (
            <img src={MendozaNews} alt="" />
          )}
            {index === 1 && (
            <img src={rimberio} alt="" />
          )}
          {index === 2 && (
            <img src={SchoolWeb} alt="" />
          )}
          {index === 3 && (
            <img src={elRinconDelLibro} alt="" />
          )}
          {index === 4&& (
            <img src={World} alt="" />
          )} */}
          <img className="rounded-xl" src={img} alt={title} />
        </div>
        <div className="md:w-3/5 flex flex-col items-startjustify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="md:text-2xl text-sm font-medium">{title}</h2>
            <p className="text-xs md:text-base">{description}</p>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <a href={url} target="_blank">
              <button className="bg-blue-700 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded">
                Ver Demo
              </button>
            </a>
            <a target="_blank" href={github}>
              <Avatar alt="Remy Sharp" src="/git.png" />
            </a>
          </div>
        </div>
        <div className="linea md:w-full w-1/2 flex justify-center"></div>
      </div>
    </ScrollAnimation>
  );
}
