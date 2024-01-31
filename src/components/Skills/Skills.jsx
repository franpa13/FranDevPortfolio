import React from 'react'
import {motion} from "framer-motion"
export default function Skills() {
  return (
    <>
    
    <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} i className='text-red-600 z-100' >Probando animaciones a ver q onda che</motion.div >
    </>
  )
}
