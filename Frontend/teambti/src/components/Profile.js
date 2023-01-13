import React, { useState } from "react";
import {
    CardActionArea,
    Grid,
    CardMedia,
    CardContent,
    Card,
    Typography,
  } from "@mui/material";
  
import EmpModal from "./EmpModal";

function Profile({user, key}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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
          <EmpModal user={user} open={open} handleClose={handleClose}/>
      </Card>
    </Grid>
  );
}
export default Profile;