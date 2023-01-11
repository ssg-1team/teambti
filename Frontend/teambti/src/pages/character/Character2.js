import styles from "./Character2.module.css";
import React, { useEffect, useState, useCallback } from "react";
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
import { CardActionArea } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

// 1번
import ears1 from "../../assets/image/parts/ears/1.svg";
import head1 from "../../assets/image/parts/head/1.svg";
import mouth1 from "../../assets/image/parts/mouth/1.svg";
import eyes1 from "../../assets/image/parts/eyes/1.svg";
import body1 from "../../assets/image/parts/body/1.svg";
import back1 from "../../assets/image/parts/back/1.svg";
import acc1 from "../../assets/image/parts/acc/1.svg";
// 2번
import ears2 from "../../assets/image/parts/ears/2.svg";
import head2 from "../../assets/image/parts/head/2.svg";
import mouth2 from "../../assets/image/parts/mouth/2.svg";
import eyes2 from "../../assets/image/parts/eyes/2.svg";
import body2 from "../../assets/image/parts/body/2.svg";
import back2 from "../../assets/image/parts/back/2.svg";
import acc2 from "../../assets/image/parts/acc/2.svg";
// 3번
import ears3 from "../../assets/image/parts/ears/3.svg";
import head3 from "../../assets/image/parts/head/3.svg";
import mouth3 from "../../assets/image/parts/mouth/3.svg";
import eyes3 from "../../assets/image/parts/eyes/3.svg";
import body3 from "../../assets/image/parts/body/3.svg";
import back3 from "../../assets/image/parts/back/3.svg";
import acc3 from "../../assets/image/parts/acc/3.svg";
// 4번
import ears4 from "../../assets/image/parts/ears/4.svg";
import head4 from "../../assets/image/parts/head/4.svg";
import mouth4 from "../../assets/image/parts/mouth/4.svg";
import eyes4 from "../../assets/image/parts/eyes/4.svg";
import body4 from "../../assets/image/parts/body/4.svg";
import back4 from "../../assets/image/parts/back/4.svg";
import acc4 from "../../assets/image/parts/acc/4.svg";
// 5번
import ears5 from "../../assets/image/parts/ears/5.svg";
import head5 from "../../assets/image/parts/head/5.svg";
import mouth5 from "../../assets/image/parts/mouth/5.svg";
import eyes5 from "../../assets/image/parts/eyes/5.svg";
import body5 from "../../assets/image/parts/body/5.svg";
import back5 from "../../assets/image/parts/back/5.svg";
import acc5 from "../../assets/image/parts/acc/5.svg";
// 6번
import ears6 from "../../assets/image/parts/ears/6.svg";
import head6 from "../../assets/image/parts/head/6.svg";
import mouth6 from "../../assets/image/parts/mouth/6.svg";
import eyes6 from "../../assets/image/parts/eyes/6.svg";
import body6 from "../../assets/image/parts/body/6.svg";
import back6 from "../../assets/image/parts/back/6.svg";
import acc6 from "../../assets/image/parts/acc/6.svg";
// 7번
import ears7 from "../../assets/image/parts/ears/7.svg";
import head7 from "../../assets/image/parts/head/7.svg";
import mouth7 from "../../assets/image/parts/mouth/7.svg";
import eyes7 from "../../assets/image/parts/eyes/7.svg";
import body7 from "../../assets/image/parts/body/7.svg";
import back7 from "../../assets/image/parts/back/7.svg";
import acc7 from "../../assets/image/parts/acc/7.svg";
// 8번
import ears8 from "../../assets/image/parts/ears/8.svg";
import head8 from "../../assets/image/parts/head/8.svg";
import mouth8 from "../../assets/image/parts/mouth/8.svg";
import eyes8 from "../../assets/image/parts/eyes/8.svg";
import body8 from "../../assets/image/parts/body/8.svg";
import back8 from "../../assets/image/parts/back/8.svg";
import acc8 from "../../assets/image/parts/acc/8.svg";
// 9번
import ears9 from "../../assets/image/parts/ears/9.svg";
import head9 from "../../assets/image/parts/head/9.svg";
import mouth9 from "../../assets/image/parts/mouth/9.svg";
import eyes9 from "../../assets/image/parts/eyes/9.svg";
import body9 from "../../assets/image/parts/body/9.svg";
import back9 from "../../assets/image/parts/back/9.svg";

