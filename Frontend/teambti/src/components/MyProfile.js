import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_HOST } from "../constant";
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
  ButtonGroup,
} from "@mui/material";
import MbtiModal from "./MbtiModal";
import { user } from "../constant/mock";

const MyProfile = () => {
  const e_id = localStorage.getItem("e_id");
  // API
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mbti, setMbti] = useState("");

  // #####[s]삭제NO
  // useEffect(() => {
  //   axios
  //     .get(`${API_HOST}/member/getEmp/${e_id}`, {
  //       headers: {
  //         // "Access-Control-Allow-Origin" : "*",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setName(response.data.name);
  //       setPosition(response.data.position);
  //       setMbti(response.data.mbti);
  //     })
  //     .catch((error) => {
  //       const status = error?.response?.status;
  //       if (status === undefined) {
  //         console.dir("데이터 오류" + JSON.stringify(error));
  //       } else if (status === 400) {
  //         console.dir("400에러");
  //       } else if (status === 500) {
  //         console.dir("내부 서버 오류");
  //       }
  //     });
  // }, []);
  // #####[e]삭제NO

  // [s]삭제예정
  useEffect(() => {
    setName(user.name);
    setPosition(user.position);
    setMbti(user.mbti);
  });
  // [e]

  return (
    <>
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
      <Button>프로필 편집</Button>
    </>
  );
};

export default MyProfile;
