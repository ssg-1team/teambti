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
            <Button variant="contained" sx={{ margin:'2%', width: '30%', height: '93%', textAlign:'center', backgroundColor:'gray'}}component={Link} to="/coworking3"><div style={{fontSize:20}}><div style={{fontSize:100}}>12</div>Questions</div></Button>
            <Button variant="contained" sx={{ margin:'2%', width: '30%', height: '93%', textAlign:'center', backgroundColor:'gray'}}component={Link} to="/coworking5"><div style={{fontSize:20}}><div style={{fontSize:100}}>20</div>Questions</div></Button>
            <Button variant="contained" sx={{ margin:'2%', width: '30%', height: '93%', textAlign:'center', backgroundColor:'gray'}}component={Link} to="/coworking7"><div style={{fontSize:20}}><div style={{fontSize:100}}>28</div>Questions</div></Button>
        </Container>
    );
}

export default CoworkingStart;
