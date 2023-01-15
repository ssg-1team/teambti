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

export default function ComparisionArrow({user1, user2}) {
  return (
    <>
      <div style={{marginTop:"50px", justifyContent:"center", textAlign:"center"}}>
        {matchingInfo.map(
          (info, id) =>
            info.mbti1 == user1 && info.mbti2 == user2 && (
              info.content
          )
        )}
        <div style={{marginTop:"30px"}}>
          <img src="images/rightArrow.png" style={{height:70}}></img>
        </div>
      </div>
      
      <div style={{marginTop:"70px", justifyContent:"center", textAlign:"center"}}> 
        <div style={{marginBottom:"30px"}}>
          <img src="images/leftArrow.png" style={{height:70}}></img> 
        </div>
        {matchingInfo.map(
          (info, id) =>
            info.mbti1 == user2 && info.mbti2 == user1 && (
              info.content
          )
        )}
      </div>

    </>
  );
}
