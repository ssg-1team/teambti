import React, { useEffect, useState, useCallback } from "react";
import styles from "./Character.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";
import { API_HOST } from '../../constant/index';
import html2canvas from 'html2canvas';

// 1번
import ears1 from "../../assets/image/parts/ears/1.png";
import head1 from "../../assets/image/parts/head/1.png";
import mouth1 from "../../assets/image/parts/mouth/1.png";
import eyes1 from "../../assets/image/parts/eyes/1.png";
import body1 from "../../assets/image/parts/body/1.png";
import back1 from "../../assets/image/parts/back/1.png";
import acc1 from "../../assets/image/parts/acc/1.png";
// 2번
import ears2 from "../../assets/image/parts/ears/2.png";
import head2 from "../../assets/image/parts/head/2.png";
import mouth2 from "../../assets/image/parts/mouth/2.png";
import eyes2 from "../../assets/image/parts/eyes/2.png";
import body2 from "../../assets/image/parts/body/2.png";
import back2 from "../../assets/image/parts/back/2.png";
import acc2 from "../../assets/image/parts/acc/2.png";
// 3번
import ears3 from "../../assets/image/parts/ears/3.png";
import head3 from "../../assets/image/parts/head/3.png";
import mouth3 from "../../assets/image/parts/mouth/3.png";
import eyes3 from "../../assets/image/parts/eyes/3.png";
import body3 from "../../assets/image/parts/body/3.png";
import back3 from "../../assets/image/parts/back/3.png";
import acc3 from "../../assets/image/parts/acc/3.png";
// 4번
import ears4 from "../../assets/image/parts/ears/4.png";
import head4 from "../../assets/image/parts/head/4.png";
import mouth4 from "../../assets/image/parts/mouth/4.png";
import eyes4 from "../../assets/image/parts/eyes/4.png";
import body4 from "../../assets/image/parts/body/4.png";
import back4 from "../../assets/image/parts/back/4.png";
import acc4 from "../../assets/image/parts/acc/4.png";
// 5번
import ears5 from "../../assets/image/parts/ears/5.png";
import head5 from "../../assets/image/parts/head/5.png";
import mouth5 from "../../assets/image/parts/mouth/5.png";
import eyes5 from "../../assets/image/parts/eyes/5.png";
import body5 from "../../assets/image/parts/body/5.png";
import back5 from "../../assets/image/parts/back/5.png";
import acc5 from "../../assets/image/parts/acc/5.png";
// 6번
import ears6 from "../../assets/image/parts/ears/6.png";
import head6 from "../../assets/image/parts/head/6.png";
import mouth6 from "../../assets/image/parts/mouth/6.png";
import eyes6 from "../../assets/image/parts/eyes/6.png";
import body6 from "../../assets/image/parts/body/6.png";
import back6 from "../../assets/image/parts/back/6.png";
import acc6 from "../../assets/image/parts/acc/6.png";
// 7번
import ears7 from "../../assets/image/parts/ears/7.png";
import head7 from "../../assets/image/parts/head/7.png";
import mouth7 from "../../assets/image/parts/mouth/7.png";
import eyes7 from "../../assets/image/parts/eyes/7.png";
import body7 from "../../assets/image/parts/body/7.png";
import back7 from "../../assets/image/parts/back/7.png";
import acc7 from "../../assets/image/parts/acc/7.png";
// 8번
import ears8 from "../../assets/image/parts/ears/8.png";
import head8 from "../../assets/image/parts/head/8.png";
import mouth8 from "../../assets/image/parts/mouth/8.png";
import eyes8 from "../../assets/image/parts/eyes/8.png";
import body8 from "../../assets/image/parts/body/8.png";
import back8 from "../../assets/image/parts/back/8.png";
import acc8 from "../../assets/image/parts/acc/8.png";
// 9번
import mouth9 from "../../assets/image/parts/mouth/9.png";
import eyes9 from "../../assets/image/parts/eyes/9.png";
import body9 from "../../assets/image/parts/body/9.png";
import back9 from "../../assets/image/parts/back/9.png";

// 10번

import eyes10 from "../../assets/image/parts/eyes/10.png";
import body10 from "../../assets/image/parts/body/10.png";
import back10 from "../../assets/image/parts/back/10.png";

