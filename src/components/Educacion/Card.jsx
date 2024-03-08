import React from 'react'
import { motion } from 'framer-motion'
import "./Card.css"
import digitalHouse from "/src/assets/certificados/DIGITAL HOUSE.png"
import { Button } from '@mui/material'
import Oracle from "/src/assets/certificados/ORACLE NEXT EDUCATION.png"
import ArgPrograma from "/src/assets/certificados/ARG PROGRAMA.png"
import Yopuedo from "/src/assets/certificados/YO PUEDO PROGRAMAR.png"
import Taller from "/src/assets/certificados/TALLER DON WEB.png"
import Reactutn from "/src/assets/certificados/REACT UTN.png"
import Egg from "/src/assets/certificados/EGG.png"
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

// import { Card,CardMedia,Typography,CardContent } from '@mui/material'
export default function Card({ nombre, fecha, url, index }) {
    return (
        // <div className='justify-center items-center p-6'>
        <motion.div whileHover={{ scale: 1.08 }} className='  md:w-1/5 flex flex-col  card p-2 rounded-md'>
            {index === 0 && (
                <img src={digitalHouse} alt="" />
            )}
            {index === 1 && (
                <img src={Oracle} alt="" />
            )}
            {index === 2 && (
                <img src={ArgPrograma} alt="" />
            )}
            {index === 3 && (
                <img src={Yopuedo} alt="" />
            )}
            {index === 4 && (
                <img src={Taller} alt="" />
            )}
            {index === 5 && (
                <img src={Reactutn} alt="" />
            )}
            {index === 6 && (
                <img src={Egg} alt="" />
            )}
            <ScrollAnimation>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.6, duration: 0.8 } }}
                    className='flex flex-col h-full justify-around items-start gap-2'>
                    <p

                        className='font-semibold text-sm mt-2' >{nombre}</p>
                    <span className='text-xs'>{fecha}</span>
                    <a href={url} target='_blank' >
                    <Button variant="contained"><span className='font-semibold flex justify-center items-center gap-2'>
                       Ver certificado  </span></Button>

                    </a>

                </motion.div>
            </ScrollAnimation >
        </motion.div>
        // </div>
    )
}
