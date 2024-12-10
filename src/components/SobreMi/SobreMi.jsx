import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Skills from "../Educacion/Skills";
import img from "/src/assets/ParedesFrancisco.jpeg";

import { useEffect, useState } from "react";

import "./SobreMi.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import Acordion from "./components/Acordion";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#0d275f",
  borderRadius: "15px",
  border: "none",
  boxShadow: 24,
  p: 2,
  "@media (min-width: 768px)": {
    width: 450,
    p: 2,
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
  const [alerta, setAlert] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const colors = [
    "text-red-500",
    "text-blue-200",
    "text-yellow-500",
    "text-green-400",
  ];
  // const notify = () => toast.success("Mensaje enviado correctamente, respondere a la brevedad... saludos !!");
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs
      .sendForm(
        "service_321i4q6",
        "template_3oakbci",
        form.current,
        "AVnu_VMQjQjI8K_U7"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Mensaje enviado correctamente, respondere a la brevedad... saludos !!"
          );
          setOpen(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Error al enviar el mensaje");
        }
      )
      .finally(() => {
        setIsLoading(false); // Stop loading regardless of result
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500); // Cambia el tiempo según lo deseado (en milisegundos)

    return () => clearInterval(intervalId);
  }, []);

  const acordions = [
    {
      title: "Experiencia 👜",
      text: "Cuento con más de un año de experiencia como desarrollador Frontend, especializado en el uso de frameworks como React.js, Next.js y Tailwind CSS, trabajando en la creación de interfaces dinámicas y escalables.",
    },
    {
      title: "Educacion 🧑‍🎓",
      text: "Actualmente estoy cursando la carrera de Analista Programador Universitario en la Universidad Nacional de Jujuy, complementando mi formación académica con un aprendizaje autodidacta en nuevas tecnologías y desarrollo de software.",
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div id="inicio" className="parabg">
      <motion.div
        className="z-100   text-rose-500  probando flex flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div className="flex flex-col md:items-center p-2 gap-2 ">
          <span className="text-xs  md:p-2 font-light opacity-80 md:text-xl flex items-center">
            ¡Hola!{" "}
            <img
              className="w-4 md:w-8"
              src="data:image/png;base64,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"
            ></img>
            mi nombre es :
          </span>
          <div className=" flex gap-2 justify-center items-center md:justify-start md:items-center   ">
            <span
              className={`transition-colors duration-500 ${colors[colorIndex]} text-xl md:text-4xl`}
            >
              &lt;
            </span>
            <h1 className="text-xl font-semibold semibold  fran md:text-4xl ">
              Francisco Javier Paredes
            </h1>
            <span
              className={`transition-colors duration-500 ${colors[colorIndex]} text-xl md:text-4xl`}
            >
              /&gt;
            </span>
          </div>
          <motion.p
            className="w-full full text-white text-center font-normal block md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
          >
            Desarrollador Web
          </motion.p>
        </div>
        <div className="md:flex  md:justify-center md:flex-row-reverse md:mt-8 ">
          <div className="w-full  flex  flex-col justify-center items-center md:justify-end md:items-center md:w-full md:mt-0 md:mb-0">
            <div className="w-full md:flex md:justify-center md:items-start md:flex-row-reverse gap-36 md:gap-20">
              <div className="w-full md:w-1/4 flex flex-col justify-center items-center animate-fade-in-right md:gap-4">
                {/* <div className="mb-5 md:mb-4 flex flex-col relative md:w-full w-1/2  "> */}
                <motion.p
                  className="w-full full text-white pb-2 text-center font-normal md:mb-0 md:text-center md:text-xl hidden md:block md:w-full "
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.6, duration: 0.8 },
                  }}
                >
                  Desarrollador Web
                </motion.p>
                {/* <div class="absolute inline bottom-0  bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-1 w-full  blur-sm"></div> */}
                {/* </div> */}

                <img
                  className="w-1/2 md:w-3/4 shadow-lg rounded-xl transform transition-transform duration-200 hover:scale-95"
                  src={img}
                  alt="mi foto"
                />
                <Button
                  size="small"
                  variant="contained"
                  sx={{ marginTop: "22px" }}
                  endIcon={<WifiCalling3OutlinedIcon />}
                  onClick={handleOpen}
                >
                  Contactame
                </Button>
              </div>

              <div className="md:w-4/5">
                <div className="md:w-full md:ml-8 w-full flex gap-0 md:gap-20 flex-col justify-center md:justify-end items-center md:items-start   animate-fade-in-right  md:flex-row mt-4 md:mt-0 ">
                  {/* <h2>Sobre mi</h2> */}
                  {acordions.map((acordion, index) => {
                    return <Acordion key={index} {...acordion}></Acordion>;
                  })}
                </div>
                <div className="md:w-full">
                  <Skills></Skills>
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
          </div>
        </div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <form
              className="w-full field flex flex-col items-center gap-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="text-white flex flex-col gap-2 w-full">
                Nombre
                <input
                  required
                  className="text-black border-none outline-none rounded-lg text-sm p-2 font-semibold border-blue-600"
                  type="text"
                  name="user_name"
                />
              </label>
              <label className="text-white flex flex-col gap-2 w-full">
                Email
                <input
                  required
                  className="text-black border-none outline-none rounded-lg text-sm p-2 font-semibold border-blue-600"
                  type="email"
                  name="user_email"
                />
              </label>
              <label className="text-white flex gap-2 flex-col w-full">
                Mensaje
                <textarea
                  required
                  className="text-black border-none outline-none rounded-lg text-sm p-2 font-semibold border-blue-600"
                  name="message"
                />
              </label>

              <Button sx={{ color: "white" }} variant="contained" type="submit">
                {isLoading ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </Box>
        </Modal>
      </motion.div>
    </div>
  );
}
