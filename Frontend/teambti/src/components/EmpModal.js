import React, { useState } from "react";
import { Grid, CardMedia, Card, Modal, Box } from "@mui/material";
import { API_HOST } from "../constant";
import axios from "axios";
import { tagStyle, modalStyle } from "./Profile.module";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

export default function EmpModal({ user, open, handleClose, tags }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    user.image == null
                      ? "images/characterExample.png"
                      : user.image
                  }
                  alt="green iguana"
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "h3.fontSize",
                  fontWeight: "medium",
                  p: 2,
                }}
              >
                {user.name}
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "h5.fontSize",
                  fontWeight: "medium",
                  p: 2,
                }}
              >
                {user.mbti}
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "h8.fontSize",
                  fontWeight: "medium",
                  p: 2,
                }}
              >
                선의의 옹호자
              </Box>
            </Grid>
            <Grid item xs={12}>
              {tags.map((tag, id) => (
                <Box sx={tagStyle} key={id}>
                  # {tag.content}
                </Box>
              ))}
            </Grid>
            <Grid item xs={12}>
              - 밥먹기
              <br />- 머하기
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
