import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Redes from './Redes/Redes';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css"

import AdbIcon from '@mui/icons-material/Adb';
import img from "/src/assets/ParedesFrancisco.png"
import { Link } from 'react-router-dom';
const pages = [
    {
        id: "/",
        text: 'Sobre mi'
    },
    {
        id: "/educacion",
        text: 'Educacion/Skills'
    },

    {
        text: 'Proyectos',
        id: "/proyectos"
    },
   ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
        
            <AppBar position="static"  >
                <div maxWidth="xl" className='pr-0 pl-0 px-0'>
                    <Toolbar className='flex justify-center items-center p-0 pr-0 pl-0 ' disableGutters >


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, i) => (
                                    <Link key={i} to={page.id}>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" className='text-black  w-full  ' >{page.text}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>


                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, i) => (

                                <Button
                                    key={i}
                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, mx: 2, fontWeight: "bold", textAlign: "center", backgroundColor: "#193BD2", color: 'white', display: 'block' }}
                                >
                                    <Link to={page.id} >
                                        {page.text}
                                    </Link>
                                </Button>

                            ))}
                        </Box>

                        <Box className="flex w-full justify-around md:w-auto md:justify-normal  md:gap-12 " sx={{ flexGrow: 0 }}>
                            <Redes  ></Redes>
                            <Tooltip title="!Hola¡" >

                                <Avatar
                                    variant='rounded'
                                    alt="Remy Sharp"
                                    src={img}
                                    sx={{ width: "50px", height: "50px",padding:"3px"}}



                                />

                            </Tooltip>

                        </Box>
                    </Toolbar>
                </div>
            </AppBar >

    );
}
export default ResponsiveAppBar;