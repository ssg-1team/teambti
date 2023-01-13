import React, { useState } from "react";
import {
  Grid,
  CardMedia,
  Card,
  Modal,
  Box,
} from "@mui/material";
import { API_HOST } from '../constant';
import axios from 'axios';
import { tagStyle, modalStyle } from "./Profile.module";

export default function EmpModal({user, open, handleClose}) {
  const [tags, setTags] = useState([]);
  const e_id = user.e_id;
  
  if(open) {
    axios
    .get(`${API_HOST}/member/tag/${e_id}`, {
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
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={user.image == null ? "images/characterExample.png" : user.image}
                  alt="green iguana"
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: 'center', fontSize: 'h8.fontSize', fontWeight: 'medium', p:2}}>{user.name}</Box>
              <Box sx={{ textAlign: 'center', fontSize: 'h6.fontSize', fontWeight: 'medium', p:2 }}>{user.mbti}</Box>
              <Box sx={{ textAlign: 'center', fontSize: 'h8.fontSize', fontWeight: 'medium', p:2 }}>선의의 옹호자</Box>
            </Grid>
            <Grid item xs={12}>
              {tags.map((tag, id) => (
                <Box sx={tagStyle} key={id}>
                  # {tag}
                </Box>
              ))}
            </Grid>
            <Grid item xs={12}>
              - 밥먹기<br/>
              - 머하기
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}