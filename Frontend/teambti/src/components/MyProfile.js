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
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Character from "../pages/character/Character";
import { bigButtonStyle, flexButtonStyle, smallButtonStyle } from "./_shared.module";
import { Navigate, useNavigate } from "react-router-dom";



// navigate('/character')
const MyProfile = () => {
  // const navigate = useNavigate();
  
  function editprofile() {
    axios
    .get(`${API_HOST}/char/getChar/${e_id}`,{
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (!response.data.body) {
        alert('먼저 MBTI를 설정해주세요')
      } else {
        // 배포할때는 위에 내용으로 결정하기
        // document.location.href = 'http://teambti.site/character';
        document.location.href = 'http://localhost:3000/character';
      }
    })
  }
  const e_id = localStorage.getItem("e_id");
  // API
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mbti, setMbti] = useState("");
  const [myUrl, setMyUrl] = useState(1);
  useEffect(()=>{

  }, [myUrl])
  

  // #####[s]삭제NO
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
          console.dir("데이터 오류" + JSON.stringify(error));
        } else if (status === 400) {
          console.dir("400에러");
        } else if (status === 500) {
          console.dir("내부 서버 오류");
        }
      });
    axios
      .get(`${API_HOST}/char/getChar/${e_id}`, {
        headers: {
          // "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log('response', response.data)
        setMyUrl(response.data.completed)
        console.log(myUrl)
      })
  }, []);

  // #####[e]삭제NO

  // [s]삭제예정
  // useEffect(() => {
  //   setName(user.name);
  //   setPosition(user.position);
  //   setMbti(user.mbti);
  // });
  // [e]

  return (
    <>
      <Card sx={{ maxWidth: 300, m:3}}>
        <CardMedia
          component="img"
          height="450"
          image={require(`../assets/image/parts/content/${myUrl}.jpg`)}
          alt="green iguana"
        />
        <CardContent>
          <div style={{display:'flex', flexDirection:'column'}}>
            <Typography gutterBottom>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                <div><span style={{fontSize:25}}>{name}</span> <span>{position}</span></div>
                <div style={{fontSize:25}}>{mbti !== null ? <MbtiModal title={mbti}/> : <MbtiModal title="MBTI 등록"/>}</div>
              </div>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <Button sx={flexButtonStyle} onClick={editprofile} display= 'inline-block'>
          프로필 편집
        </Button>
      </div>
    </>
  );
};

export default MyProfile;