// 10번

import eyes10 from "../../assets/image/parts/eyes/10.svg";
import body10 from "../../assets/image/parts/body/10.svg";
import back10 from "../../assets/image/parts/back/10.svg";

// 11번

import eyes11 from "../../assets/image/parts/eyes/11.svg";
import body11 from "../../assets/image/parts/body/11.svg";
import back11 from "../../assets/image/parts/back/11.svg";

// 12번

import eyes12 from "../../assets/image/parts/eyes/12.svg";
import body12 from "../../assets/image/parts/body/12.svg";
import back12 from "../../assets/image/parts/back/12.svg";

// eyes는 15번까지
import eyes13 from "../../assets/image/parts/eyes/13.svg";
import eyes14 from "../../assets/image/parts/eyes/14.svg";
import eyes15 from "../../assets/image/parts/eyes/15.svg";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  const [myAcc, setMyAcc] = useState(1);
  const [myBack, setMyBack] = useState(1);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <div>캐릭터페이지</div>
      <div className={styles.characterDiv}>
        <div style={{ width: "20%" }}>
          <Accordion expanded>
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
                <button onClick={() => {setMyHead(9)}} className={styles.CharacterBtn}><img style={{ width: "30px" }} src={head9} alt="" /></button>
              </Typography>
            </AccordionDetails>
          </Accordion>
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
                <button onClick={() => {setMyEars(1)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears1} alt=""/></button>
                <button onClick={() => {setMyEars(2)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears2} alt=""/></button>
                <button onClick={() => {setMyEars(3)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears3} alt=""/></button>
                <button onClick={() => {setMyEars(4)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears4} alt=""/></button>
                <button onClick={() => {setMyEars(5)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears5} alt=""/></button>
                <button onClick={() => {setMyEars(6)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears6} alt=""/></button>
                <button onClick={() => {setMyEars(7)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears7} alt=""/></button>
                <button onClick={() => {setMyEars(8)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears8} alt=""/></button>
                <button onClick={() => {setMyEars(9)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={ears9} alt=""/></button>
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
                <button onClick={() => {setMyEyes(1)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes1} alt=""/></button>
                <button onClick={() => {setMyEyes(2)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes2} alt=""/></button>
                <button onClick={() => {setMyEyes(3)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes3} alt=""/></button>
                <button onClick={() => {setMyEyes(4)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes4} alt=""/></button>
                <button onClick={() => {setMyEyes(5)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes5} alt=""/></button>
                <button onClick={() => {setMyEyes(6)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes6} alt=""/></button>
                <button onClick={() => {setMyEyes(7)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes7} alt=""/></button>
                <button onClick={() => {setMyEyes(8)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes8} alt=""/></button>
                <button onClick={() => {setMyEyes(9)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes9} alt=""/></button>
                <button onClick={() => {setMyEyes(4)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes10} alt=""/></button>
                <button onClick={() => {setMyEyes(5)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes11} alt=""/></button>
                <button onClick={() => {setMyEyes(6)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes12} alt=""/></button>
                <button onClick={() => {setMyEyes(7)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes13} alt=""/></button>
                <button onClick={() => {setMyEyes(8)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes14} alt=""/></button>
                <button onClick={() => {setMyEyes(9)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={eyes15} alt=""/></button>
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
                <button onClick={() => {setMyMouth(1)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth1} alt=""/></button>
                <button onClick={() => {setMyMouth(2)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth2} alt=""/></button>
                <button onClick={() => {setMyMouth(3)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth3} alt=""/></button>
                <button onClick={() => {setMyMouth(4)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth4} alt=""/></button>
                <button onClick={() => {setMyMouth(5)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth5} alt=""/></button>
                <button onClick={() => {setMyMouth(6)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth6} alt=""/></button>
                <button onClick={() => {setMyMouth(7)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth7} alt=""/></button>
                <button onClick={() => {setMyMouth(8)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth8} alt=""/></button>
                <button onClick={() => {setMyMouth(9)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={mouth9} alt=""/></button>
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
                <button onClick={() => {setMyBody(1)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body1} alt=""/></button>
                <button onClick={() => {setMyBody(2)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body2} alt=""/></button>
                <button onClick={() => {setMyBody(3)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body3} alt=""/></button>
                <button onClick={() => {setMyBody(4)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body4} alt=""/></button>
                <button onClick={() => {setMyBody(5)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body5} alt=""/></button>
                <button onClick={() => {setMyBody(6)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body6} alt=""/></button>
                <button onClick={() => {setMyBody(7)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body7} alt=""/></button>
                <button onClick={() => {setMyBody(8)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body8} alt=""/></button>
                <button onClick={() => {setMyBody(9)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body9} alt=""/></button>
                <button onClick={() => {setMyBody(10)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body10} alt=""/></button>
                <button onClick={() => {setMyBody(11)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body11} alt=""/></button>
                <button onClick={() => {setMyBody(12)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={body12} alt=""/></button>
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
              <button onClick={() => {setMyAcc(1)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc1} alt=""/></button>
              <button onClick={() => {setMyAcc(2)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc2} alt=""/></button>
              <button onClick={() => {setMyAcc(3)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc3} alt=""/></button>
              <button onClick={() => {setMyAcc(4)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc4} alt=""/></button>
              <button onClick={() => {setMyAcc(5)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc5} alt=""/></button>
              <button onClick={() => {setMyAcc(6)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc6} alt=""/></button>
              <button onClick={() => {setMyAcc(7)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc7} alt=""/></button>
              <button onClick={() => {setMyAcc(8)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={acc8} alt=""/></button>
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
                <button onClick={() => {setMyBack(1)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back1} alt=""/></button>
                <button onClick={() => {setMyBack(2)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back2} alt=""/></button>
                <button onClick={() => {setMyBack(3)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back3} alt=""/></button>
                <button onClick={() => {setMyBack(4)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back4} alt=""/></button>
                <button onClick={() => {setMyBack(5)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back5} alt=""/></button>
                <button onClick={() => {setMyBack(6)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back6} alt=""/></button>
                <button onClick={() => {setMyBack(7)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back7} alt=""/></button>
                <button onClick={() => {setMyBack(8)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back8} alt=""/></button>
                {/* <button onClick={() => {setMyBack(9)}} className={styles.CharacterBtn}><img style={{width:"30px"}} src={back9} alt=""/></button> */}
                <button onClick={() => {setMyBack(10)}}className={styles.CharacterBtn}><img style={{width:"30px"}} src={back10} alt=""/></button>
                <button onClick={() => {setMyBack(11)}}className={styles.CharacterBtn}><img style={{width:"30px"}} src={back11} alt=""/></button>
                <button onClick={() => {setMyBack(12)}}className={styles.CharacterBtn}><img style={{width:"30px"}} src={back12} alt=""/></button>

              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.characterOne}>
          {/* <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  이준호 | ISTJ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */}
      <div style={{position:"absolute"}}>
        <img style={{ position: "absolute", top:"20px", height:"300px",width: "200px" }} src={require(`../../assets/image/parts/back/${myBack}.svg`)} alt="" />
        <img style={{ position: "absolute", top:"95px", left:"3px", width: "180px" }} src={require(`../../assets/image/parts/body/${myBody}.svg`)} alt="" />
        <img style={{ position: "absolute", top:"15px", left:"20px",width: "150px" }} src={require(`../../assets/image/parts/ears/${myEars}.svg`)} alt="" />
        <img style={{ position: "absolute", top:"35px", left:"20px",width: "150px" }} src={require(`../../assets/image/parts/head/${myHead}.svg`)} alt="" />
        <img style={{ position: "absolute", top:"95px", left:"45px", width: "100px" }} src={require(`../../assets/image/parts/mouth/${myMouth}.svg`)} alt="" />
        <img style={{ position: "absolute", top:"65px", left:"45px", width: "100px" }} src={require(`../../assets/image/parts/eyes/${myEyes}.svg`)} alt="" />
      {/* <img style={{ position: "absolute", width: "100px" }} src={acc1} alt="" /> */}
      </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
