import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import ComaparisionArrow from "../../components/ComparisionArrow"
function Comparision({comparisionUser}) {

    const user = {
        name : "김혜림",
        mbti : "INFP",
        position : "사원",
    }
    
    const other = {
        name : "이소정",
        mbti : "ISTJ",
        position : "사원"
    }

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
                                    {user.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {user.mbti} / {user.position}
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
                                    {other.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {other.mbti} / {other.position}
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