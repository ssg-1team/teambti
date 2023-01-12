import * as React from 'react';
import {
    CardActionArea,
    Grid,
    CardMedia,
    CardContent,
    Card,
    Typography,
  } from "@mui/material";

function Profile({user, id}) {
  return (
    <Grid>
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image="images/characterExample.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.type} / {user.position}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
  );
}
export default Profile;