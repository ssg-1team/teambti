import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(0),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const user = {
    id: 1,
    name: "hereme",
    type: "INFJ",
    position: "Web",
  }

  const others = [
    {
      id: 2,
      name: "cocoon",
      type: "INFP",
      position: "POS",
    },
    {
      id: 3,
      name: "ultra",
      type: "ESFP",
      position: "IOS",
    },
    {
      id: 4,
      name: "hozae",
      type: "ISTJ",
      position: "AOS",
    },
    {
      id: 4,
      name: "hozae",
      type: "ISTJ",
      position: "AOS",
    },
    {
      id: 4,
      name: "hozae",
      type: "ISTJ",
      position: "AOS",
    },
    {
      id: 4,
      name: "hozae",
      type: "ISTJ",
      position: "AOS",
    },
    {
      id: 4,
      name: "hozae",
      type: "ISTJ",
      position: "AOS",
    },
    {
      id: 4,
      name: "hozae",
      type: "ISTJ",
      position: "AOS",
    },
  ];

  const settings = {  
    // 슬라이드 옵션들
    arrows: true,  // 화살표 표시
    dots: true,  // 밑에 현재 페이지와 나머지 페이지 점으로 표시
    infinite: false,  // 무한 반복
    speed: 500,  // 넘기는 속도
    slidesToShow: 3,  // 슬라이드에 보여지는 아이템 개수
    slidesToScroll: 1,  // 슬라이드 넘기는 아이템 개수
};

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
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
              TeaMBTI
            </Typography>
            <Button variant="contained" color='info' endIcon={<Diversity1Icon/>} sx={{m:1}}>업무할당</Button>
            <Button variant="contained" color='info'endIcon={<LogoutIcon />}>로그아웃</Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1,  }}
              
            >
              My Character
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
            
          </Toolbar>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 4,
                width: 'auto',
                height: 'auto',
              },
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                      component="img"
                      height="450"
                      image="images/characterExample.png"
                      alt="green iguana"
              />    
            </Card>
          </Box>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.type} / {user.position}
          </Typography>
          <Button variant="contained" color='inherit' sx={{m:4}}>마이페이지</Button>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          
          <div>
            <Slider {...settings}>
              {others.map((user) => (
                <div>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="450"
                      image="images/characterExample.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.type} / {user.position}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              ))}
          
          </Slider>
          </div>
          <Copyright sx={{ pt: 4 }} />
          
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

