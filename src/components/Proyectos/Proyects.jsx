import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { Button } from '@mui/material'
import { FaCodeBranch } from "react-icons/fa";

import React from 'react'
import MediaCard from './Card'



export default function Proyects() {

    const proyectos = [
        {
            title: "Mendoza News",
            desciption: "Proyecto para un portal de noticias de la provincia de Mendoza,Argentina ,donde trabaje especificamente en la parte del front, consumiendo apis(mostrando,enviando y eliminando datos desde la parte del admin),y trabajando en hacer el sitio web responsive",
            url: "https://github.com/franpa13/noticias",
            github: "https://github.com/franpa13/noticias"
        },
        {
            title: "Coffee Shop",
            desciption: "Proyecto frontend donde muestro y filtro los distintos tipos de cafe que se ofrecen, trabajando con Vite + React y Tailwind css para los estilos y el responsive de la web ,api: https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json ",
            url: "https://coffe-tdf9.onrender.com/",
            github: "https://github.com/franpa13/Coffe"
        },
        {
            title: "El Rincon Del Libro",
            desciption: "Proyecto final del bootcamp de Digital House, donde me encargue tanto del back(CRUD) como del front(trabajando con html,css y js junto con ejs) ",
            url: "https://github.com/franpa13/sprintDigitalHouse",
            github: "https://github.com/franpa13/sprintDigitalHouse"
        },
        {
            title: "MERCADO LIBRE",
            desciption: "PROYECTO REALIZADO EN EL BOOTCAMP DE DIGITAL HOUSE, EL CUAL CONSISTIA EN REALIZAR UNA REPLICA DE MERCADO LIBRE",
            url: "https://mlibre.onrender.com/",
            github: "https://github.com/franpa13/mercado__libre__2.0/"
        },

        {
            title: "TO DO LIST",
            desciption: "PROYECTO FINAL DEL CURSO DESARROLLADOR WEB CON REACT JS(ARG PROGRAMA)",
            url: "https://meek-blancmange-95f182.netlify.app/",
            github: "https://github.com/franpa13/ToDoList"
        },
        {
            title: "APEPERIA ORACLE",
            desciption: "Proyecto del bootcamp ONE(ORACLE NEXT EDUCATION) donde hice la home de una pagina web",
            url: "https://franpa13.github.io/apperia__proyecto__oracle/",
            github: "https://github.com/franpa13/apperia__proyecto__oracle"
        },
        {
            title: "ENCRIPTADOR",
            desciption: "ENCRIPTADOR DE ORACIONES CREADO CON HTML,CSS , JS (CHALLENGE ONE)",
            url: "https://franpa13.github.io/encriptadorOracle/",
            github: "https://github.com/franpa13/encriptadorOracle"
        },
        {
            title: "POKEDEX ",
            desciption: "PRACTICANDO PETICIONES A LA API POKEAPI, DONDE MUESTRO TODA LA POKEDEX DE POKEMON",
            url: "https://po-wmc2.onrender.com/",
            github: "https://github.com/franpa13/Pokedex"
        },
        {
            title: "MINI ALURA",
            desciption: "Proyecto del bootcamp ONE(ORACLE NEXT EDUCATION) donde se usa flexbox y media querys",
            url: "https://franpa13.github.io/flexbox__responsividad/",
            github: "https://github.com/franpa13/flexbox__responsividad"
        },

        {
            title: "CALCULADORA",
            desciption: "PROYECTO REALIZADO CON FIN DE ENTENDER DE MANERA CORRECTA EL DOM, TRABAJE CON HTML,CSS,JS",
            url: "https://calculadora-gtu1.onrender.com/",
            github: "https://github.com/franpa13/calculadora"
        },
        {
            title: "VERDULERIA",
            desciption: "PROYECTO REALIZADO EN EL BOOTCAMP DE DIGITAL HOUSE DONDE REALIZAMOS UNA WEB A UNA VERDULERIA",
            url: "https://monumental-starlight-dce362.netlify.app",
            github: "https://github.com/franpa13/verduleria"
        },
        {
            title: "LOG IN",
            desciption: "LOG IN REALIZADO EN NEXT JS CON SUS RESPECTIVAS VALIDACIONES , RESPONSIVO DONDE USE  TAILWIND CSS PARA LOS ESTILOS - USER : admin@gmail.com , PAASSWORD : 123456789",
            url: "https://loginnext.onrender.com/",
            github: "https://github.com/franpa13/LoginNext"
        },

    ]
    return (

        <div id='proyectos' >
            <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} i className='text-red-600 bgprueba parabg z-100 flex flex-col items-center justify-center p-5 gap-8' >


                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='text-lg text-center border-b-2 w-1/2 md:w-1/4 text-blue-500 border-blue-500 flex justify-center items-center gap-4 font-semibold md:text-2xl md:pb-1 relative z-10'
                >
                    <LiaProjectDiagramSolid className='text-blue-600' /> Proyectos
                </motion.h1>


                <div className='md:w-full flex flex-col md:justify-center items-center gap-6 px-1 md:px-24'>

                    {
                        proyectos.slice(0, 4).map((p, i) => {
                            return (
                                <MediaCard key={i} github={p.github} index={i} title={p.title} description={p.desciption} url={p.url} />
                            )
                        })
                    }

                </div>

                <Link to={"/proyects"}>
                    <Button variant="contained"><span className='font-semibold flex justify-center items-center gap-2'>
                       Ver todos   <FaCodeBranch className='md:text-xl' />  </span></Button>

                </Link>

            </motion.div >

        </div>

    )

}