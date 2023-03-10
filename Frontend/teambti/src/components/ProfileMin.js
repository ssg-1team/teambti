import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import { API_HOST } from "../constant";
import axios from "axios";
import EmpModal from "./EmpModal";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function ProfileMin({ user, id, ranking }) {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [myUrl, setMyUrl] = useState(9);
  const e_id = user.e_id;

  const theme = useTheme();

  useEffect(() => {
    axios
      .get(`${API_HOST}/char/getChar/${e_id}`, {
        headers: {
          // "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data)
        setMyUrl(response.data.completed);
        // console.log(myUrl);
      });
  }, []);

  const handleOpen = () => {
    // #####[s]삭제NO
    axios
      .get(`${API_HOST}/member/getTag/${e_id}`, {
        headers: {
          // "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTags(response.data);
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
    // #####[e]삭제NO

    // [s]삭제예정
    // setTags(tags_list);
    // [e]
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" style={{fontFamily:'Pretendard-Regular',}}>
            {user.name}
          </Typography>
          <Typography component="div" variant="h5" style={{fontFamily:'Pretendard-Regular',}}>
            {user.mbti !== null ? user.mbti : "MBTI"}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            style={{ width: "45%", fontFamily:'Pretendard-Regular', }}
            variant="contained"
            onClick={handleOpen}
          >
            프로필
          </Button>
          <EmpModal
            user={user}
            open={open}
            handleClose={handleClose}
            tags={tags}
          />
          <Link
            to={`/comparison`}
            state={{ other: user }}
            style={{ textDecoration: "none", width: "45%" }}
          >
            <Button variant="contained" style={{ width: "100%", fontFamily:'Pretendard-Regular', }}>
              성격비교
            </Button>
          </Link>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={
          myUrl == null
            ? require("../../src/assets/image/parts/content/0.jpg")
            : myUrl.length > 10
            ? myUrl
            : require(`../../src/assets/image/parts/content/${myUrl}.jpg`)
        }
        alt="Live from space album cover"
      />
    </Card>
  );
}
