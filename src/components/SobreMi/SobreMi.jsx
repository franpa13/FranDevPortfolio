
import React, { useRef } from 'react';

import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '@mui/material/Alert';
import { BsListCheck } from "react-icons/bs";

import { FaPersonSwimming } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../../assets/ParedesFrancisco.png"
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
        <>

            <motion.div
                className='z-100 bg-black text-rose-500 probando flex flex-col'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}

            >
                <div className='flex flex-col p-2 gap-2 ' >
                    <span className='text-xs font-light opacity-80 md:text-xl' >¡Hola!, mi nombre es :</span>
                    <div className=' flex gap-2 justify-center items-center md:justify-start md:ml-48 '>
                        <span className={`transition-colors duration-500 ${colors[colorIndex]} text-xl md:text-2xl`}>&lt;</span>
                        <h1 className='text-xl font-semibold semibold  text-blue-400 md:text-4xl'>Francisco Javier Paredes</h1>
                        <span className={`transition-colors duration-500 ${colors[colorIndex]} text-xl md:text-2xl`}>/&gt;</span>
                    </div>
                    <motion.p
                        className='w-full text-center font-normal block md:hidden'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.6, duration: 0.8 } }}
                    >
                        Full Stack Developer
                    </motion.p>
                </div>
                <div className='md:flex  md:justify-center md:flex-row-reverse md:mt-0 '>
                    <div className='w-full  flex  flex-col justify-center items-center md:justify-start md:items-center md:w-1/3 md:mt-0 md:mb-0'>
                        <motion.p
                            className='w-full text-center font-normal md:mb-6 md:text-center md:text-xl hidden md:block md:w-full '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.6, duration: 0.8 } }}
                        >
                            Full Stack Developer
                        </motion.p>
                        <img className='w-1/2 md:w-2/3' src={img} alt="" />
                        <div>
                            <button className='bg-blue-700 hover:bg-blue-800 mt-3 text-white font-bold py-2 px-4 rounded' color="success" onClick={handleOpen}>Contactame</button>
                            <Modal
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <Box sx={style}>
                                    <form className='w-full field flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
                                        <label className='text-black flex flex-col'  >Name

                                            <input required className='text-black border border-solid text-sm p-2 font-semibold border-blue-600' type="text" name="user_name" />
                                        </label>
                                        <label className='text-black flex flex-col'>Email
                                            <input required className='text-black border border-solid p-2 text-sm font-semibold  border-blue-600' type="email" name="user_email" />

                                        </label>
                                        <label className='text-black flex flex-col'>Message
                                            <textarea required className='text-black border border-solid p-1 text-sm font-semibold  border-blue-600' name="message" />

                                        </label>
                                        <input className=' bg-blue-700 p-2 text-white cursor-pointer ' type="submit" valuep-3="Send" />
                                    </form>
                                </Box>



                            </Modal>
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

                        <div className='flex flex-col  gap-2 mt-12 md:py-4  md:hidden ' >
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

                        </div>
                    </div>
                    <div className='md:flex  md:items-center md:justify-around mt-2 p-2 md:w-1/2 md:flex-col md:mt-12 md:ml-0 md:p-0' >
                        <motion.p className='md:text-xl ' initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.4, duration: 0.8 } }}>Tengo 22 años , estudiante de Analista Programador en la UNJU, Argentina. En paralelo realice distintos tipos de bootcamps y cursos para poder seguir ampliando mis conocimientos en este hermoso mundo del Desarrollo Web.
                        </motion.p>
                        <h2 className='text-center   text-xl text-blue-400 font-semibold m-4'>Experiencia: </h2>
                        <motion.p className='md:text-xl ' initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: "#ffffff", transition: { delay: 0.4, duration: 0.8 } }}>
                            <ul className='flex flex-col gap-6'>
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




                        </motion.p>
                        <motion.div
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

                        </motion.div>
                    </div>
                </div>
            </motion.div>

        </>
    )
}
