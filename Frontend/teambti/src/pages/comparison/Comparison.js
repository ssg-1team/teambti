import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Tab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_HOST } from "../../constant";
import { useLocation } from "react-router-dom";
import ComaparisionArrow from "../../components/ComparisionArrow"
import EmpModal from "../../components/EmpModal";
import { mbtiInfo } from "../../components/MBTIInfo";
import { tagStyle, modalStyle } from "../../components/Profile.module";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import "./Comparision.css"

function Comparision() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const e_id = localStorage.getItem("e_id");

    // API
    const [userName, setName] = React.useState("");
    const [userPosition, setPosition] = useState("");
    const [userMbti, setMbti] = useState("");
    const [userImage, setImage] = useState("");

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

    const other = useLocation();

    return(
        <Container maxWidth='flex' id="half">
            <Grid container spacing={2}  >
                <Grid item xs={4} sx={{ ml:0, mr:0, mt: 10, mb: 4}}>
                    <Box>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            justifyContent="center"
                            alignItems="center"
                            
                        >
                            <Grid item xs={6}>
                                <Card sx={{ Width: "100%", height : "100%"}}>
                                    <CardMedia
                                    component="img"
                                    image={
                                        userImage == null || userImage == ""
                                        ? "images/characterExample.png"
                                        : userImage
                                    }
                                    alt="green iguana"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        fontSize: "h5.fontSize",
                                        fontWeight: "medium",
                                        p: 2,
                                    
                                    }}
                                >
                                    {userName} / {userMbti}
                                </Box>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        fontSize: "h8.fontSize",
                                        fontWeight: "medium",
                                        p: 2,
                                        mb: 3
                                    }}
                                >
                                    {mbtiInfo.map(
                                    (mbti, id) =>
                                        mbti.mbti == userMbti && (
                                        mbti.comment
                                        )
                                    )}
                                </Box>
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ bgcolor:"white", borderRadius:1, mb:1, boxShadow:24}}>
                                            <TabList 
                                                onChange={handleChange} 
                                                aria-label="lab API tabs example" 
                                                textColor="primary"
                                                indicatorColor="primary" centered
                                                
                                            >
                                                <Tab label="성격 장점" value="1" />
                                                <Tab label="성격 단점" value="2" />
                                                <Tab label="업무 스타일" value="3" />
                                            </TabList>
                                        </Box>
                                        <Box sx={{ bgcolor:"white", borderRadius:1, height:200}}>
                                            <TabPanel value="1">
                                                {mbtiInfo.map(
                                                (mbti, id) =>
                                                    mbti.mbti == userMbti && (
                                                    mbti.good.map((good) => <li>{good}</li>)
                                                    )
                                                )}

                                            </TabPanel>
                                            <TabPanel value="2">
                                                {mbtiInfo.map(
                                                (mbti, id) =>
                                                    mbti.mbti == userMbti && (
                                                    mbti.bad.map((bad) => <li>{bad}</li>)
                                                    )
                                                )}

                                            </TabPanel>
                                            <TabPanel value="3">
                                                {mbtiInfo.map(
                                                (mbti, id) =>
                                                    mbti.mbti == userMbti && (
                                                        mbti.work.map((work) => <li>{work}</li>)
                                                    )
                                                )}

                                            </TabPanel>
                                        </Box>
                                    </TabContext>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ ml:0, mr:0, mt: 10, mb: 4}}>
                    <Box
                        sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            width: "auto",
                            height: "auto",
                        },
                        justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        <ComaparisionArrow user1={userMbti} user2={other.state.other.mbti}/>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ ml:0, mr:0, mt: 10, mb: 4}}>
                    <Box>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={6}>
                                <Card sx={{ Width: "100%", height : "100%" }}>
                                    <CardMedia
                                    component="img"
                                    image={
                                        other.state.other.image == null
                                        ? "images/characterExample.png"
                                        : other.state.other.image
                                    }
                                    alt="green iguana"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                    textAlign: "center",
                                    fontSize: "h6.fontSize",
                                    fontWeight: "medium",
                                    p: 2,
                                    }}
                                >
                                    {other.state.other.name} / {other.state.other.mbti}
                                </Box>
                                <Box
                                    sx={{
                                    textAlign: "center",
                                    fontSize: "h8.fontSize",
                                    fontWeight: "medium",
                                    p: 2,
                                    mb: 3
                                    }}
                                >
                                    {mbtiInfo.map(
                                    (mbti, id) =>
                                        mbti.mbti == other.state.other.mbti && (
                                        mbti.comment
                                        )
                                    )}
                                </Box>
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ bgcolor:"white", borderRadius:1, mb:1, boxShadow:24 }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                                <Tab label="성격 장점" value="1" />
                                                <Tab label="성격 단점" value="2" />
                                                <Tab label="업무 스타일" value="3" />
                                            </TabList>
                                        </Box>
                                        <Box sx={{ bgcolor:"white", borderRadius:1, height:200}}>
                                            <TabPanel value="1">
                                                {mbtiInfo.map(
                                                (mbtiinfo, id) =>
                                                    mbtiinfo.mbti == other.state.other.mbti && (
                                                    mbtiinfo.good.map((good) => <li>{good}</li>)
                                                    )
                                                )}

                                            </TabPanel>
                                            <TabPanel value="2">
                                                {mbtiInfo.map(
                                                (mbtiinfo, id) =>
                                                    mbtiinfo.mbti == other.state.other.mbti && (
                                                    mbtiinfo.bad.map((bad) => <li>{bad}</li>)
                                                    )
                                                )}

                                            </TabPanel>
                                            <TabPanel value="3">
                                                {mbtiInfo.map(
                                                (mbtiinfo, id) =>
                                                    mbtiinfo.mbti == other.state.other.mbti && (
                                                    mbtiinfo.work.map((work) => <li>{work}</li>)
                                                    )
                                                )}

                                            </TabPanel>
                                        </Box>
                                    </TabContext>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );

}

export default Comparision;