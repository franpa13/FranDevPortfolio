import React from 'react'
import { motion } from 'framer-motion'
import digitalHouse from "/PORTFOLIO REACT/public/certificados/DIGITAL HOUSE.png"
import Oracle from "/PORTFOLIO REACT/public/certificados/ORACLE NEXT EDUCATION.png"
import ArgPrograma from "/PORTFOLIO REACT/public/certificados/ARG PROGRAMA.png"
import Yopuedo from "/PORTFOLIO REACT/public/certificados/YO PUEDO PROGRAMAR.png"
import Taller from "/PORTFOLIO REACT/public/certificados/TALLER DON WEB.png"
import Reactutn from "/PORTFOLIO REACT/public/certificados/REACT UTN.png"
import Egg from "/PORTFOLIO REACT/public/certificados/EGG.png"
import { Button } from '@mui/material'
// import { Card,CardMedia,Typography,CardContent } from '@mui/material'
export default function Card({ nombre, fecha, url, index }) {
    return (
        // <div className='justify-center items-center p-6'>
        <motion.div   whileHover={{ scale: 1.08 }} className='  md:w-1/5 flex flex-col  bg-blue-600 p-2 rounded-md'>
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

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.6, duration: 0.8 } }}
                className='flex flex-col h-full justify-around items-start gap-2'>
                <p

                    className='font-semibold text-sm mt-2' >{nombre}</p>
                <span className='text-xs'>{fecha}</span>
                <a href={url} target='_blank' >
                    <Button variant="contained" color='success'>Ver Certificado</Button>

                </a>

            </motion.div>
        </motion.div>
        // </div>
    )
}
