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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Link to = '/coworking3'> 
                <Button>질문 수 적음 버튼</Button>
            </Link>
            <Link to = '/coworking5'> 
                <Button>질문 수 보통 버튼</Button>
            </Link>
            <Link to = '/coworking7'> 
                <Button>질문 수 많음 버튼</Button>
            </Link>
        </Container>
    );
}

export default CoworkingStart;
