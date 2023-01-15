import React, { useState } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { API_HOST } from "../../constant";
import Main from "../main/Main2";

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
        localStorage.setItem("e_id", response.data.e_id);
        login(true);
        console.log(response);
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
        <Grid container component="main" sx={{ height: "100%", backgroundColor:'black' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={6}
            md={8}
            sx={{

            }}
          />
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
