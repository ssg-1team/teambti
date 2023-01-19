import * as React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import MentoMenti from "./MentoMenti";
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
  Button

} from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MentoMentiStart() {

    console.log('start');

    return (
        <Container maxWidth="lg" sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
            {/* <div style={{width:'100%',height:'50%', backgroundColor:'red'}}>
                멘토찾기 사용 방법
            </div> */}
            <div style={{width:'100%',height:'20%'}}>
                <span>
                누군가에게 도움을 요청하기란 쉽지 않죠?  상황에 적합한 인원을 찾아줄게요.
                지금 어떤 도움이 필요한지 생각하면서 다음 질문에 답해주세요!
                000님의 상황은 어떤가요?
                </span>
            </div>
            <div style={{width:'100%',height:'50%'}}>
                <Button variant="contained" sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '96%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#ff6961', color:"white", fontSize:100}}}component={Link} to="/mentomenti">시작</Button>
            </div>
        </Container>
    );
}

export default MentoMentiStart;
