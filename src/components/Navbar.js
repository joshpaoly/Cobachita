import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRounded from "@mui/icons-material/CommentRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      Text: "Home",
      icon: <HomeIcon />,
    },
    {
      Text: "About",
      icon: <InfoIcon />,
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Inicio</a>
        <a href="">Registrate</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }}>
          {/* Contenido del Drawer */}
        </Box>
      </Drawer>
      <div className="carousel-container">
        <Slider {...carouselSettings}>
          <div>
            <img src="url_de_la_primera_imagen" alt="Imagen 1" />
          </div>
          <div>
            <img src="url_de_la_segunda_imagen" alt="Imagen 2" />
          </div>
          {/* Agrega más elementos div para más imágenes */}
        </Slider>
      </div>
    
    </nav>
  );
};

export default Navbar;
