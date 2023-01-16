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
import axios from "axios";
import { API_HOST } from '../../constant/index';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { style } from "@mui/system";
import { Link } from "react-router-dom";
import LeftDrawer from "../../components/base/LeftDrawer";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%'}}>
        <LinearProgress variant="determinate" {...props} sx={{height:35}} />
      </Box>
      {/* <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.danger">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}

const e_id = parseInt(localStorage.getItem('e_id'));
let myTeamList = [[1, 'ESTJ'], [2, 'ESTP'], [3, 'ENTP'], [4, 'INFJ'], [5, 'ESTJ'], [6, 'ESFP'], [7, 'ISTJ'], [8, 'ENFP'], [9, 'ESFJ'], [10, 'ENTJ']];

axios
    .get(`${API_HOST}/member/getAll/`,{
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log(response.data)
      myTeamList = response.data.map(function(data){
        return [data.e_id, data.mbti, data.position, data.name, data.content]
      })
      // console.log(myTeamList);
    })

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
        "T":"옳다&아니다 판단하는 사름"
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
]

const myQuestions = [];
for (let i = 0; i < 5; i++) {
  myQuestions.push(questionsMentomentiEI[i]);
  myQuestions.push(questionsMentomentiNS[i]);
  myQuestions.push(questionsMentomentiFT[i]);
  myQuestions.push(questionsMentomentiJP[i]);
}
// 질문 섞기
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(myQuestions);
// 질문 섞기

// Coworking 실행부
function Mentomenti() {
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
    setProgress((questionsNowNumber+1)/20*100);
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
  // 아래 데이터를 API를 통해서 받아와서 정리해야함. -> MBTI가 아닌 ID를 반환해서 그 ID로 캐릭터 팻말 세우기
  let selectMBTI = MBTI;
  // let myTeamList = ['ESTJ', 'ESTP', 'ENTP', 'INFJ', 'ESTJ', 'ESFP', 'ISTJ', 'ENFP', 'ESFJ', 'ENTJ'];
  let myTeamListSelected = []
  // ex) [4, 3, 2, 1, 4, 2, 3, 1, 3, 3]

  // 팀의 MBTI와 문자열 일치 정도 파악
  let myTeamSameNumberList = myTeamList.map(([e_id, mbti, position, name, content])=> {
    let cnt = 0;
    for (let i =0;i<4;i++){
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
  let myTeamSameNumberList1 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 1);
  let myTeamSameNumberList2 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 2);
  let myTeamSameNumberList3 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 3);
  let myTeamSameNumberList4 = myTeamSameNumberList.filter(oneMember => oneMember.cnt == 4);
  shuffleArray(myTeamSameNumberList1);
  shuffleArray(myTeamSameNumberList2);
  shuffleArray(myTeamSameNumberList3);
  shuffleArray(myTeamSameNumberList4);
    // 일치하는 사람이 4명이면, 섞은 후 3명만 뽑아낸다.
  if (myTeamSameNumberList4.length > 3) {
    myTeamListSelected = myTeamSameNumberList4.slice(0,3);

    // 0~3명이면 4개가 일치한 사람만 결과로 낸다.
  } else if (myTeamSameNumberList4.length > 0) {
    myTeamListSelected = myTeamSameNumberList4;
   // 없으면 앞에서 내림차순의 3명만 뺀다.
  } else if (myTeamSameNumberList4.length == 0) {
    myTeamListSelected = myTeamSameNumberListSorted.slice(0,3);
  }
  
  // let myRecomanded = myTeamListSelected.map((member)=> {
  //   axios
  //   .get(`${API_HOST}/member/getEmp/${member.e_id}/`,{
  //     headers: {
  //       "Access-Control-Allow-Origin" : "*",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then((response) => {
  //     // console.log(response.data)
  //     return response.data
  //   })
  // })
  // console.log(myRecomanded)

  return (
    <div style={{height:"100%", width:"100%"}}>
      {20 > questionsNowNumber ? (
        <div style={{height:"100%", width:"100%"}}>
          <Box sx={{ width: '100%'}}>
            <LinearProgressWithLabel value={progress} />
          </Box>
          {myQuestions.map((question, index) => (
            <div
              style={{ height:'94.7%', backgroundColor:'violet', display:'flex', flexDirection:'column',
                display: questionsNowNumber == index ? "block" : "none"
              }}
            >
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
            </div>
          ))}
          {/* {myQuestions.map((question, index) => (
            <div>
              {Object.entries(question).map(([key, value]) => (
                <button>
                  <div>{value}</div>
                </button>
              ))}P
            </div>
          ))} */}
        </div>
      ) : (
        <div>
          <div>님과 멘토링하면 좋은 MBTI
            <div>{MBTI}</div>
          </div>
          {myTeamListSelected.map((member, index) => (
            <div>{index + 1}번째 추천 : {member.mbti}, {member.e_id}, {member.content}, {member.position}, {member.name}</div>
          ))}
          {/* mbti로 이제 사람 찾는 로직 구현 */}
        <Link to='/mentomenti'>
          <button>다시하기</button>
        </Link>
        </div>
      )}
    </div>
  );
}

export default Mentomenti;