import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion";
import SobreMi from './components/SobreMi/SobreMi';
import Proyects from './components/Proyectos/Proyects';
import Educacion from './components/Educacion/Educacion';
import ResponsiveAppBar from './components/Header/Navbar';
import Allproyects from './pages/AllProyects/Allproyects';

function App() {
  return (

    <div className='main'>

      <Routes>
        <Route path='/' element={
          <div className=''>
            <ResponsiveAppBar></ResponsiveAppBar>
            <SobreMi />
            <Proyects />
            <Educacion />
          </div>
        } />
        <Route path='/proyects' element={<Allproyects />} />
      </Routes>
    </div>

  );
}

export default App;
