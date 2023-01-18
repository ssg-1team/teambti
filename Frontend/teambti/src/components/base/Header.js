import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
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
import AdbIcon from "@mui/icons-material/Adb";
import LeftDrawer from "./LeftDrawer";
import myTheme from "./MyTheme";
import { ThemeProvider } from "@emotion/react";
import { ButtonGroup } from "@mui/material";
import "../../css/components/header.css";

const pages = [
  { name: "홈", link: "/" },
  { name: "멘토찾기", link: "/mentomentistart" },
  { name: "도움요청", link: "/coworkingstart" },
];

const Header = ({ login }) => {
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

  // logout
  const handleLogout = () => {
    localStorage.removeItem("e_id");
    login(false);
  };

  return (
    <div style={{height:'8.5%', display:'flex', flexDirection:'column', backgroundColor:'green' ,boxSizing:'border-box'}}>
    <ThemeProvider theme={myTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LeftDrawer />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
            <Typography sx={{display: { ':hover':{cursor:'pointer'}} }}>
              <a href="/" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={require(`../../assets/image/logo_remove.png`)} style={{width:200, margin:'auto'}} alt=""/>
              </a>
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                // color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                color="secondary"
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
                {pages.map((page, id) => (
                  <Button
                    variant="outlined"
                    key={id}
                    onClick={handleCloseNavMenu}
                    href={page.link}
                    sx={{ fontSize:15, textTransform:'none', my: 1, color: "black", display: "block" }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Menu>
            </Box>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "PFStardust",
                fontWeight: 700,
                letterSpacing: "     .3rem",
                textDecoration: "none",
              }}
            >
              <Typography sx={{display: { ':hover':{cursor:'pointer'}} }}>
              <a href="/" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={require(`../../assets/image/logo_remove.png`)} style={{width:200, margin:'auto'}} alt=""/>
              </a>
            </Typography>
            </Typography>
            <Box sx={{ color:"black", flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                {pages.map((page, id) => (
                  <Button
                    variant="outlined"
                    key={id}
                    onClick={handleCloseNavMenu}
                    href={page.link}
                    sx={{ fontSize:20, textTransform:'none', my: 1, color: "black", display: "block" }}
                  >
                    {page.name}
                  </Button>
                ))}
              <Button
                variant="outlined"
                onClick={handleLogout}
                sx={{ fontFamily:'', fontSize:20, textTransform:'none', my: 1, color: "black", display: "block" }}
              >
                    로그아웃
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    <div style={{height:'0.5vh', backgroundColor:'#ff6961'}}></div>
    </div>
  );
};


export default Header;
