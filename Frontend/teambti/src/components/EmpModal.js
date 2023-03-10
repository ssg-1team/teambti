import React, { useState } from "react";
import { Grid, CardMedia, Card, Modal, Box, Tab } from "@mui/material";
import { API_HOST } from "../constant";
import axios from "axios";
import { tagStyle, modalStyle } from "./Profile.module";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { mbtiInfo } from "./MBTIInfo";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import "../css/List.css";

export default function EmpModal({ user, open, handleClose, tags }) {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item sm={4}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="370"
                  image={
                    user.image == null
                      ? require('../assets/image/parts/content/0.jpg')
                      : user.image
                  }
                  alt="green iguana"
                />
              </Card>
            </Grid>
            <Grid item sm={8}>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "h6.fontSize",
                  fontWeight: "medium",
                  p: 2,
                }}
                style={{fontFamily:'Pretendard-Regular',}}
              >
                {user.name} / {user.mbti}
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "h8.fontSize",
                  fontWeight: "medium",
                  p: 2,
                  mb: 3
                }}
                style={{fontFamily:'Pretendard-Regular',}}
              >
                {mbtiInfo.map(
                  (mbti, id) =>
                    mbti.mbti == user.mbti && (
                      mbti.comment
                    )
                )}
              </Box>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" 
                      textColor="secondary"
                      indicatorColor="secondary" 
                      centered>
                      <Tab style={{fontFamily:'Pretendard-Regular',}} label="?????? ??????" value="1" />
                      <Tab style={{fontFamily:'Pretendard-Regular',}} label="?????? ??????" value="2" />
                      <Tab style={{fontFamily:'Pretendard-Regular',}} label="?????? ?????????" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" style={{fontFamily:'Pretendard-Regular',}}>
                    {mbtiInfo.map(
                      (mbti, id) =>
                        mbti.mbti == user.mbti && (
                          mbti.good.map((good) => <li>{good}</li>)
                        )
                    )}

                  </TabPanel>
                  <TabPanel value="2" style={{fontFamily:'Pretendard-Regular',}}>
                    {mbtiInfo.map(
                      (mbti, id) =>
                        mbti.mbti == user.mbti && (
                          mbti.bad.map((bad) => <li>{bad}</li>)
                        )
                    )}
      
                  </TabPanel>
                  <TabPanel value="3" style={{fontFamily:'Pretendard-Regular',}}>
                    {mbtiInfo.map(
                      (mbti, id) =>
                        mbti.mbti == user.mbti && (
                          mbti.work.map((work) => <li>{work}</li>)
                        )
                    )}

                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{mt:5}}>
              {tags.map((tag, id) => (
                <Box sx={tagStyle} key={id} style={{fontFamily:'Pretendard-Regular',}}>
                  # {tag.content}
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
