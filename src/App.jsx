import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { motion } from "framer-motion"
import SobreMi from './components/SobreMi/SobreMi'
import Proyects from './components/Proyectos/Proyects'
import Educacion from './components/Educacion/Educacion'
import Skills from './components/Skills/Skills'
import ResponsiveAppBar from './components/Header/Navbar'

function App() {


  return (
    <div className='main' >
     <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path='/' element={<SobreMi />}></Route>
        <Route path='/proyectos' element={<Proyects />}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/educacion'element={<Educacion/>} ></Route>
        {/* <Route path='/navbar' element={<ResponsiveAppBar/>}></Route> */}
      </Routes>
      
    </div>
  )
}

export default App
