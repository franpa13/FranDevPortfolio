
import React, { useRef } from 'react';

import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '@mui/material/Alert';
import { BsListCheck } from "react-icons/bs";
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import { FaPersonSwimming } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "/src/assets/ParedesFrancisco.jpeg"
import { GiBodyBalance } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaPersonRunning } from "react-icons/fa6";
import { useEffect, useState } from 'react';

import { Tooltip, IconButton } from '@mui/material';
import "./SobreMi.css"
import { motion } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#fdfdfd',
    borderRadius: 2,
    border: 'none',
    boxShadow: 24,
    p: 2,
    '@media (min-width: 768px)': {
        width: 500,
        p: 2
    },

};
const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
};

export default function SobreMi() {
    const form = useRef();
    const [alerta, setAlert] = useState(false)
    const [colorIndex, setColorIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const colors = ['text-red-500', 'text-blue-200', 'text-yellow-500', "text-green-400"];
    // const notify = () => toast.success("Mensaje enviado correctamente, respondere a la brevedad... saludos !!");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_321i4q6', 'template_3oakbci', form.current, 'AVnu_VMQjQjI8K_U7')
            .then((result) => {
                console.log(result.text);
                toast.success("Mensaje enviado correctamente, respondere a la brevedad... saludos !!");
                setOpen(false)

            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 500); // Cambia el tiempo según lo deseado (en milisegundos)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id='inicio' className='parabg'>

            <motion.div
                className='z-100  text-rose-500  probando flex flex-col'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}

            >

                <div className='flex flex-col p-2 gap-2 ' >
                    <span className='text-xs font-light opacity-80 md:text-xl flex items-center'>¡Hola! <img className='w-4 md:w-8' src="data:image/png;base64,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"></img>, mi nombre es :</span>
                    <div className=' flex gap-2 justify-center items-center md:justify-start md:items-center  md:ml-48  '>
                        <span className={`transition-colors duration-500 ${colors[colorIndex]} text-xl md:text-4xl`}>&lt;</span>
                        <h1 className='text-xl font-semibold semibold  fran md:text-4xl '>Francisco Javier Paredes</h1>
                        <span className={`transition-colors duration-500 ${colors[colorIndex]} text-xl md:text-4xl`}>/&gt;</span>
                    </div>
                    <motion.p
                        className='w-full full text-white text-center font-normal block md:hidden'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
                    >
                        Full Stack Developer
                    </motion.p>

                </div>
                <div className='md:flex  md:justify-center md:flex-row-reverse md:mt-0 '>
                    <div className='w-full  flex  flex-col justify-center items-center md:justify-start md:items-center md:w-full md:mt-0 md:mb-0'>

                        <div className='w-full md:flex md:flex-row-reverse gap-36' >
                            <div className='w-full md:w-1/3 flex flex-col justify-center items-center animate-fade-in-right'>

                                <div className='mb-5 md:mb-4flex flex-col relative md:w-full w-1/2  '>

                                    <motion.p
                                        className='w-full full text-white pb-2 text-center font-normal md:mb-0 md:text-center md:text-2xl hidden md:block md:w-full '
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
                                    >
                                        Full Stack Developer
                                    </motion.p>
                                    <div class="absolute inline bottom-0  bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-1 w-full  blur-sm"></div>
                                </div>

                                <img className='w-1/2 md:w-2/3 shadow-lg rounded-lg  transform transition-transform duration-200 hover:scale-105' src={img} alt="" />
                                <button className='bg-blue-500  transform transition-transform duration-200 hover:scale-105 text-xs p-1 md:text-base hover:bg-blue-800 mt-3 text-white md:font-bold md:py-1 md:px-4 rounded animate-pulse' color="success" onClick={handleOpen}>Contactame</button>
                            </div>
                            <Modal
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <Box sx={style}>
                                    <form className='w-full field flex flex-col items-center gap-4' ref={form} onSubmit={sendEmail}>
                                        <label className='text-black flex flex-col w-full'  >Name

                                            <input required className='text-black border border-solid text-sm p-2 font-semibold border-blue-600' type="text" name="user_name" />
                                        </label>
                                        <label className='text-black flex flex-col w-full'>Email
                                            <input required className='text-black border border-solid p-2 text-sm font-semibold  border-blue-600' type="email" name="user_email" />

                                        </label>
                                        <label className='text-black flex flex-col w-full'>Message
                                            <textarea required className='text-black border border-solid p-1 text-sm font-semibold  border-blue-600' name="message" />

                                        </label>
                                        <input className=' bg-blue-700 p-2 w-1/2 text-white cursor-pointer ' type="submit" valuep-3="Send" />
                                    </form>
                                </Box>



                            </Modal>
                            <div className='md:w-2/3 w-full flex gap-2 flex-col justify-center items-center animate-fade-in-right p-2 md:flex-row mt-4 '>
                                <div className='flex flex-col justify-center items-center gap-2  transform transition-transform duration-200 hover:scale-105'>

                                    <svg className=" md:size-28 size-14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="#38bdf8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 8h0m3 0h0m3 0h0m-8 3h16M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"></path> </svg>
                                    <h2 className='text-gray-400 md:text-xl'>Frontend</h2>
                                    <p className='font-semibold interfaz text-sm text-center md:text-lg'>Interfaces de usuario intuitivas y visualmente atractivas. Responsive design  <span className='text-gray-300'> y seguimiento de las últimas tendencias en diseño web.</span></p>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2  transform transition-transform duration-200 hover:scale-105'>
                                    <svg class="md:size-28 size-14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="#38bdf8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m8 9 3 3-3 3m5 0h3M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"></path> </svg>
                                    <h2 className='text-gray-400 md:text-xl'>Backend</h2>
                                    <p className='font-semibold interfaz text-sm text-center md:text-lg'>Arquitectura. Diseño de la base de datos. <span className='text-gray-300'>Implementación de APIs seguras y eficientes. Nuevas funcionalidades.</span></p>
                                </div>
                            </div>
                        </div>





                        <ToastContainer
                            toastClassName={(context) =>
                                contextClass[context?.type || "default"] +
                                " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
                            }
                            bodyClassName={() => "text-sm font-white font-med block p-3"}
                            position="bottom-left"
                            autoClose={4000}
                        />
                        {/* <div className='flex flex-col  gap-2 mt-12 md:py-4  md:hidden ' >
                            <div>

                                <h2 className='text-center text-lg  text-blue-500'>Soft Skills : </h2>
                            </div>
                            <div>


                                <Tooltip title="Compañerismo" >
                                    <IconButton>
                                        <GroupAddRoundedIcon ></GroupAddRoundedIcon>

                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Proactividad" >
                                    <IconButton>
                                        <FaPersonRunning />

                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Trabajo en equipo" >
                                    <IconButton>
                                        <RiTeamLine />

                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Responsabilidad" >
                                    <IconButton>
                                        <BsListCheck />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Constancia" >
                                    <IconButton>
                                        <FaPersonSwimming />
                                    </IconButton>
                                </Tooltip>
                            </div>

                        </div> */}
                    </div>
                    {/* <div className='md:flex  md:items-center md:justify-around mt-2 p-2 md:w-1/2 md:flex-col md:mt-12 md:ml-0 md:p-0' >
                        <motion.p className='md:text-xl ' initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.4, duration: 0.8 } }}>Tengo 22 años , estudiante de Analista Programador en la UNJU, Argentina. En paralelo realice distintos tipos de bootcamps y cursos para poder seguir ampliando mis conocimientos en este hermoso mundo del Desarrollo Web.
                        </motion.p> */}
                    {/* <h2 className='text-center   text-xl text-blue-400 font-semibold m-4'>Experiencia: </h2> */}
                    {/* <motion.p className='md:text-xl ' initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.4, duration: 0.8 } }}>
                            <ul className='flex flex-col gap-6 text-sm'>
                                Desarrollador Frontend | Genbyte Solutions (Consultora web) | Remoto | Octubre 2023 - Actualidad
                                <li>
                                    - Diseñé y desarrollé interfaces de usuario responsivas utilizando HTML, JavaScript y React.js, complementados con CSS y Tailwind CSS para los estilos.

                                </li>
                                <li>
                                    - Colaboré estrechamente con diseñadores y desarrolladores backend para implementar y mejorar las funcionalidades de las aplicaciones web, utilizando el framework Next.js.

                                </li>
                                <li>
                                    - Trabajé con código antiguo en proyectos ya existentes, optimizando el rendimiento de las aplicaciones web mediante técnicas de carga y renderizado eficientes.

                                </li>
                            </ul>




                        </motion.p> */}
                    {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.6, duration: 0.8 } }}
                            className='flex  gap-2 mt-2 md:py-4 hidden md:block md:flex md:justify-center md:flex-col ' >
                            <div>

                                <h2 className='text-center   text-xl text-blue-400 font-semibold'>Soft Skills : </h2>
                            </div>
                            <div className='flex gap-16'>


                                <Tooltip title="Compañerismo" >
                                    <IconButton>
                                        <GroupAddRoundedIcon className='md:text-3xl'></GroupAddRoundedIcon>

                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Proactividad" >
                                    <IconButton>
                                        <FaPersonRunning className='md:text-3xl' />

                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Trabajo en equipo" >
                                    <IconButton>
                                        <RiTeamLine className='md:text-3xl' />

                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Responsabilidad" >
                                    <IconButton>
                                        <BsListCheck className='md:text-3xl' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Constancia" >
                                    <IconButton>
                                        < FaPersonSwimming className='md:text-3xl' />
                                    </IconButton>
                                </Tooltip>
                            </div>

                        </motion.div> */}
                    {/* </div> */}
                </div>
            </motion.div>

        </div>
    )
}
