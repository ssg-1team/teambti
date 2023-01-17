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
            <div style={{width:'100%',height:'50%'}}>
                <Button variant="contained" sx={{ textTransform:'none' ,borderRadius:10 ,margin:'2%', width: '96%', height: '90%', textAlign:'center', backgroundColor:'gray', fontSize:50, transition:'all 1s', ":hover":{bgcolor:'#ff6961', color:"white", fontSize:100}}}component={Link} to="/mentomenti">시작</Button>
            </div>
        </Container>
    );
}

export default MentoMentiStart;
