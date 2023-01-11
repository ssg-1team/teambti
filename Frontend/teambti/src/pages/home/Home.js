import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {

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
    slidesToShow: 4,  // 슬라이드에 보여지는 아이템 개수
    slidesToScroll: 4,  // 슬라이드 넘기는 아이템 개수
  };

  return (
    
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
          
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Slider {...settings}>
              {others.map((user) => (
                <div>
                <Card sx={{ maxWidth: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
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
          </Container>
        </Box>
  );
}

export default Home;