// 11번

import eyes11 from "../../assets/image/parts/eyes/11.png";
import body11 from "../../assets/image/parts/body/11.png";
import back11 from "../../assets/image/parts/back/11.png";

// 12번

import eyes12 from "../../assets/image/parts/eyes/12.png";
import body12 from "../../assets/image/parts/body/12.png";

// eyes는 15번까지
import eyes13 from "../../assets/image/parts/eyes/13.png";
import eyes14 from "../../assets/image/parts/eyes/14.png";
import eyes15 from "../../assets/image/parts/eyes/15.png";
import Tag from "../../components/Tag";

// function changeMyHead (selectHead) {
//   this.myhead = selectHead;
// }

// function changeMyEars (selectEars) {
//   this.myEars = selectEars;
// }

// function changeMyEyes (selectEyes) {
//   this.myEyes = selectEyes;
// }

// function changeMyMouth (selectMouth) {
//   this.myMouth = selectMouth;
// }

// function changeMyBody (selectBody) {
//   this.myBody = selectBody;
// }

// function changeMyAcc(selectAcc) {
//   this.myAcc = selectAcc;
// }

// function changeMyBack (selectBack) {
//   this.myBack = selectBack;
// }

function Character() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [myHead, setMyHead] = useState(1);
  const [myEars, setMyEars] = useState(1);
  const [myEyes, setMyEyes] = useState(1);
  const [myMouth, setMyMouth] = useState(1);
  const [myBody, setMyBody] = useState(1);
  const [myAcc, setMyAcc] = useState(0);
  const [myBack, setMyBack] = useState(0);

  // 사용자의 id를 가져오기
  const e_id = parseInt(localStorage.getItem('e_id'));
  let myName = 'TEAMBTI'
  axios
    .get(`${API_HOST}/member/getEmp/${e_id}`,{
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      myName = `${response.data.name}`
    })

  useEffect(() => {
    setMyParts();
  },[])


  axios
    .get(`${API_HOST}/member/getEmp/${e_id}`,{
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log(response.data);
    })

  function downloadMyCharacter() {
    const el = document.getElementById('myCharacterDiv');
    html2canvas(el, {width: 441, height:566}).then(function(canvas, width) {
      let downloadURL = canvas.toDataURL('image/png');
      let aTag = document.getElementById('target');
      aTag.href = downloadURL;
      aTag.download =`${myName}.jpg`
      aTag.click();
    });
  }
  
  function setMyParts() {
    axios
    .get(`${API_HOST}/char/getChar/${e_id}`,{
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      setMyEars(response.data.ear);
      setMyAcc(response.data.accessory);
      setMyBody(response.data.body);
      setMyEyes(response.data.eye);
      setMyHead(response.data.head);
      setMyMouth(response.data.mouth);
      setMyBack(response.data.background);
    })
    .catch((error) => {
      console.log(error.data);
    });
  }  

  function saveMyParts() {
    const el = document.getElementById('myCharacterDiv');
    html2canvas(el, {width: 441, height:566}).then((canvas) => {
      let content = canvas.toDataURL('image/png', 1.0);
      console.log("content", content)
    });
    const data = {
      "head" : myHead,
      "background" : myBack,
      "body" : myBody,
      "ear" : myEars,
      "eye" : myEyes,
      "mouth" : myMouth,
      "e_id" : e_id,
      "accessory" : myAcc
      }
    axios
    .post(`${API_HOST}/char/setChar`,data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
      },
    })
    .then(() => {
      alert('저장되었습니다!')
    })
  }


  const [expanded, setExpanded] = React.useState(false);
  // tags
  const [tags, setTags] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      
      <Grid container spacing={0}>
        <Grid container xs={8}>
          <Grid xs={4}>
            {/* <Accordion expanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>머리</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >
                    {myHead}
                    <button onClick={() => {setMyHead(1)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head1} alt="" /></button>
                    <button onClick={() => {setMyHead(2)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head2} alt="" /></button>
                    <button onClick={() => {setMyHead(3)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head3} alt="" /></button>
                    <button onClick={() => {setMyHead(4)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head4} alt="" /></button>
                    <button onClick={() => {setMyHead(5)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head5} alt="" /></button>
                    <button onClick={() => {setMyHead(6)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head6} alt="" /></button>
                    <button onClick={() => {setMyHead(7)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head7} alt="" /></button>
                    <button onClick={() => {setMyHead(8)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head8} alt="" /></button>
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
            <div style={{overflowY:"auto", maxHeight:"566px"}}>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>귀</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <button
                    onClick={() => {
                      setMyEars(1);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears1} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEars(2);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears2} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEars(3);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears3} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEars(4);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears4} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEars(5);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears5} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEars(6);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears6} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEars(7);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears7} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEars(8);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={ears8} alt="" />
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography>눈</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <button
                    onClick={() => {
                      setMyEyes(1);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes1} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(2);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes2} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(3);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes3} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(4);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes4} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(5);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes5} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(6);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes6} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(7);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes7} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(8);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes8} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(9);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes9} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(10);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes10} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(11);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes11} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(12);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes12} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(13);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes13} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(14);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes14} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyEyes(15);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={eyes15} alt="" />
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>입</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <button
                    onClick={() => {
                      setMyMouth(1);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth1} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(2);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth2} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(3);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth3} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(4);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth4} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(5);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth5} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(6);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth6} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(7);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth7} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(8);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth8} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyMouth(9);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={mouth9} alt="" />
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography>몸통</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <button
                    onClick={() => {
                      setMyBody(1);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body1} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(2);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body2} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(3);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body3} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(4);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body4} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(5);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body5} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(6);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body6} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(7);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body7} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(8);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body8} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(9);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body9} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(10);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body10} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(11);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body11} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBody(12);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={body12} alt="" />
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel2bh-header"
              >
                <Typography>악세사리</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <button
                    onClick={() => {
                      setMyAcc(1);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc1} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyAcc(2);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc2} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyAcc(3);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc3} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyAcc(4);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc4} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyAcc(5);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc5} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyAcc(6);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc6} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyAcc(7);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc7} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyAcc(8);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={acc8} alt="" />
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
              >
                <Typography>배경</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <button
                    onClick={() => {
                      setMyBack(1);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back1} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(2);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back2} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(3);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back3} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(4);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back4} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(5);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back5} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(6);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back6} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(7);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back7} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(8);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back8} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(9);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back9} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(10);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back10} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setMyBack(11);
                    }}
                    className={styles.CharacterBtn}
                  >
                    <img style={{ width: "30px" }} src={back11} alt="" />
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            </div>
          </Grid>
          <Grid xs={8}>
            <div style={{position:"relative"}} id="myCharacterDiv">
              <div>안녕하세요?</div>
              <div style={{backgroundColor:"red", width:"400px"}}></div>
              <div style={{position:"absolute",top:"0", left:"0"}}>
              <img 
                style={{ position: "absolute" }}
                src={require(`../../assets/image/parts/back/${myBack}.png`)}
                alt=""
              />
              <img
                style={{ position: "absolute" }}
                src={require(`../../assets/image/parts/body/${myBody}.png`)}
                alt=""
              />
              <img
                style={{ position: "absolute" }}
                src={require(`../../assets/image/parts/ears/${myEars}.png`)}
                alt=""
              />
              <img
                style={{ position: "absolute" }}
                src={require(`../../assets/image/parts/head/${myHead}.png`)}
                alt=""
              />
              <img
                style={{ position: "absolute" }}
                src={require(`../../assets/image/parts/mouth/${myMouth}.png`)}
                alt=""
              />
              <img
                style={{ position: "absolute" }}
                src={require(`../../assets/image/parts/eyes/${myEyes}.png`)}
                alt=""
              />
              <img
                style={{ position: "absolute" }}
                src={require(`../../assets/image/parts/acc/${myAcc}.png`)}
                alt=""
              />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid xs={4}>
          <Tag />
        </Grid>
      </Grid>
      <button onClick={saveMyParts}>설정</button>
      <button onClick={downloadMyCharacter}>다운로드</button>
      <button onClick={setMyParts}>초기화</button>
      {/* <img src=""/> */}
      <a id="target" style={{display:"none"}}>안녕?</a>
      {/* <a id="target" style="display: none" href="#">다운로드</a> */}
      {/* <></> */}
    </div>
  );
}

export default Character;
