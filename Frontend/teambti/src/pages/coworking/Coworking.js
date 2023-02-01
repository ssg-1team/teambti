import * as React from "react";
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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Coworking({ getDataCoWorking, questionsNumber }) {
  // ENFJ 우선순위
  const questionsCoWorkingEI = [
    {
      E: "다수와 협업",
      I: "소수 또는 개인",
    },
    {
      E: "새로운 환경",
      I: "기존 환경과 동일",
    },
    {
      E: "리더가 부재",
      I: "리더가 이미 존재",
    },
    {
      E: "대화를 주도적으로 해야 함",
      I: "말을 잘 들어줘야 함",
    },
    {
      E: "지도자 필요",
      I: "팔로우 역할 필요",
    },
    {
      E: "통화를 많이 걸어야 함",
      I: "통화가 많지 않음",
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
      N: "아이디어, 직감에 의존해야 함",
      S: "정보,기록,경험에 의존해야 함",
    },
    {
      N: "독창적인 생각 중요",
      S: "객관적인 사실 중요",
    },
    {
      N: "일처리를 신속하게 처리해야 함",
      S: "일처리를 깔끔하게 처리해야 함",
    },
    {
      N: "미래를 봐야 함",
      S: "현실을 봐야 함",
    },
    {
      N: "나무보다 숲을 봐야 함",
      S: "숲보다 나무를 봐야 함",
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
      F: "융통성이 중요",
      T: "원리원칙이 중요",
    },
    {
      F: "사람과의 관계가 중요",
      T: "사실 관계를 따져야 함",
    },
    {
      F: "과정에 초점을 둬야 함",
      T: "결과가 중요함",
    },
    {
      F: "상황에 따른 판단이 필요",
      T: "분석적인 판단이 필요",
    },
    {
      F: "우호적 협조가 필요",
      T: "비판적 사고가 필요",
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
      J: "철저한 사전 계획이 필요",
      P: "다양한 가능성을 열어둠",
    },
    {
      J: "뚜렷한 기준이 필요함",
      P: "긴박하게 일을 처리해야 함",
    },
    {
      J: "체계적인 능력이 요구",
      P: "위기 대처 능력이 요구",
    },
    {
      J: "여러 대비책을 미리 세워야 함",
      P: "상황에 맞게 변화가 필요",
    },
    {
      J: "환경의 통제가 필요",
      P: "유연한 사고가 필요",
    },
    {
      J: "목표가 분명하고 조직의 체계가 명확함",
      P: "주어진 환경에 적응하고 임기응변이 필요",
    },
  ];
  const [EIcnt, setEIcnt] = React.useState(0);
  const [NScnt, setNScnt] = React.useState(0);
  const [FTcnt, setFTcnt] = React.useState(0);
  const [JPcnt, setJPcnt] = React.useState(0);

  const [myQuestionsIndex, setMyQuestionsIndex] = React.useState([]);
  while (myQuestionsIndex.length < questionsNumber) {
    let num = parseInt(Math.random() * 7 + 1);
    if (myQuestionsIndex.indexOf(num) == -1) {
      myQuestionsIndex.push(num);
    }
  }
  const [myQuestions, setMyQuestions] = React.useState([]);
  for (let i = 0; i < questionsNumber; i++) {
    myQuestions.push(questionsCoWorkingEI[i]);
    myQuestions.push(questionsCoWorkingNS[i]);
    myQuestions.push(questionsCoWorkingFT[i]);
    myQuestions.push(questionsCoWorkingJP[i]);
  }
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(myQuestions);
  console.log(myQuestions);
  console.log(typeof myQuestions);

  const onClick = () => {
    getDataCoWorking();
  };

  return (
    <div>
      {myQuestions.map((question) => (
        <div>
          {Object.values(question).map((item) => (
            <div key="{item}">{item}</div>
          ))}
          {Object.keys(question).map((item) => (
            <div key="{item}">{item}</div>
          ))}
        </div>
      ))}
    </div>
    // <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    //     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //         <Grid item xs={12}>
    //             <Typography gutterBottom variant="h5" component="div" align="center">
    //                 협업하기
    //             </Typography>
    //         </Grid>
    //         <Grid item xs={6}>
    //             <Card>
    //                 <CardActionArea>
    //                     <CardContent>
    //                         <Typography variant="h6" component="div" align="center">
    //                         </Typography>
    //                     </CardContent>
    //                 </CardActionArea>
    //             </Card>
    //         </Grid>
    //         <Grid item xs={6}>
    //             <Card>
    //                 <CardActionArea>
    //                     <CardContent>
    //                         <Typography variant="h6" component="div" align="center">
    //                         </Typography>
    //                     </CardContent>
    //                 </CardActionArea>
    //             </Card>
    //         </Grid>
    //     </Grid>
    //     <Button onClick={onClick}>결과보기</Button>
    // </Container>
  );
}