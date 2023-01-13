import React, { useEffect, useRef, useState } from "react";
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

import { settings } from "./Home.module";

function Home({setComparision}) {

  const e_id = localStorage.getItem('e_id');
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
      console.log(response.data);
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

  return (
    <>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Slider {...settings}>
          {emps.map((user, id) => (
            (user.e_id != e_id) &&
            <Profile user = {user} key = {id} setComparision = {setComparision}/>
          ))}
        </Slider>
      </Container>
    </>
  );
}

export default Home;
