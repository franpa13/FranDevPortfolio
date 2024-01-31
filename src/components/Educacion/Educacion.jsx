import React from 'react'
import {motion} from "framer-motion"
export default function Educacion() {
  return (
    <div> <motion.div initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }} i className='text-red-600 z-100' >Probando Educacion </motion.div ></div>
  )
}
