import * as React from "react";
import { useState, useEffect } from "react";
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

import { API_HOST } from '../../constant/index';
import axios from "axios";
import { fontSize } from "@mui/system";

function MentoMentiStart() {

    const e_id = parseInt(localStorage.getItem('e_id'));

    const [myName, setMyName] = useState('');
    // 선택지 3/5/7 개수에 따라서 myQuestions 지정
    useEffect(() => {
        // const e_id = parseInt(localStorage.getItem('e_id'));
        // const [emps, setEmps] = useState([]);
        axios
        .get(`${API_HOST}/member/getEmp/${e_id}`,{
            headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            // console.log(response.data)
            setMyName(response.data.name);
        })
    }, []) 

    console.log('start');

    return (
        <Container maxWidth="lg" sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
            {/* <div style={{width:'100%',height:'50%', backgroundColor:'red'}}>
                멘토찾기 사용 방법
            </div> */}
            <div style={{width:'100%',height:'20%'}}>
                <Typography sx={{fontSize:"20px", textAlign:'center'}}>
                <div>신입사원 여러분 안녕하세요! 평소에 꿈꿔와던 나의 선배님이 있나요?</div>
                <div style={{marginBottom:"10px"}}>입사 후 나의 멘토님은 어떤 분이었으면 좋겠는지 생각하면서 다음 질문에 답해주세요!</div>
                
                <div style={{fontSize:"30px"}}><span style={{color:"red"}}>{myName}</span>님이 바라는 멘토는?</div>
                </Typography>
                
            </div>
            <div style={{width:'100%',height:'50%', marginTop:"50px"}}>
                <Button variant="contained" sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '96%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#ff6961', color:"white", fontSize:100}}}component={Link} to="/mentomenti">시작</Button>
            </div>
        </Container>
    );
}

export default MentoMentiStart;
