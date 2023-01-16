import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { matchingInfo } from "./MBTIInfo";
import { Typography } from '@mui/material';

export default function ComparisionArrow({user1, user2}) {
  return (
    <>
      <div style={{marginTop:"50px", justifyContent:"center", textAlign:"center"}}>
        <Typography sx={{bgcolor:"#F38181", pl:2, pr:2, pt:1, pb:1, borderRadius:3, boxShadow:4, color:"white"}}>
          {matchingInfo.map(
            (info, id) =>
              info.mbti1 == user1 && info.mbti2 == user2 && (
                info.content
            )
          )}
        </Typography>
        <div style={{marginTop:"10px"}}>
          <img src="images/rightArrow.png" style={{height:60}}></img>
        </div>
      </div>
      
      <div style={{marginTop:"40px", justifyContent:"center", textAlign:"center"}}> 
        <div style={{marginBottom:"10px"}}>
          <img src="images/leftArrow.png" style={{height:60}}></img> 
        </div>
        <Typography sx={{bgcolor:"#F38181", pl:2, pr:2, pt:1, pb:1, borderRadius:3, boxShadow:4, color:"white"}}>
          {matchingInfo.map(
            (info, id) =>
              info.mbti1 == user2 && info.mbti2 == user1 && (
                info.content
            )
          )}
        </Typography>
      </div>

    </>
  );
}
