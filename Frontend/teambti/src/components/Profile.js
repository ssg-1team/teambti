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
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    CardActions,
  } from "@mui/material";
import { Container } from "@mui/system";
import { SettingsSuggestRounded, SupervisedUserCircle } from "@mui/icons-material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const boxStyle = {
  mx: 'auto',
  p: 1,
  mr: 1,
  mt: 3,
  bgcolor: (theme) =>
    theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
  color: (theme) =>
    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
  border: '1px solid',
  borderColor: (theme) =>
    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
  borderRadius: 2,
  textAlign: 'center',
  fontSize: '0.875rem',
  fontWeight: '300',
  display: 'inline',
}

function Profile({user, id, setComparision}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const goComparision = () => {
    setComparision(user);
  }
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
                <Typography gutterBottom variant="h6" component="div">
                  {user.name}
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  {user.mbti} / {user.position} 
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={goComparision}>
            성격비교
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={user.image}
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
              {tags.map((tag) => (
                <Box sx={boxStyle}>
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