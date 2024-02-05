import { motion } from 'framer-motion'
import React from 'react'
import MediaCard from './Card'

export default function Proyects() {

    const proyectos = [
        {
            title: "MINI ALURA",
            desciption: "Proyecto del bootcamp ONE(ORACLE NEXT EDUCATION) donde se usa flexbox y media querys",
            url: "https://franpa13.github.io/flexbox__responsividad/"
        },
      
        {
            title: "TO DO LIST",
            desciption: "PROYECTO FINAL DEL CURSO DESARROLLADOR WEB CON REACT JS(ARG PROGRAMA)",
            url: "https://meek-blancmange-95f182.netlify.app/"
        },
        {
            title: "APEPERIA ORACLE",
            desciption: "Proyecto del bootcamp ONE(ORACLE NEXT EDUCATION) donde hice la home de una pagina web",
            url: "https://franpa13.github.io/apperia__proyecto__oracle/"
        },
        {
            title: "ENCRIPTADOR",
            desciption: "ENCRIPTADOR DE ORACIONES CREADO CON HTML,CSS , JS (CHALLENGE ONE)",
            url: "https://franpa13.github.io/encriptadorOracle/"
        },
        {
            title: "POKEDEX ",
            desciption: "PRACTICANDO PETICIONES A LA API POKEAPI",
            url: "https://po-wmc2.onrender.com/"
        },
        {
            title: "MERCADO LIBRE",
            desciption: "PROYECTO REALIZADO EN EL BOOTCAMP DE DIGITAL HOUSE, EL CUAL CONSISTIA EN REALIZAR UNA REPLICA DE MERCADO LIBRE",
            url: "https://mlibre.onrender.com/",
        },
        {
            title: "CALCULADORA",
            desciption: "PROYECTO REALIZADO CON FIN DE ENTENDER DE MANERA CORRECTA EL DOM",
            url: "https://calculadora-gtu1.onrender.com/"
        },
        {
            title: "VERDULERIA",
            desciption: "PROYECTO REALIZADO EN EL BOOTCAMP DE DIGITAL HOUSE",
            url: "https://monumental-starlight-dce362.netlify.app"
        },
        {
            title: "LOG IN",
            desciption: "LOG IN REALIZADO EN NEXT JS CON SUS RESPECTIVAS VALIDACIONES , RESPONSIVO DONDE USE  TAILWIND CSS PARA LOS ESTILOS - USER : admin@gmail.com , PAASSWORD : 123456789",
            url: "https://loginnext.onrender.com/",
        },

    ]
    return (


        <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} i className='text-red-600 z-100 flex flex-col p-5 gap-8' >

            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='text-lg text-center font-semibold md:text-2xl'
            >Proyectos</motion.h1>
            <div className='w-full flex flex-row flex-wrap justify-beetween gap-8 justify-center items-center '>

                {
                    proyectos.map((p, i) => {
                        return (

                            <MediaCard index={i} title={p.title} description={p.desciption} url={p.url} >

                            </MediaCard>
                        )
                    })
                }

            </div>

        </motion.div >


    )

}