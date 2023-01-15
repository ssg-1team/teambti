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
        <Container maxWidth="lg" sx={{width:'100%', height:'100%', backgroundColor:'violet'}}>
            <Button variant="contained" sx={{ width: '33%', height: '100%'}} component={Link} to="/coworking3">12 
            Questions</Button>
            <Button variant="contained" sx={{ width: '33%', height: '100%'}}component={Link} to="/coworking5">20<br></br>Questions</Button>
            <Button variant="contained" sx={{ width: '33%', height: '100%'}}component={Link} to="/coworking7">28 Questions</Button>
        </Container>
    );
}

export default CoworkingStart;
