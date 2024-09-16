import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Redes from "./Redes/Redes";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";

import AdbIcon from "@mui/icons-material/Adb";
import img from "/src/assets/ParedesFrancisco.jpeg";
import { Link } from "react-router-dom";
const pages = [
  {
    id: "/",
    text: "Sobre mi",
  },
  {
    id: "/educacion",
    text: "Educacion",
  },

  {
    text: "Proyectos",
    id: "/proyectos",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="bar fixed top-0 w-full z-50 ">
      <div maxWidth="xl" className="pr-0 pl-0 px-0 bar animate-blurred-fade-in">
        <Toolbar
          className="flex justify-center items-center p-0 pr-0 pl-0 "
          disableGutters
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <div>
                <a href="#inicio">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      className="text-black  w-full  "
                    >
                      Sobre MI
                    </Typography>
                  </MenuItem>
                </a>
                <a href="#proyectos">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      className="text-black  w-full   "
                    >
                      Proyectos
                    </Typography>
                  </MenuItem>
                </a>
                <a href="#educacion">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      className="text-black  w-full  "
                    >
                      Educacion
                    </Typography>
                  </MenuItem>
                </a>
              </div>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "8px" },
            }}
          >
            <a href={`#inicio`}>
              <Button
                size="medium"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#38bdf8", color: "black",  borderBottom: "1px solid white" },
                  textAlign: "center",
                  border: "none",
                  borderBottom: "1px solid #38bdf8",
                  borderRadius: "0px",
                  color: "white",
                  display: "block",
                }}
              >
                Sobre mi
              </Button>
            </a>
            <a href={`#proyectos`}>
              <Button
                size="medium"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#38bdf8", color: "black",  borderBottom: "1px solid white" },
                  textAlign: "center",
                  border: "none",
                  borderBottom: "1px solid #38bdf8",
                  borderRadius: "0px",
                  color: "white",
                  display: "block",
                }}
              >
                Proyectos
              </Button>
            </a>
            <a href={`#educacion`}>
              <Button
                size="medium"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#38bdf8",
                    color: "black",
                    borderBottom: "1px solid white",
                  },
                  textAlign: "center",
                  border: "none",
                  borderBottom: "1px solid #38bdf8",
                  borderRadius: "0px",
                  color: "white",
                  display: "block",
                }}
              >
                Educacion
              </Button>
            </a>
          </Box>

          <Box
            className="flex w-full justify-end md:w-auto md:justify-center  md:gap-12 "
            sx={{ flexGrow: 0 }}
          >
            <Redes></Redes>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default ResponsiveAppBar;
