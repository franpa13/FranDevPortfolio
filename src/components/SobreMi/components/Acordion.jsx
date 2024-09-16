import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Acordion({ title, text, icon }) {
  return (
    <div className="md:w-2/3 border-b-2 text-base mx-2 md:m-0 border-white">
      <Accordion variant="elevation" sx={{ bgcolor: "#0d275f" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{text}</AccordionDetails>
      </Accordion>
    </div>
  );
}
