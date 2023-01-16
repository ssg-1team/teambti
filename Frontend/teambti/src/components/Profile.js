import React, { useState } from "react";
import {
  CardActionArea,
  CardActions,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { API_HOST } from "../constant";
import axios from "axios";
import EmpModal from "./EmpModal";
import { tags_list } from "../constant/mock";
import { smallButtonStyle } from "./_shared.module";
import { Link } from "react-router-dom";

export default function Profile({ user, key }) {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);

  const e_id = user.e_id;

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
    <Box>
      <Card sx={{ width: "100%" }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="100%"
            image={
              user.image == null ? "images/characterExample.png" : user.image
            }
            alt="IMAGE"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {user.name}
            </Typography>
            <Typography variant="h7" color="text.secondary">
              {user.mbti !== null ? user.mbti : "뭘까요?"} / {user.position}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link 
            to={`/comparison`}
            state={{other : user}}
            style={{ textDecoration: "none" }}
          >
            <Button sx={smallButtonStyle}>
              성격비교 
            </Button>
          </Link>
        </CardActions>
        <EmpModal
          user={user}
          open={open}
          handleClose={handleClose}
          tags={tags}
        />
      </Card>
    </Box>
  );
}
