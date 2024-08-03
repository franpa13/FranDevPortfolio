import React from "react";
import Todolist from "/src/assets/proyectos/toDoList.png";
import appeperia from "/src/assets/proyectos/apepperia.png";
import Minialura from "/src/assets/proyectos/miniAlura.png";
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation";
import { FaReact } from "react-icons/fa";

import AvatarGroup from "@mui/material/AvatarGroup";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa6";
import "./AllProyect.css";
import Pokedex from "/src/assets/proyectos/pokedex.png";
import MercadoLibre from "/src/assets/proyectos/mercadoLibre.png";
import MendozaNews from "/src/assets/proyectos/MendozaNews.png";
import Calcu from "/src/assets/proyectos/calculadora.png";
import gitSearch from "/src/assets/proyectos/girhubSearch.png";
import Verdu from "/src/assets/proyectos/verduleria.png";
import CoffeSoph from "/src/assets/proyectos/CoffeShop.png";
import LoginNext from "/src/assets/proyectos//proyectoLogin.png";
import schoolWeb from "/src/assets/proyectos/schoolweb.jpg";
import Encriptador from "/src/assets/proyectos/encriptador.png";
import elRinconDelLibro from "/src/assets/proyectos/elRinconDelLibro.png";
import World from "/src/assets/proyectos/Word.png";
export default function Allproyects() {
  const proyectos = [
    {
      title: "Mendoza News",
      desciption:
        "Portal de noticias para la provincia de Mendoza, Argentina. Trabajé en el frontend, consumiendo APIs para mostrar, enviar y eliminar datos desde la sección de administración. También me aseguré de que el sitio web fuera responsive.",
      url: "https://github.com/franpa13/noticias",
      github: "https://github.com/franpa13/noticias",
      img: MendozaNews,
    },
    {
      title: "Github Search",
      desciption:
        "Aplicación para buscar usuarios en GitHub consumiendo distintos endpoints de la API de GitHub y mostrando toda la información de cada usuario.",
      url: "https://profile-git-jade.vercel.app/",
      github: "https://github.com/franpa13/ProfileGit",
      img: gitSearch,
    },
    {
      title: "School Web",
      desciption:
        "Plataforma diseñada para optimizar la gestión de calificaciones, asistencias y otros aspectos del rendimiento estudiantil, mejorando la interacción entre docentes y alumnos.",
      url: "https://genbytegestiondocente.software/",
      github: "https://github.com/franpa13/schoolWeb",
      img: schoolWeb,
    },
    {
      title: "Coffee Shop",
      desciption:
        "Proyecto frontend que muestra y filtra distintos tipos de café. Desarrollado con Vite, React y Tailwind CSS para los estilos y la capacidad responsive. Utiliza la API: https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json.",
      url: "https://coffe-tdf9.onrender.com/",
      github: "https://github.com/franpa13/Coffe",
      img: CoffeSoph,
    },
    {
      title: "El Rincon Del Libro",
      desciption:
        "Proyecto final del bootcamp de Digital House, en el cual trabajé en el backend (CRUD) y en el frontend usando HTML, CSS, JS y EJS.",
      url: "https://github.com/franpa13/sprintDigitalHouse",
      github: "https://github.com/franpa13/sprintDigitalHouse",
      img: elRinconDelLibro,
    },
    {
      title: "World Ranks",
      desciption:
        "Aplicación desarrollada con React y Tailwind CSS para practicar el manejo y filtrado de datos obtenidos de la API de países (https://restcountries.com/v3.1/all).",
      url: "https://country-page-one.vercel.app/",
      github: "https://github.com/franpa13/Country_page",
      img: World,
    },
    {
      title: "Mercado Libre",
      desciption:
        "Replica de Mercado Libre realizada como proyecto en el bootcamp de Digital House.",
      url: "https://mlibre.onrender.com/",
      github: "https://github.com/franpa13/mercado__libre__2.0/",
      img: MercadoLibre,
    },
    {
      title: "To Do List",
      desciption:
        "Proyecto final del curso de desarrollador web con React JS (ARG Programa).",
      url: "https://meek-blancmange-95f182.netlify.app/",
      github: "https://github.com/franpa13/ToDoList",
      img: Todolist,
    },
    {
      title: "Apperia Oracle",
      desciption:
        "Proyecto del bootcamp ONE (Oracle Next Education) en el que desarrollé la página de inicio de un sitio web.",
      url: "https://franpa13.github.io/apperia__proyecto__oracle/",
      github: "https://github.com/franpa13/apperia__proyecto__oracle",
      img: appeperia,
    },
    {
      title: "Encriptador",
      desciption:
        "Encriptador de oraciones creado con HTML, CSS y JavaScript (Challenge ONE).",
      url: "https://franpa13.github.io/encriptadorOracle/",
      github: "https://github.com/franpa13/encriptadorOracle",
      img: Encriptador,
    },
    {
      title: "Pokedex",
      desciption:
        "Aplicación para mostrar toda la Pokedex de Pokémon, practicando peticiones a la API PokeAPI.",
      url: "https://po-wmc2.onrender.com/",
      github: "https://github.com/franpa13/Pokedex",
      img: Pokedex,
    },
    {
      title: "Mini Alura",
      desciption:
        "Proyecto del bootcamp ONE (Oracle Next Education) utilizando Flexbox y media queries.",
      url: "https://franpa13.github.io/flexbox__responsividad/",
      github: "https://github.com/franpa13/flexbox__responsividad",
      img: Minialura,
    },
    {
      title: "Calculadora",
      desciption:
        "Proyecto para entender el DOM, desarrollado con HTML, CSS y JavaScript.",
      url: "https://calculadora-gtu1.onrender.com/",
      github: "https://github.com/franpa13/calculadora",
      img: Calcu,
    },
    {
      title: "Verduleria",
      desciption:
        "Proyecto del bootcamp de Digital House para desarrollar una web para una verdulería.",
      url: "https://monumental-starlight-dce362.netlify.app",
      github: "https://github.com/franpa13/verduleria",
      img: Verdu,
    },
    {
      title: "Log In",
      desciption:
        "Sistema de inicio de sesión realizado en Next.js con validaciones y diseño responsive usando Tailwind CSS. Usuario: admin@gmail.com, Contraseña: 123456789.",
      url: "https://loginnext.onrender.com/",
      github: "https://github.com/franpa13/LoginNext",
      img: LoginNext,
    },
  ];
  
  return (
    <section className="animate-fade-in-down  color">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h1 className="md:text-4xl text-2xl text-blue-500 font-bold mt-3 ">
          PROJECTS
        </h1>
        <Link to={"/"} className="flex justify-center items-center">
          <h2 className="text-white color text-xs md:text-lg flex justify-center items-center gap-0">
            <img
              className="w-1/12 mt-0"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaElEQVR4nO2YS09TQRiG+wOMCYpQBE5bCr3RC4ih/ReyOOnGX+LGHRIJIRZBEJFooaVcCm1pKZaiK1eyMNwkRQi3c05PbxBFwMwknxlIozGBjqtOI2/y5myfJ+ebL5NRKK5zndKKyi20qUaEA9XIwUGNW2hTlFI0I/u8avQAqUcFUI0IoHLvY86991BRCtF4RV7tEZDaI8B5S0lC4xV5jVdAmjERNF4RSkpCOy4568ZEVOcToY4IXC6Bat8KDxSswWvHRaQdl0Drk6CQBOfe31OwEu2k5KyfkFD9hASkNBKcW2BDQEfgJyXUMJkEUhoJ1cV2Kv4I6f0y3zCVRDp/EhqmLgQKSngEzHmE4h9ifUDmddNJpJ+WQecnpZDwCljjYwDeFJB5/YyMDDMy6ElpJMZERuBnZd4QkJExkAIDKZUEQ/DGYAqZQikwBlNAJyHh+glG4E2hFDLNpsEUIqWRIPBJBuDnMnxjOI0aw2loJAJUEkms9zMAX/tyvdMcSYM5kjkvnQQr8IPrXZa5DFiiGSBfOgmZHXhrNAPW+SxYo1lKCRmbAuniw3ME/l0WbKREgEoihU2zTMCvddhiWWiK5cBGSiFBtpMxmHIqWIglLOPmhRw0kVJINEbS2BxmBJ7EGkni5vgh0EiQ7aR0reCy9iV2BNSDax3N8RwUkiB/QNmzAmVPluB252dU3r3MjgQ3tNF1lQTZTlW9q3l4KO9ehYpnX3CFK1H8Q1xIgmynu3/Duzag8nkCKnsTuKJ/i10JW+wK+L5NqHzxFZT9W7hmcIcdidqh9aeWcBLMYRmqepavhh/YhupXO8C93sWcm4EbaD43Hn3gbz7+iKjgh/dA7RZAOypivY+BK0U+t9o/8RfbhgLeI4HOJ4NxMo3N/hw7Ene6V/kK1waig8+AeSYHltAhts0dsSOhdCX4yr5NRANvDR1Bc+QbtMwfY8fCCUMSvQleObCNaODvz/8Ae/wU7Iun2LHwkx2J6sEdnhveRTTwjsWz8zInoXmzz9eNiogG3sGqhG485TRMpBENvCMvET9Fre/Piv+0mI95Ouu0BA8RDbzjd9l43M3nXvi7syV6jCjhgTkBEkfsxEnGoxC8nbUR+jOt8TP+Kgk7a4f4XyTspQB/mYS9lODzIXNODitpK6szf53/Kb8AG3ixvWZNbgAAAAAASUVORK5CYII="
            />
            Volver al portfolio
          </h2>
        </Link>
      </div>
      <section class="flex flex-wrap flex-col justify-around gap-2 mt-6 md:gap-5  items-center p-2">
        {proyectos.map((project, i) => {
          return (
            <ScrollAnimation>
              <section className="flex justify-center">
                <div
                  id="zoomableDiv"
                  className="flex flex-col md:w-5/6 bordear md:gap-6 md:pb-5 items-start md:flex-row md:justify-start md:items-center md:px-20 justify-center w-full  p-2 overflow-hidden transition-transform duration-300 transform hover:scale-105"
                >
                  <img
                    class="w-full md:w-1/3 rounded-xl"
                    src={project.img}
                    alt=""
                  />
                  <div className="  flex flex-col gap-1">
                    <h2 className="font-semibold text-lg p-2 md:text-2xl text-gray-300">
                      {project.title}
                    </h2>
                    <p className="text-xs md:text-base font-semibold p-1">
                      {project.desciption}
                    </p>
                    <div className=" flex justify-start gap-2 items-center ">
                      <a target="_blank" href={project.url}>
                        <button className="demo font-semibold flex justify-center items-center px-2 rounded-lg h-6">
                          Ver demo
                        </button>
                      </a>
                      <a target="_blank" href={project.github}>
                        <Avatar alt="ver en Github" src="/git.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
          );
        })}
        <span className="flex items-center justify-center text-gray-400 my-6">
          2024 - Francisco Javier Paredes
        </span>
      </section>

      {/* {proyectos.map((project, i) => {
                return (
                    
                )
            })} */}
    </section>
  );
}
