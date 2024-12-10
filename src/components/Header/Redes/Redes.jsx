import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { Tooltip, IconButton } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
export default function Redes() {
  return (
    <div className="flex justify-end  w-2/3  items-center md:gap-5">
      <Tooltip title="Mi Linkedin" className="text-red-600">
        <IconButton>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/francisco-paredes-354a2b26b/"
          >
            <FaLinkedinIn className="text-xl size-4 md:size-6 " />
          </a>
        </IconButton>
      </Tooltip>

      <Tooltip title="Mi Github">
        <IconButton>
          <a target="_blank" href="https://github.com/franpa13">
            <FaGithub className="text-2xl size-4 text-black  md:size-6" />
          </a>
        </IconButton>
      </Tooltip>

      <Tooltip title="Mi cv">
        <IconButton>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1806sYhAUsdQzTMxiPRskXeQt9f-UmsrW/view?usp=sharing"
          >
            <FaRegFilePdf className="text-2xl size-4 text-black md:size-6" />
          </a>
        </IconButton>
      </Tooltip>

      <Tooltip title="Mi TikTok (creador de contenido sobre programacion)">
        <IconButton>
          <a
            target="_blank"
            href="https://www.tiktok.com/@jujedev?is_from_webapp=1&sender_device=pc"
          >
            <FaTiktok className="text-2xl size-4  text-white md:size-6" />
          </a>
        </IconButton>
      </Tooltip>
    </div>
  );
}
