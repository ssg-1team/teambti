import * as React from "react";
import {
  Container,
  CardActionArea,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Toolbar,
  Box,
} from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmpModal from "../../components/EmpModal";
import Profile from "./Profile";

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
    arrows: true, // 화살표 표시
    dots: true, // 밑에 현재 페이지와 나머지 페이지 점으로 표시
    infinite: false, // 무한 반복
    speed: 500, // 넘기는 속도
    slidesToShow: 4, // 슬라이드에 보여지는 아이템 개수
    slidesToScroll: 4, // 슬라이드 넘기는 아이템 개수
  };

  return (
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

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Slider {...settings}>
          {others.map((user) => (
            <Profile user = {user}/>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default Home;
