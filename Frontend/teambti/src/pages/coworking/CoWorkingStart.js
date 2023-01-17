import * as React from "react";
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

function CoworkingStart() {
    // console.log('start');
    return (
        <Container maxWidth="lg" sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <div style={{width:'100%',height:'50%', backgroundColor:'red'}}>
                도움 요청 이용하는 방법
            </div>
            <div style={{width:'100%', height:'50%'}}>
                <Button variant="contained" sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '29%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#ff6961', color:"white", fontSize:100}}}component={Link} to="/coworking3"><div>12<div style={{fontSize:20, textTransform: 'capitaliz'}}><span style={{textTransform: 'capitaliz'}}>Questions</span></div></div></Button>
                <Button variant="contained" sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '29%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#42d6a4', color:"white", fontSize:100}}}component={Link} to="/coworking5"><div>20<div style={{fontSize:20, textTransform: 'capitaliz'}}><span style={{textTransform: 'capitaliz'}}>Questions</span></div></div></Button>
                <Button variant="contained" sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '29%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#59adf6', color:"white", fontSize:100}}}component={Link} to="/coworking7"><div>28<div style={{fontSize:20, textTransform: 'capitaliz'}}><span style={{textTransform: 'capitaliz'}}>Questions</span></div></div></Button>
            </div>
        </Container>
    );
}

export default CoworkingStart;
