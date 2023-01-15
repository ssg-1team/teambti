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
    <Timeline position="alternate" sx={{pl:0, m:0}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <ArrowBackIcon fontSize="small"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          sx={{ mt: 1.5 }}
          align="left"
          variant="caption"
          color="text.secondary">
            {matchingInfo.map(
              (info, id) =>
                info.mbti1 == user1 && info.mbti2 == user2 && (
                  info.content
              )
            )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <ArrowForwardIcon fontSize="small"/>  
        </TimelineDot>
        </TimelineSeparator>
        <TimelineContent
          sx={{ mt: 1.5 }}
          align="right"
          variant="caption"
          color="text.secondary">
            {matchingInfo.map(
              (info, id) =>
                info.mbti1 == user2 && info.mbti2 == user1 && (
                  info.content
              )
            )}
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
