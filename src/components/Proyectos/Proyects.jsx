import { motion } from 'framer-motion'
import React from 'react'


export default function Proyects() {
    return (
        <>

            <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} i className='text-red-600 z-100' >Probando proyectos</motion.div >

        </>
    )
}
