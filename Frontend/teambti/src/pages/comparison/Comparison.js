import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Tab,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_HOST } from "../../constant";
import { useLocation } from "react-router-dom";
import ComaparisionArrow from "../../components/ComparisionArrow";
import EmpModal from "../../components/EmpModal";
import { mbtiInfo } from "../../components/MBTIInfo";
import { tagStyle, modalStyle } from "../../components/Profile.module";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import "./Comparision.css";
import "../../css/List.css";
import { user } from "../../constant/mock";

function Comparision() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const e_id = localStorage.getItem("e_id");

  // API
  const [userName, setName] = React.useState("");
  const [userPosition, setPosition] = useState("");
  const [userMbti, setMbti] = useState("");
  const [userImage, setImage] = useState("");
  const [myUrl, setMyUrl] = useState(9);

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
        setMyUrl(response.data.image);
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
  console.log(other.state);

  const [meOpen, setMeOpen] = useState(true);
  const [youOpen, setYouOpen] = useState(false);

  const handleClickMe = () => {
    setMeOpen(true);
    setYouOpen(false);
  };

  const handleClickYou = () => {
    setMeOpen(false);
    setYouOpen(true);
  };

  return (
    <>
      <Container
        maxWidth="flex"
        id="half"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ ml: 0, mr: 0, mt: 2 }}>
            <Box>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <Card sx={{ Width: "100%", height: "100%" }}>
                    <CardMedia
                      component="img"
                      image={myUrl==null? require(`../../assets/image/parts/content/0.jpg`) : (myUrl.length >= 5 ? myUrl : require(`../../assets/image/parts/content/${myUrl}.jpg`))}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {userName} / {userMbti}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {mbtiInfo.map(
                          (mbti, id) => mbti.mbti == userMbti && mbti.comment
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ ml: 0, mr: 0, mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  width: "auto",
                  height: "auto",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ComaparisionArrow
                user1={userMbti}
                user2={other.state.other.mbti}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ ml: 0, mr: 0, mt: 2 }}>
            <Box>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <Card sx={{ Width: "100%", height: "100%" }}>
                    <CardMedia
                      component="img"
                      image={
                        other.state.other.image == null
                          ? "images/characterExample.png"
                          : other.state.other.image
                      }
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {other.state.other.name} / {other.state.other.mbti}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {mbtiInfo.map(
                          (mbti, id) =>
                            mbti.mbti == other.state.other.mbti && mbti.comment
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    mb: 1,
                    boxShadow: 24,
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    textColor="primary"
                    indicatorColor="primary"
                    centered
                  >
                    <Tab style={{fontFamily:'Pretendard-Regular',}} label="성격 장점" value="1" />
                    <Tab style={{fontFamily:'Pretendard-Regular',}} label="성격 단점" value="2" />
                    <Tab style={{fontFamily:'Pretendard-Regular',}} label="업무 스타일" value="3" />
                  </TabList>
                </Box>
                <Box sx={{ bgcolor: "white", borderRadius: 1 }}>
                  <TabPanel value="1">
                    {mbtiInfo.map(
                      (mbti, id) =>
                        mbti.mbti == userMbti &&
                        mbti.good.map((good) => <li>{good}</li>)
                    )}
                  </TabPanel>
                  <TabPanel value="2">
                    {mbtiInfo.map(
                      (mbti, id) =>
                        mbti.mbti == userMbti &&
                        mbti.bad.map((bad) => <li>{bad}</li>)
                    )}
                  </TabPanel>
                  <TabPanel value="3">
                    {mbtiInfo.map(
                      (mbti, id) =>
                        mbti.mbti == userMbti &&
                        mbti.work.map((work) => <li>{work}</li>)
                    )}
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    mb: 1,
                    boxShadow: 24,
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    centered
                  >
                    <Tab style={{fontFamily:'Pretendard-Regular',}} label="성격 장점" value="1" />
                    <Tab style={{fontFamily:'Pretendard-Regular',}} label="성격 단점" value="2" />
                    <Tab style={{fontFamily:'Pretendard-Regular',}} label="업무 스타일" value="3" />
                  </TabList>
                </Box>
                <Box sx={{ bgcolor: "white", borderRadius: 1 }}>
                  <TabPanel value="1">
                    {mbtiInfo.map(
                      (mbtiinfo, id) =>
                        mbtiinfo.mbti == other.state.other.mbti &&
                        mbtiinfo.good.map((good) => <li>{good}</li>)
                    )}
                  </TabPanel>
                  <TabPanel value="2">
                    {mbtiInfo.map(
                      (mbtiinfo, id) =>
                        mbtiinfo.mbti == other.state.other.mbti &&
                        mbtiinfo.bad.map((bad) => <li>{bad}</li>)
                    )}
                  </TabPanel>
                  <TabPanel value="3">
                    {mbtiInfo.map(
                      (mbtiinfo, id) =>
                        mbtiinfo.mbti == other.state.other.mbti &&
                        mbtiinfo.work.map((work) => <li>{work}</li>)
                    )}
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container
        // maxWidth="flex"
        id="half-xs"
        sx={{ display: { xs: "block", md: "none", overflowY: "auto" } }}
      >
        <Grid container>
          <Card sx={{ width: "50%" }}>
            <CardMedia
              component="img"
              image={myUrl==null? require(`../../assets/image/parts/content/0.jpg`) : (myUrl.length >= 5 ? myUrl : require(`../../assets/image/parts/content/${myUrl}.jpg`))}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {userName} / {userMbti}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {mbtiInfo.map(
                  (mbti, id) => mbti.mbti == userMbti && mbti.comment
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "50%" }}>
            <CardMedia
              component="img"
              image={
                other.state.other.image == null
                  ? "images/characterExample.png"
                  : other.state.other.image
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {other.state.other.name} / {other.state.other.mbti}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {mbtiInfo.map(
                  (mbti, id) =>
                    mbti.mbti == other.state.other.mbti && mbti.comment
                )}
              </Typography>
            </CardContent>
          </Card>
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  width: "auto",
                  height: "auto",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ComaparisionArrow
                user1={userMbti}
                user2={other.state.other.mbti}
              />
            </Box>
          </Grid>
          <Grid sx={{ width: "100%" }}>
            <Button
              sx={{ width: "50%", mt: 5 }}
              variant="contained"
              onClick={handleClickMe}
            >
              {userName}
            </Button>
            <Button
              sx={{ width: "50%", mt: 5 }}
              variant="contained"
              onClick={handleClickYou}
            >
              {other.state.other.name}
            </Button>
            <TabContext value={value}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  mb: 1,
                  boxShadow: 24,
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  textColor="primary"
                  indicatorColor="primary"
                  centered
                >
                  <Tab style={{fontFamily:'Pretendard-Regular',}} label="성격 장점" value="1" />
                  <Tab style={{fontFamily:'Pretendard-Regular',}} label="성격 단점" value="2" />
                  <Tab style={{fontFamily:'Pretendard-Regular',}} label="업무 스타일" value="3" />
                </TabList>
              </Box>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  display: meOpen ? "block" : "none",
                }}
              >
                <TabPanel value="1">
                  {mbtiInfo.map(
                    (mbti, id) =>
                      mbti.mbti == userMbti &&
                      mbti.good.map((good) => <li>{good}</li>)
                  )}
                </TabPanel>
                <TabPanel value="2">
                  {mbtiInfo.map(
                    (mbti, id) =>
                      mbti.mbti == userMbti &&
                      mbti.bad.map((bad) => <li>{bad}</li>)
                  )}
                </TabPanel>
                <TabPanel value="3">
                  {mbtiInfo.map(
                    (mbti, id) =>
                      mbti.mbti == userMbti &&
                      mbti.work.map((work) => <li>{work}</li>)
                  )}
                </TabPanel>
              </Box>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  display: youOpen ? "block" : "none",
                }}
              >
                <TabPanel value="1">
                  {mbtiInfo.map(
                    (mbtiinfo, id) =>
                      mbtiinfo.mbti == other.state.other.mbti &&
                      mbtiinfo.good.map((good) => <li>{good}</li>)
                  )}
                </TabPanel>
                <TabPanel value="2">
                  {mbtiInfo.map(
                    (mbtiinfo, id) =>
                      mbtiinfo.mbti == other.state.other.mbti &&
                      mbtiinfo.bad.map((bad) => <li>{bad}</li>)
                  )}
                </TabPanel>
                <TabPanel value="3">
                  {mbtiInfo.map(
                    (mbtiinfo, id) =>
                      mbtiinfo.mbti == other.state.other.mbti &&
                      mbtiinfo.work.map((work) => <li>{work}</li>)
                  )}
                </TabPanel>
              </Box>
            </TabContext>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Comparision;
