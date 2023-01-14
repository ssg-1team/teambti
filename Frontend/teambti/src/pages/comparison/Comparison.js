import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_HOST } from "../../constant";
import { useLocation } from "react-router-dom";
import ComaparisionArrow from "../../components/ComparisionArrow"
function Comparision() {
    const e_id = localStorage.getItem("e_id");
    // API
    const [name, setName] = React.useState("");
    const [position, setPosition] = useState("");
    const [mbti, setMbti] = useState("");

    // #####[s]삭제NO
    useEffect(() => {
        axios
        .get(`${API_HOST}/member/getEmp/${e_id}`, {
            headers: {
            // "Access-Control-Allow-Origin" : "*",
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(response.data);
            setName(response.data.name);
            setPosition(response.data.position);
            setMbti(response.data.mbti);
        })
        .catch((error) => {
            const status = error?.response?.status;
            if (status === undefined) {
            console.dir("데이터 오류" + JSON.stringify(error));
            } else if (status === 400) {
            console.dir("400에러");
            } else if (status === 500) {
            console.dir("내부 서버 오류");
            }
        });
    }, []);

    const user = {
        name : "김혜림",
        mbti : "INFP",
        position : "사원",
    }
    
    const other = useLocation();

    const comparision = {
        user1 : "즉흥적인 일에 대한 해결방안을 잘 제시해요",
        user2 : "계획을 짜서 일을 진행하는 것을 좋아해요"
    }

    return(
        <Container maxWidth='auto' sx={{ ml:0, mr:0, mt: 4, mb: 4}}>
            <Grid container spacing={2} sx={{m:0}}>
                <Grid item xs={3}>
                    <Box
                        sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            width: "auto",
                            height: "auto",
                        },
                        }}
                    >
                        <Card sx={{ maxWidth: 200 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="images/characterExample.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {mbti} / {position}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{p : 0, ml:0, mt:8}}>
                    <Box
                        sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            width: "auto",
                            height: "auto",
                        },
                        }}
                    >
                        <ComaparisionArrow comparision={comparision}/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            width: "auto",
                            height: "auto",
                        },
                        }}
                    >
                        <Card sx={{ maxWidth: 200 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="images/characterExample.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" component="div">
                                    {other.state.other.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {other.state.other.mbti} / {other.state.other.position}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            width: "auto",
                            height: "auto",
                        },
                        }}
                    >
                        - 공부를 잘합니다<br/>
                        - 뭐를 좋아합니다<br/>
                        - 오케오케<br/>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{p : 0, ml:0, mt:8}}>
                    <Box
                        sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            width: "auto",
                            height: "auto",
                        },
                        }}
                    >
                        
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            width: "auto",
                            height: "auto",
                        },
                        }}
                    >
                        - 공부를 잘합니다<br/>
                        - 뭐를 좋아합니다<br/>
                        - 오케오케<br/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );

}

export default Comparision;