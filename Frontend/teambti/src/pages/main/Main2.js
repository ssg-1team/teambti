import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Box,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import axios from "axios";
// icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import Diversity1Icon from "@mui/icons-material/Diversity1";
// components
import MbtiModal from "../../components/MbtiModal";
import { API_HOST } from "../../constant";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(0),
      },
    }),
  },
}));

const mdTheme = createTheme();

function Main({ login }) {
  const e_id = localStorage.getItem("e_id");
  // API
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mbti, setMbti] = useState("");

  const [open, setOpen] = useState(true); // Drawer
  const [work, setWork] = useState("home");

  // logout
  const handleLogout = () => {
    localStorage.removeItem("e_id");
    login(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getWork = (work) => {
    setWork(work);
  };

  useEffect(() => {
    axios
      .get(`${API_HOST}/member/getEmp/${e_id}`, {
        headers: {
          // "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setPosition(response.data.position);
        setMbti(response.data.mbti);
      })
      .catch((error) => {
        const status = error?.response?.status;
        if (status === undefined) {
          console.dir("????????? ??????" + JSON.stringify(error));
        } else if (status === 400) {
          console.dir("400??????");
        } else if (status === 500) {
          console.dir("?????? ?????? ??????");
        }
      });
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {!open ? "teaMBTI" : null}
            </Typography>
            <Button
              variant="contained"
              color="info"
              endIcon={<Diversity1Icon />}
              sx={{ m: 1 }}
              onClick={() => setWork("assignment")}
            >
              ????????????
            </Button>
            <Button
              variant="contained"
              color="info"
              endIcon={<Diversity1Icon />}
              sx={{ m: 1 }}
              onClick={() => setWork("home")}
            >
              ???
            </Button>
            <Button
              onClick={handleLogout}
              variant="contained"
              color="info"
              endIcon={<LogoutIcon />}
            >
              ????????????
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              teaMBTI
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 4,
                width: "auto",
                height: "auto",
              },
            }}
          >
            <Card sx={{ maxWidth: 340 }}>
              <CardMedia
                component="img"
                height="450"
                image="images/characterExample.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {mbti == null ? <MbtiModal /> : mbti} / {position}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Button onClick={() => setWork("character")}>????????? ??????</Button>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
