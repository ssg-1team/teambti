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

function CoworkingStart({getDataCoWorkingStart}) {

    console.log('start');

    const normalQuestion = () => {
        getDataCoWorkingStart(5);
    }
    const moreQuestion = () => {
        getDataCoWorkingStart(7);
    }

    return (
        <Container maxWidth="lg" sx={{height:'100%', display:'flex', justifyContent:'center'}}>
            <Button variant="contained" sx={{ margin:'2%', width: '30%', height: '93%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#FAAB78', color:"white", fontSize:100}}}component={Link} to="/coworking3"><div>12<div style={{fontSize:20}}>Questions</div></div></Button>
            <Button variant="contained" sx={{ margin:'2%', width: '30%', height: '93%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#FAAB78', color:"white", fontSize:100}}}component={Link} to="/coworking5"><div>20<div style={{fontSize:20}}>Questions</div></div></Button>
            <Button variant="contained" sx={{ margin:'2%', width: '30%', height: '93%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#FAAB78', color:"white", fontSize:100}}}component={Link} to="/coworking7"><div>28<div style={{fontSize:20}}>Questions</div></div></Button>
        </Container>
    );
}

export default CoworkingStart;
