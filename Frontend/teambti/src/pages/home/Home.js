import React, { useEffect, useState } from "react";
import {
  Container,
  Toolbar,
  Box,
} from "@mui/material";
import { API_HOST } from "../../constant";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from '../../components/Profile';
import axios from 'axios';

function Home() {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    axios
    .get(`${API_HOST}/member/getAll`, {
      headers: {
        // "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log(response.data)
      setEmps(response.data);
    })
    .catch((error) => {
      const status = error?.response?.status;
      if (status === undefined) {
        console.dir("데이터 오류" + JSON.stringify(error));
      } else if (status === 400) {
        console.dir("400에러");
      } else if (status === 500) {
        console.dir("내부 서버 오류");
      }
    });
  }, []);

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
          {emps.map((user, id) => (
            <Profile user = {user} key = {id}/>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default Home;
