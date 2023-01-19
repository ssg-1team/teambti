import * as React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Container,
  CardActionArea,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Toolbar,
  Box,
  Button,
} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import ReplayIcon from '@mui/icons-material/Replay';
import axios from "axios";
import { API_HOST } from '../../constant/index';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { style } from "@mui/system";
import { Link } from "react-router-dom";
import LeftDrawer from "../../components/base/LeftDrawer";
import Profile from "../../components/RenewProfile";
import ProfileMin from "../../components/ProfileMin";
import "./MentoMenti.css"


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', height:'100%'}}>
        <LinearProgress variant="determinate" {...props} 
          sx={{
            height:25,     
            backgroundColor: `#FFE8E8`,
            "& .MuiLinearProgress-bar": {
              backgroundColor: `#FFB4B4`
          }}} />
      </Box>
    </Box>
  );
}

const questionsMentomentiEI = [
  {
      "E":"활발한 사람",
      "I":"조용한 사람"
  },
  {
      "I":"회식 싫어하는 사람",
      "E":"회식 좋아하는 사람",
  },
  {
      "E":"빨리 친해지는 사람",
      "I":"깊이 있게 천천히 친해지는 사람"
  },
  {
      "I":"차분하게 일하는 사람",
      "E":"열정적으로 일하는 사람",
  },
  {
      "E":"말을 주도적으로 해주는 사람",
      "I":"말을 잘 들어주는 사람 "
  },
]
const questionsMentomentiNS = [
  {
      "N":"미래를 생각하는 사람",
      "S":"현재에 집중하는 사람"
  },
  {
      "S":"일 처리가 철저한 사람",
      "N":"일 처리가 신속한 사람",
  },
  {
      "N":"큰 그림을 잘 그리는 사람",
      "S":"당장 주어진 일을 잘 해내는 사람"
  },
  {
      "S":"디테일한 것에 강한 사람",
      "N":"통찰력 있는 사람",
  },
  {
      "N":"개성이 강한 사람",
      "S":"일관성 있는 사람"
  },
]
const questionsMentomentiFT = [
  {
      "F":"공감이 우선인 사람",
      "T":"원칙이 우선인 사람"
  },
  {
      "T":"분석에 의존하는 사람",
      "F":"상황에 의존하는 사람",
  },
  {
      "F":"인간 관계를 중시하는 사람",
      "T":"사실 관계를 중시하는 사람"
  },
  {
      "T":"과정보다 결과에 초점을 두는 사람",
      "F":"결과보다 과정에 초점을 두는 사람",
  },
  {
      "F":"좋다&나쁘다 판단하는 사람",
      "T":"옳다&아니다 판단하는 사람"
  },
]
const questionsMentomentiJP = [
  {
      "J":"체계적인 사람",
      "P":"도전적인 사람"
  },
  {
      "P":"유연하게 대처하는 사람",
      "J":"빠르게 판단하는 사람",
  },
  {
      "J":"목적의식이 뚜렷한 사람",
      "P":"다양한 가능성을 열어두는 사람"
  },
  {
      "P":"융통성 있는 사람",
      "J":"여러 방면을 미리 대비하는 사람",
  },
  {
      "J":"계획적인 사람",
      "P":"자율적인 사람"
  },
];
const myQuestions = [];
for (let i = 0; i < 5; i++) {
  myQuestions.push(questionsMentomentiEI[i]);
  myQuestions.push(questionsMentomentiNS[i]);
  myQuestions.push(questionsMentomentiFT[i]);
  myQuestions.push(questionsMentomentiJP[i]);
}
// console.log(myQuestions)
// 질문 섞기
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(myQuestions);
// 질문 섞기
let myTeamList = [[1, 'ESTJ'], [2, 'ESTP'], [3, 'ENTP'], [4, 'INFJ'], [5, 'ESTJ'], [6, 'ESFP'], [7, 'ISTJ'], [8, 'ENFP'], [9, 'ESFJ'], [10, 'ENTJ']];
// Coworking 실행부
function MentoMenti() {
  const e_id = parseInt(localStorage.getItem('e_id'));

  const [emps, setEmps] = useState([]);
  const [myName, setMyName] = useState('');
  // 선택지 3/5/7 개수에 따라서 myQuestions 지정
  useEffect(() => {
    // const e_id = parseInt(localStorage.getItem('e_id'));
    // const [emps, setEmps] = useState([]);
    axios
      .get(`${API_HOST}/member/getAll/${e_id}`,{
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data)
        setEmps(response.data);
        myTeamList = response.data.map(function(data){
          return [data.e_id, data.mbti, data.position, data.name, data.content]
        })
      })
    axios
      .get(`${API_HOST}/member/getEmp/${e_id}`,{
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setEmps(response.data);
        // console.log(response.data)
        setMyName(response.data.name);
      })
  }, []) 

  // 선택지 3/5/7 개수에 따라서 myQuestions 지정 
  const [progress, setProgress] = React.useState((1/20)*100);
  const [questionsNowNumber, setQuestionsNowNumber] = React.useState(0);
  const [EICnt, setEICnt] = React.useState(0);
  const [NSCnt, setNSCnt] = React.useState(0);
  const [FTCnt, setFTCnt] = React.useState(0);
  const [JPCnt, setJPCnt] = React.useState(0);
  const [EI, setEI] = React.useState("");
  const [NS, setNS] = React.useState("");
  const [FT, setFT] = React.useState("");
  const [JP, setJP] = React.useState("");
  const [MBTI, setMBTI] = React.useState("");
  const [MBTICheck, setMBTICheck] = React.useState(0);
  // useEffect 진행방식
  /* 질문 하나 선택할때마다 EICnt, NSCnt, FTCnt, JPCnt 변경 ex) E선택시 EICnt += 1, I선택시 EICnt -= 1
      이후 EI, NS, FT, JP에다가 E, I, N, S, F, T, J, P 지정
      정해진 각 MBTI 속성들을 MBTI라는 변수에 문자열 합치기
      정해진 MBTI를 가지고 Coworking 후보 선정
  */
  useEffect(() => {
    // console.log("EIcnt", EICnt);
    // console.log("NScnt", NSCnt);
    // console.log("FTcnt", FTCnt);
    // console.log("JPcnt", JPCnt);
      if (EICnt > 0) setEI("E");
      else if (EICnt < 0) setEI("I");
      else setEI("-");
      if (NSCnt > 0) setNS("N");
      else if (NSCnt < 0) setNS("S");
      else setNS("-");
      if (FTCnt > 0) setFT("F");
      else if (FTCnt < 0) setFT("T");
      else setFT("-"); 
      if (JPCnt > 0) setJP("J");
      else if (JPCnt < 0) setJP("P"); 
      else setJP("-");
  }, [EICnt, NSCnt, FTCnt, JPCnt]);
  useEffect(() => {
    // console.log("EI", EI)
    // console.log("NS", NS)
    // console.log("FT", FT)
    // console.log("JP", JP)
    let interval = setInterval(() => {
      clearInterval(interval);
      setMBTI(EI+NS+FT+JP);
    }, 1);
  }, [EI, NS, FT, JP])
  // useEffect(() => {
  //   console.log("MBTI", MBTI);
  // }, [MBTI, questionsNowNumber])
  useEffect(() => {
    setProgress((questionsNowNumber+1)/(20)*100);
    if (20 == questionsNowNumber) {
      let interval = setInterval(() => {
        setMBTICheck(MBTICheck + 1);
        clearInterval(interval)
      }, 100);
    }
  }, [questionsNowNumber])
  useEffect(() => {
    let interval = setInterval(() => {
    if (20 == questionsNowNumber) {
//       alert(`EICnt : ${EICnt}
// NSCnt : ${NSCnt}
// FTCnt : ${FTCnt}
// JPCnt : ${JPCnt}
// EI : ${EI}
// NS : ${NS}
// FT : ${FT}
// JP : ${JP}
// MBTI : ${MBTI}
// `)
      clearInterval(interval);
      // getDataCoWorking();
      }
    }, 10);
  }, [MBTICheck])
  // function onClick() {
  //   getDataCoWorking();
  //   // getCoworkingMBTI();
  // }
  function updateQuestions(key, value) {
    // console.log(key, value);
    if (key === "E") {
      setEICnt(EICnt + 1);
    } else if (key === "I") {
      setEICnt(EICnt - 1);
    } else if (key === "N") {
      setNSCnt(NSCnt + 1);
    } else if (key === "S") {
      setNSCnt(NSCnt - 1);
    } else if (key === "F") {
      setFTCnt(FTCnt + 1);
    } else if (key === "T") {
      setFTCnt(FTCnt - 1);
    } else if (key === "J") {
      setJPCnt(JPCnt + 1);
    } else if (key === "P") {
      setJPCnt(JPCnt - 1);
    }
    setQuestionsNowNumber(questionsNowNumber + 1);
  }
  useEffect(() => {
    setMBTICheck(MBTICheck + 1);
  }, [progress])
  let selectMBTI = MBTI;
  let myTeamListSelected = []
  // console.log('myTeamList', myTeamList)
  // 팀의 MBTI와 문자열 일치 정도 파악
  let myTeamSameNumberList = myTeamList.map(([e_id, mbti, position, name, content])=> {
    let cnt = 0;
    
    for (let i =0;i<4;i++){
      if (!mbti) continue
      if (selectMBTI[i] == mbti[i]) {
        cnt += 1;
      } 
    }
    return {e_id, mbti, cnt, position, name, content}
  })
  // console.log(myTeamSameNumberList)
  // 내림차순 정렬
  let myTeamSameNumberListSorted = myTeamSameNumberList.sort(function (a, b) {
    if (a.cnt < b.cnt) return 1
    if (a.cnt > b.cnt) return -1
    return 0
  })
  // 배열 섞는 함수
  const shuffleArray = array => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      const x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  };
  // 일치하는 개수따라 분리 후 객체를 섞음
  let myTeamSameNumberList0 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 0);
  let myTeamSameNumberList1 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 1);
  let myTeamSameNumberList2 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 2);
  let myTeamSameNumberList3 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 3);
  let myTeamSameNumberList4 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 4);
  shuffleArray(myTeamSameNumberList0);
  shuffleArray(myTeamSameNumberList1);
  shuffleArray(myTeamSameNumberList2);
  shuffleArray(myTeamSameNumberList3);
  shuffleArray(myTeamSameNumberList4);
    // 일치하는 사람이 4명이면, 섞은 후 3명만 뽑아낸다.
  let ranking = []
  if (myTeamSameNumberList4.length > 3) {
    myTeamListSelected = myTeamSameNumberList4.slice(0,3);
    let ranking = [1, 1, 1]

    // 1, 2명이면 4개가 일치한 사람만 결과로 낸다.
  } else if (myTeamSameNumberList4.length > 0) {
    myTeamListSelected = myTeamSameNumberList4;
    if (myTeamSameNumberList4.length == 1) {
      let ranking = [1]
    } else if (myTeamSameNumberList4.length == 2) {
      let ranking = [1, 1]
    }
   // 없으면 앞에서 내림차순의 3명만 뺀다.
  } else if (myTeamSameNumberList4.length == 0) {
    myTeamListSelected = myTeamSameNumberListSorted.slice(0,3);
    myTeamListSelected.map((member, idx)=>{
      if (idx==0) {
        ranking.push(1)
      } else {
        if (myTeamListSelected[idx-1].cnt > myTeamListSelected[idx].cnt) {
          ranking.push(ranking[idx-1]+1)
        } else {
          ranking.push(ranking[idx-1])
        }
      }
    })
  }
  //console.log(myTeamListSelected)
  //console.log(ranking)
  
  return (
    <>
      {20 > questionsNowNumber ? (
        <div style={{display:'flex', flexDirection:'column', width:'100%', height:'91.5%', position:'absolute', top:'8.5%', left:0}}>
          <div style={{ width: '100%', position:'relative', top:0, height:'100%', display: 'flex', flexDirection:'column'}}>
            <div style={{ width: '100%', height:"100%", display:'flex', flexDirection:'column', position:'relative'}}>
              <Box sx={{ width: `100%`, height:25}}>
                <LinearProgressWithLabel value={progress} />
              </Box>
              {myQuestions.map((question, index) => (
                <div
                style={{ height:'100%', display:'flex', flexDirection:'column',
                display: questionsNowNumber == index ? "block" : "none",
              }}>

                <div style={{width:'100%', height:50, fontSize:30, color:'white', backgroundColor:'rgba(0, 0, 0, 0.5)',position:'absolute', top:25, zIndex: 20, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  {myName}님이 바라는 멘토는?
                </div>
                {Object.entries(question).map(([key, value]) => (
                  <Button 
                    style={{
                      width:"50%", 
                      height:"100%", 
                    }} 
                    onClick={() => {updateQuestions(key, value)}}
                    sx={{ 
                        textAlign:'center', 
                        backgroundColor:'gray', 
                        color:"white",
                        fontSize:20,
                        transition:'all 1s',
                        ":hover":{
                          backgroundColor: 
                          key==='E' ? '#ff6961' : 
                          (key==='I' ? '#ffb480' : 
                          (key==='S' ? '#f8f38d' : 
                          (key==='N' ? '#42d6a4' : 
                          (key==='F' ? '#08cad1' : 
                          (key==='T' ? '#59adf6' : 
                          (key==='J' ? '#9d94ff' : 
                          (key==='P' ? '#c780e8' : 
                          '#ffffff'))))))), 
                          color:`white`,
                          fontSize:25
                        }
                      }}>
                      <div>{value}</div>
                  </Button>
                ))}
              </div>))}
            </div>
          </div>
        </div>
      ) : (
        <Container maxWidth='flex' id='rainbow'>
          <div style={{display:'flex', flexDirection:'row', height:'100%'}}>
            <div style={{width:'35%', textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                <div><span style={{fontSize:25}}>{myName}</span> <span>님이 원하는 MBTI는</span></div>
              </div>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                <div style={{marginTop:'20px', marginBottom:'50px'}}><Typography variant="h3" style={{borderBottom: '10px solid #DC0000', padding: '0 0 0 0.2em'}}>{MBTI}</Typography></div>
              </div>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                <Button variant="contained" href='/mentomentistart' width='100%' endIcon={<ReplayIcon/>} style={{color:"black", backgroundColor:"#FFFBAC", fontWeight:"bold"}}>다시하기</Button>
              </div>
            </div>
            <Container maxWidth="lg" className="mmt" sx={{display: { xs: "none", sm:"flex", md:"flex", lg: "flex" }, marginLeft:0, flexDirection:'row', alignItems:'center'}}>
            {myTeamListSelected.map((member, index) => (
                  member.e_id !== e_id &&
                  <Profile user={member} key={index} ranking={ranking[index]}/>
                  // <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  //     <Profile user={member} key={index} ranking={ranking[index]} />
                  // </div>
            ))}
            </Container>
            <Container maxWidth="xs" sx={{display: { xs: "block", sm:"none", md:"none", lg: "none" }}}>
              {myTeamListSelected.map((member, index) => (
                  member.e_id !== e_id &&
                  <ProfileMin user={member} key={index} ranking={ranking[index]} />
              ))}
            </Container>
          </div>
        </Container>
      )}
  </>
  );
}

export default MentoMenti;