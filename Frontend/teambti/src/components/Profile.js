import React, { useState } from "react";
import {
    CardActionArea,
    Grid,
    CardMedia,
    CardContent,
    Card,
    Typography,
  } from "@mui/material";

import { API_HOST } from '../constant';
import axios from 'axios';
import EmpModal from "./EmpModal";

function Profile({user, key}) {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);

  const e_id = user.e_id;

  const handleOpen = () => {
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
    setOpen(true);
  }
  
  const handleClose = () => setOpen(false);

  return (
    <Grid>
      <Card sx={{ maxWidth: 250 }}>
          <CardActionArea onClick={handleOpen}>
              <CardMedia
                  component="img"
                  height="350"
                  image={user.image == null ? "images/characterExample.png" : user.image}
                  alt="IMAGE"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.mbti} / {user.position}
                  </Typography>
              </CardContent>
          </CardActionArea>
          <EmpModal user={user} open={open} handleClose={handleClose} tags={tags}/>
      </Card>
    </Grid>
  );
}
export default Profile;