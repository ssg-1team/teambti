import React, { useState } from "react";
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
import "../../css/header.css";
import LeftDrawer from "./LeftDrawer";
import myTheme from "./MyTheme";
import { ThemeProvider } from "@emotion/react";
import { ButtonGroup } from "@mui/material";

const pages = [
  { name: "Mento-Menti", link: "/mentomenti" },
  { name: "Co-Working", link: "/coworking" },
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
    <div style={{height:"100%"}}>
  <ThemeProvider theme={myTheme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LeftDrawer />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              color="secondary"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "PFStardust",
                fontWeight: 800,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              TEAMBTI
            </Typography>
          </Box>
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
              {pages.map((page, id) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" href="/character">
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            color="secondary.light"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "PFStardust",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            TEAMBTI
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, id) => (
                <Button
                  variant="outlined"
                  color="secondary"
                  key={id}
                  onClick={handleCloseNavMenu}
                  href={page.link}
                  sx={{ my: 2, color: "white", display: "block", fontFamily:"PFStardust" }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleLogout}
                sx={{ my: 2, color: "white", display: "block", fontFamily:"PFStardust" }}
              >
                    Logout
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
          
    </div>
  );
};

export default Header;
