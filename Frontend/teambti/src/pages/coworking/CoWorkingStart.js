import * as React from "react";
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

    

    const [questionsNumber, setQuestionsNumber] = React.useState(0) // 적음, 중간, 많음
    console.log('start');

    const lessQuestion = () => {
        getDataCoWorkingStart(3);
    }
    const normalQuestion = () => {
        getDataCoWorkingStart(5);
    }
    const moreQuestion = () => {
        getDataCoWorkingStart(7);
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Button onClick={lessQuestion}>질문 수 적음 버튼</Button>
            <Button onClick={normalQuestion}>질문 수 적당 버튼</Button>
            <Button onClick={moreQuestion}>질문 수 많음 버튼</Button>
        </Container>
    );
}

export default CoworkingStart;
