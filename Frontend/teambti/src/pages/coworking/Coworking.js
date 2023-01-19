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
import ReplayIcon from '@mui/icons-material/Replay';
import { Link } from "react-router-dom";
import LeftDrawer from "../../components/base/LeftDrawer";
import Profile from "../../components/RenewProfile";
import ProfileMin from "../../components/ProfileMin";
import "./Coworking.css"

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
      {/* <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.danger">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}



// ENFJ 우선순위 -> MBTICoWorking 선택지
const questionsCoWorkingEI = [
  {
    E: "다수와 협업",
    I: "소수 또는 개인",
  },
  {
    I: "기존 환경과 동일",
    E: "새로운 환경",
  },
  {
    E: "리더가 부재",
    I: "리더가 이미 존재",
  },
  {
    I: "말을 잘 들어줘야 함",
    E: "대화를 주도적으로 해야 함",
  },
  {
    E: "지도자 필요",
    I: "팔로우 역할 필요",
  },
  {
    I: "통화가 많지 않음",
    E: "통화를 많이 걸어야 함",
  },
  {
    E: "열정적인 분위기",
    I: "차분한 분위기",
  },
];
const questionsCoWorkingNS = [
  {
    N: "창의적 사고 필요",
    S: "객관적인 분석 필요",
  },
  {
    S: "정보,기록,경험에 의존해야 함",
    N: "아이디어, 직감에 의존해야 함",
  },
  {
    N: "독창적인 생각 중요",
    S: "객관적인 사실 중요",
  },
  {
    S: "일처리가 깔끔해야 함",
    N: "일처리가 신속해야 함",
  },
  {
    N: "미래를 봐야 함",
    S: "현실을 봐야 함",
  },
  {
    S: "숲보다 나무를 봐야 함",
    N: "나무보다 숲을 봐야 함",
  },
  {
    N: "새로움이 필요한 상황",
    S: "유지가 중요한 상황",
  },
];
const questionsCoWorkingFT = [
  {
    F: "포괄적인 사고 필요",
    T: "논리적인 사고 필요",
  },
  {
    T: "원리원칙이 중요",
    F: "융통성이 중요",
  },
  {
    F: "사람과의 관계가 중요",
    T: "사실 관계를 따져야 함",
  },
  {
    T: "결과가 중요함",
    F: "과정에 초점을 둬야 함",
  },
  {
    F: "상황에 따른 판단이 필요",
    T: "분석적인 판단이 필요",
  },
  {
    T: "비판적 사고가 필요",
    F: "우호적 협조가 필요",
  },
  {
    F: "희생과 헌신이 필요",
    T: "공정성이 필요",
  },
];
const questionsCoWorkingJP = [
  {
    J: "기한 엄수가 중요",
    P: "기한이 비교적 자유로움",
  },
  {
    P: "다양한 가능성을 열어둠",
    J: "철저한 사전 계획이 필요",
  },
  {
    J: "뚜렷한 기준이 필요함",
    P: "긴박하게 일을 처리해야 함",
  },
  {
    P: "위기 대처 능력이 요구",
    J: "체계적인 능력이 요구",
  },
  {
    J: "여러 대비책을 미리 세워야 함",
    P: "상황에 맞게 변화가 필요",
  },
  {
    P: "유연한 사고가 필요",
    J: "환경의 통제가 필요",
  },
  {
    J: "목표가 분명하고 조직의 체계가 명확함",
    P: "주어진 환경에 적응하고 임기응변이 필요",
  },
];
// ENFJ 우선순위 -> MBTICoWorking 선택지
// 질문이 3/5/7개인 경우 case 분리
const myQuestionsIndex3 = [];
while (myQuestionsIndex3.length < 3) {
  let num = parseInt(Math.random() * 7);
  if (myQuestionsIndex3.indexOf(num) == -1) {
    myQuestionsIndex3.push(num);
  }
}
const myQuestions3 = [];
for (let i = 0; i < 3; i++) {
  myQuestions3.push(questionsCoWorkingEI[myQuestionsIndex3[i]]);
  myQuestions3.push(questionsCoWorkingNS[myQuestionsIndex3[i]]);
  myQuestions3.push(questionsCoWorkingFT[myQuestionsIndex3[i]]);
  myQuestions3.push(questionsCoWorkingJP[myQuestionsIndex3[i]]);
}
const myQuestionsIndex5 = [];
while (myQuestionsIndex5.length < 5) {
  let num = parseInt(Math.random() * 7);
  if (myQuestionsIndex5.indexOf(num) == -1) {
    myQuestionsIndex5.push(num);
  }
}
const myQuestions5 = [];
for (let i = 0; i < 5; i++) {
  myQuestions5.push(questionsCoWorkingEI[myQuestionsIndex5[i]]);
  myQuestions5.push(questionsCoWorkingNS[myQuestionsIndex5[i]]);
  myQuestions5.push(questionsCoWorkingFT[myQuestionsIndex5[i]]);
  myQuestions5.push(questionsCoWorkingJP[myQuestionsIndex5[i]]);
}
const myQuestions7 = [];
for (let i = 0; i < 7; i++) {
  myQuestions7.push(questionsCoWorkingEI[i]);
  myQuestions7.push(questionsCoWorkingNS[i]);
  myQuestions7.push(questionsCoWorkingFT[i]);
  myQuestions7.push(questionsCoWorkingJP[i]);
}

// 질문이 3/5/7개인 경우 case 분리
// 질문 섞기
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(myQuestions3);
shuffle(myQuestions5);
shuffle(myQuestions7);
// 질문 섞기
let myTeamList = [[1, 'ESTJ'], [2, 'ESTP'], [3, 'ENTP'], [4, 'INFJ'], [5, 'ESTJ'], [6, 'ESFP'], [7, 'ISTJ'], [8, 'ENFP'], [9, 'ESFJ'], [10, 'ENTJ']];
// Coworking 실행부
function Coworking({ questionsNumber }) {

  const [emps, setEmps] = useState([]);
  const [myName, setMyName] = useState('');
  // 선택지 3/5/7 개수에 따라서 myQuestions 지정
  useEffect(() => {
    const e_id = parseInt(localStorage.getItem('e_id'));
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
        // console.log(myTeamList)
        // console.log(myTeamList);
        // console.log('여기임')
      })
    axios
      .get(`${API_HOST}/member/getEmp/${e_id}`,{
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setEmps(response.data);
        console.log(response.data)
        // myTeamList = response.data.map(function(data){
        //   return [data.e_id, data.mbti, data.position, data.name, data.content]
        // })
        // console.log(myTeamList)
        // console.log(myTeamList);
        // console.log('여기임')
        setMyName(response.data.name);
      })
  }, []) 
  useEffect(()=>{
    console.log(myTeamList)
  },[myTeamList])

  let myQuestions = [];
  if (questionsNumber == 3) {
    myQuestions = myQuestions3;
  } else if (questionsNumber == 5) {
    myQuestions = myQuestions5;
  } else if (questionsNumber == 7) {
    myQuestions = myQuestions7;
  }
  // 선택지 3/5/7 개수에 따라서 myQuestions 지정 
  const [progress, setProgress] = React.useState((1/questionsNumber*4)*100);
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
    setProgress((questionsNowNumber+1)/(questionsNumber*4)*100);
    if (questionsNumber * 4 == questionsNowNumber) {
      let interval = setInterval(() => {
        setMBTICheck(MBTICheck + 1);
        clearInterval(interval)
      }, 100);
    }
  }, [questionsNowNumber])
  useEffect(() => {
    let interval = setInterval(() => {
    if (questionsNumber * 4 == questionsNowNumber) {
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
  console.log('myTeamList', myTeamList)
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
    // 일치하는 사람이 4명이면, 섞은 후 3명만 뽑아낸다.
  if (myTeamSameNumberList4.length > 3) {
    myTeamListSelected = myTeamSameNumberList4.slice(0,3);
    let ranking = [1, 1, 1] 
    // 0~3명이면 4개가 일치한 사람만 결과로 낸다.
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
  
  let myRecomanded = myTeamListSelected.map((member)=> {
    axios
    .get(`${API_HOST}/member/getEmp/${member.e_id}/`,{
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log(response.data)
      return response.data
    })
  })
  console.log(myRecomanded)

  return (
    <>
    {questionsNumber * 4 > questionsNowNumber ? (
    <div style={{display:'flex', flexDirection:'column', width:'100%', height:'91.5%', position:'absolute', top:'8.5%', left:0}}>
      <div style={{ width: '100%', position:'relative', top:0, height:'100%', display: 'flex', flexDirection:'column', backgroundColor:'yellow'}}>
      
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
              {myName}님의 상황은 어떤가요?
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
                <Button variant="contained" href='/coworkingstart' width='100%' endIcon={<ReplayIcon/>} style={{color:"black", backgroundColor:"#FFFBAC", fontWeight:"bold"}}>다시하기</Button>
              </div>
            </div>
            <Container maxWidth="lg" className="mmt" sx={{display: { xs: "none", sm:"flex", md:"flex", lg: "flex" }, marginLeft:0, flexDirection:'row', alignItems:'center'}}>
            {myTeamListSelected.map((member, index) => (
                  <Profile user={member} key={index} ranking={ranking[index]}/>
                  // <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  //     <Profile user={member} key={index} ranking={ranking[index]} />
                  // </div>
            ))}
            </Container>
            <Container maxWidth="xs" sx={{display: { xs: "block", sm:"none", md:"none", lg: "none" }}}>
              {myTeamListSelected.map((member, index) => (
                  <ProfileMin user={member} key={index} ranking={ranking[index]} />
              ))}
            </Container>
          </div>
        </Container>
      )}
    </>
  );
}

export default Coworking;