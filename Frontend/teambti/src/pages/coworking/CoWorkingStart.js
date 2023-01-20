import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import Coworking from "./Coworking";
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

function CoworkingStart() {
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

    // console.log('start');
    return (
        <Container maxWidth="lg" sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
            {/* <div style={{width:'100%',height:'50%', backgroundColor:'red'}}>
                도움 요청 이용하는 방법
            </div> */}
            <div style={{width:'100%',height:'20%'}}>
                <Typography sx={{fontSize:"20px", textAlign:'center'}} style={{fontFamily:'Pretendard-Regular',}}>
                <div>누군가에게 도움을 요청하기란 쉽지 않죠?  상황에 적합한 인원을 찾아줄게요.</div>
                <div style={{marginBottom:"10px"}}>지금 어떤 도움이 필요한지 생각하면서 다음 질문에 답해주세요!</div>
                
                <div style={{fontSize:"30px"}}><span style={{color:"red"}}>{myName}</span>님의 상황은 어떤가요?</div>
                </Typography>
            </div>
            <div style={{width:'100%', height:'50%', marginTop:"50px",}}>
                <Button variant="contained" style={{fontFamily:'Pretendard-Regular',}} sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '29%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#ff6961', color:"white", fontSize:100}}}component={Link} to="/coworking3"><div>12<div style={{fontSize:20, textTransform: 'capitaliz'}}><span style={{textTransform: 'capitaliz'}}>Questions</span></div></div></Button>
                <Button variant="contained" style={{fontFamily:'Pretendard-Regular',}} sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '29%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#42d6a4', color:"white", fontSize:100}}}component={Link} to="/coworking5"><div>20<div style={{fontSize:20, textTransform: 'capitaliz'}}><span style={{textTransform: 'capitaliz'}}>Questions</span></div></div></Button>
                <Button variant="contained" style={{fontFamily:'Pretendard-Regular',}} sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '29%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#59adf6', color:"white", fontSize:100}}}component={Link} to="/coworking7"><div>28<div style={{fontSize:20, textTransform: 'capitaliz'}}><span style={{textTransform: 'capitaliz'}}>Questions</span></div></div></Button>
            </div>
        </Container>
    );
}

export default CoworkingStart;
