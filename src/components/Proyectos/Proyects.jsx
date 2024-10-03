import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { Button } from "@mui/material";
import { FaCodeBranch } from "react-icons/fa";
import MendozaNews from "/src/assets/proyectos/MendozaNews.png"
import rimberio from "/src/assets/proyectos/rimberio.png"
import elRinconDelLibro from "/src/assets/proyectos/elRinconDelLibro.png"
import World from "/src/assets/proyectos/Word.png"
import SchoolWeb from "/src/assets/proyectos/schoolweb.png"
import React from "react";
import MediaCard from "./Card";

export default function Proyects() {
  const proyectos = [
    {
      title: "Mendoza News",
      desciption:
        "Portal de noticias para la provincia de Mendoza, Argentina. Trabajé en el frontend, consumiendo APIs para mostrar, enviar y eliminar datos desde la sección de administración. También me aseguré de que el sitio web fuera responsive.",
      url: "https://github.com/franpa13/noticias",
      github: "https://github.com/franpa13/noticias",
      img:MendozaNews ,
    },
    {
      title: "Cafetería Rimberio",
      desciption:
        "Landing Page para la Cafetería Rimberio con un diseño moderno y responsive. Cuenta con 3 secciones principales: Inicio, Contacto y Productos, donde se destaca la oferta de la cafetería y permite a los usuarios explorar el menú y obtener información de contacto fácilmente.",
      url: "https://landing-page-mzafzaqhz-franpa13s-projects.vercel.app/",
      github: "https://github.com/franpa13/landingPage",
      img:rimberio , 
    },
    {
      title: "School Web",
      desciption:
        "Plataforma diseñada para optimizar la gestión de calificaciones, asistencias y otros aspectos del rendimiento estudiantil, mejorando la interacción entre docentes y alumnos.",
      url: "https://genbytegestiondocente.software/",
      github: "https://github.com/franpa13/schoolWeb",
      img:SchoolWeb ,
    },
    {
      title: "El Rincon Del Libro",
      desciption:
        "Proyecto final del bootcamp de Digital House, en el cual trabajé en el backend (CRUD) y en el frontend usando HTML, CSS, JS y EJS.",
      url: "https://github.com/franpa13/sprintDigitalHouse",
      github: "https://github.com/franpa13/sprintDigitalHouse",
      img:elRinconDelLibro
    },
    {
      title: "World Ranks",
      desciption:
        "Aplicación desarrollada con React y Tailwind CSS para practicar el manejo y filtrado de datos obtenidos de la API de países (https://restcountries.com/v3.1/all).",
      url: "https://country-page-one.vercel.app/",
      github: "https://github.com/franpa13/Country_page",
      img:World
    },
    {
      title: "Github Search",
      desciption:
        "Aplicación para buscar usuarios en GitHub consumiendo distintos endpoints de la API de GitHub.",
      url: "https://profile-git-jade.vercel.app/",
      github: "https://github.com/franpa13/ProfileGit",
      
    },
    {
      title: "Mercado Libre",
      desciption:
        "Replica de Mercado Libre realizada como proyecto en el bootcamp de Digital House.",
      url: "https://mlibre.onrender.com/",
      github: "https://github.com/franpa13/mercado__libre__2.0/",
    },
    {
      title: "To Do List",
      desciption:
        "Proyecto final del curso de desarrollador web con React JS (ARG Programa).",
      url: "https://meek-blancmange-95f182.netlify.app/",
      github: "https://github.com/franpa13/ToDoList",
    },
    {
      title: "Apperia Oracle",
      desciption:
        "Proyecto del bootcamp ONE (Oracle Next Education) en el que desarrollé la página de inicio de un sitio web.",
      url: "https://franpa13.github.io/apperia__proyecto__oracle/",
      github: "https://github.com/franpa13/apperia__proyecto__oracle",
    },
    {
      title: "Encriptador",
      desciption:
        "Encriptador de oraciones creado con HTML, CSS y JavaScript (Challenge ONE).",
      url: "https://franpa13.github.io/encriptadorOracle/",
      github: "https://github.com/franpa13/encriptadorOracle",
    },
    {
      title: "Pokedex",
      desciption:
        "Aplicación para mostrar toda la Pokedex de Pokémon, practicando peticiones a la API PokeAPI.",
      url: "https://po-wmc2.onrender.com/",
      github: "https://github.com/franpa13/Pokedex",
    },
    {
      title: "Mini Alura",
      desciption:
        "Proyecto del bootcamp ONE (Oracle Next Education) utilizando Flexbox y media queries.",
      url: "https://franpa13.github.io/flexbox__responsividad/",
      github: "https://github.com/franpa13/flexbox__responsividad",
    },
    {
      title: "Calculadora",
      desciption:
        "Proyecto para entender el DOM, desarrollado con HTML, CSS y JavaScript.",
      url: "https://calculadora-gtu1.onrender.com/",
      github: "https://github.com/franpa13/calculadora",
    },
    {
      title: "Verduleria",
      desciption:
        "Proyecto del bootcamp de Digital House para desarrollar una web para una verdulería.",
      url: "https://monumental-starlight-dce362.netlify.app",
      github: "https://github.com/franpa13/verduleria",
    },
    {
      title: "Log In",
      desciption:
        "Sistema de inicio de sesión realizado en Next.js con validaciones y diseño responsive usando Tailwind CSS. Usuario: admin@gmail.com, Contraseña: 123456789.",
      url: "https://loginnext.onrender.com/",
      github: "https://github.com/franpa13/LoginNext",
    },
  ];

  return (
    <div id="proyectos">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        i
        className="text-red-600 bgprueba parabg z-100 flex flex-col items-center justify-center p-5 gap-8"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-center border-b-2 w-1/2 md:w-1/4 border-b-blue-600 color flex justify-center items-center gap-4 font-semibold md:text-2xl md:pb-1 relative z-10"
        >
          <LiaProjectDiagramSolid className="" /> Proyectos
        </motion.h1>

        <div className="md:w-full  flex flex-col md:justify-center items-center gap-6 px-1 md:px-24">
          {proyectos.slice(0, 5).map((p, i) => {
            return (
              <MediaCard
                key={i}
                github={p.github}
                index={i}
                title={p.title}
                description={p.desciption}
                url={p.url}
                img={p.img}
              />
            );
          })}
        </div>

        <Link to={"/proyects"}>
          <Button variant="contained">
            <span className="font-semibold flex justify-center items-center gap-2">
              Ver todos <FaCodeBranch className="md:text-xl" />{" "}
            </span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
