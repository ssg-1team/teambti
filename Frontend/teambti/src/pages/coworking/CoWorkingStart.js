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
        <Container maxWidth="lg" sx={{width:'100%', height:'100%'}}>
            <Button variant="contained" sx={{ width: '33%', height: '100%', textAlign:'center'}}component={Link} to="/coworking3"><div style={{fontSize:40}}>12</div><div>Questions</div></Button>
            <Button variant="contained" sx={{ width: '33%', height: '100%', textAlign:'center'}}component={Link} to="/coworking5"><div style={{fontSize:40}}>20</div><div>Questions</div></Button>
            <Button variant="contained" sx={{ width: '33%', height: '100%', textAlign:'center'}}component={Link} to="/coworking7"><div style={{fontSize:40}}>28</div><div>Questions</div></Button>
        </Container>
    );
}

export default CoworkingStart;
