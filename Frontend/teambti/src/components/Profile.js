import React, { useEffect, useState } from "react";
import {
    CardActionArea,
    Grid,
    CardMedia,
    CardContent,
    Card,
    Typography,
    Modal,
    Box,
  } from "@mui/material";
  
import { boxStyle, modalStyle } from "./Profile.module";

function Profile({user, id}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tags = [
    {
      id: 1,
      content: "내향적이지만"
    },

    {
      id: 2,
      content: "사람을좋아해"
    },
    {
      id: 3,
      content: "젤리도좋아"
    },
  ];

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
      </Card>
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
                <Box sx={boxStyle} key={id}>
                  # {tag.content}
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
    </Grid>
  );
}
export default Profile;