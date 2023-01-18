import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { API_HOST } from "../../constant";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "../../components/Profile";
import axios from "axios";

import { settings_lg, settings_md, settings_xs } from "./Home.module";
import { emps_list } from "../../constant/mock";
import ProfileMin from "../../components/ProfileMin";
import "./Home.css";

function Home() {
  const e_id = localStorage.getItem("e_id");
  const [emps, setEmps] = useState([]);

  // #####[s]삭제NO
  useEffect(() => {
    axios
      .get(`${API_HOST}/member/getAll/${e_id}`, {
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
  // #####[e]삭제NO

  // [s]삭제예정
  // useEffect(() => {
  //   setEmps(emps_list);
  // });
  // [e]

  return (
    <div style={{width:'100%', height:'100%', display:'flex'}}> 
      <Container maxWidth="false" sx={{margin:0, padding:0, width:'100%', height:'100%', display: { xs: "none", md:"none", lg: "block" }}}>
        <Slider style={{height:'98%'}}
          {...settings_lg}
          sx={{display: { xs: "none", md: "flex" }, mr: 1 }}

        >
          {emps.map(
            (user, id) =>
              user.e_id != e_id && (
                  <Profile user={user} key={id} />
              )
          )}
        </Slider>
      </Container>
      <Container maxWidth="md" sx={{margin:0, padding:0, width:'100%', height:'100%',  display: { xs: "none", md:"block", lg: "none" }}}>
        <Slider
          {...settings_md}
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        >
          {emps.map(
            (user, id) =>
              user.e_id != e_id && (
                <Profile user={user} key={id} />
              )
          )}
        </Slider>
      </Container>
      <Container maxWidth="xs" sx={{margin:0, padding:0, width:'100%', height:'100%',  display: { xs: "block", md:"none", lg: "none" }}}>

        <Slider
          {...settings_xs}
          sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
        >
          {emps.map(
            (user, id) =>
              user.e_id != e_id && (
                <Profile user={user} key={id} />
              )
          )}
        </Slider>
      </Container>
      <Container maxWidth="xs" sx={{ display: { xs: "block", sm:"none", md:"none", lg: "none" }}}>
      {emps.map(
            (user) =>
              user.e_id != e_id && (
                <ProfileMin user={user} key={user.e_id} />
              )
          )}      
      </Container>
    </div>

  );
}

export default Home;
