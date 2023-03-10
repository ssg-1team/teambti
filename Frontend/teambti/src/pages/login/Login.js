import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Checkbox,
  TextField,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { API_HOST } from "../../constant";
import Main from "../main/Main2";
import { Container } from "@mui/system";
import Swal from 'sweetalert2'

const theme = createTheme();

export default function Login({ isLoggedIn, login }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fData = new FormData(event.currentTarget);
    const data = {
      id: fData.get("email"),
      password: fData.get("password"),
    };

    axios
      .post(`${API_HOST}/member/login`, data, {
        headers: {
          // 'Access-Control-Allow-Origin' : '*',
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const login_id = response.data.id;
        const login_pw = response.data.password;
        if (login_id === undefined || login_pw === undefined) {
          Swal.fire({
            icon: 'error',
            title: '로그인 불가',
            text: '아이디 또는 비밀번호를 확인해주세요',
            confirmButtonText: '확인',
          })
        } else if (login_id === fData.get("email") && login_pw === fData.get("password")) {
          localStorage.setItem("e_id", response.data.e_id);
          login(true);
          console.log("로그인성공");
        }
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
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100%"}}>
          
          <CssBaseline />
          <Grid style={{display:'flex', justifyContent:'center', alignItems:'center'}} 
            item
            xs={'0'}
            sm={false}
            md={8}
            sx={{
            }}
          >
            <img style={{height:'99vh'}} src={require(`../../assets/image/sublogo.png`)} alt=""/>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                fontFamily:"Pretendard-Regular",
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <div>
                <img src={require(`../../assets/image/login_gif.gif`)} style={{width:200}} alt=""/>
                </div>
                <div style={{fontFamily:"Pretendard-Regular"}}>MBTI로 우리팀 바로 알기, TEAMBTI</div>
                </div>
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="ID"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </Box>
              <br></br>
              <br></br>
              <div style={{ fontSize: "15px" }}>
              우) 04529 서울 중구 남대문시장10길 2 MESA 빌딩
              <br />
              COPYRIGHT (c) 2022. TEAM_1. All rights reserved.
            </div>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
