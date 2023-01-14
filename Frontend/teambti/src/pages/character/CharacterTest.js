import React, { useEffect, useState } from "react";
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
import { CardActionArea } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

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

function CharacterTest() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [expanded, setExpanded] = React.useState(false);
  // tags
  const [tags, setTags] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
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
              <Typography>
                <div>머리는 1개로 고정임</div>
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
                {/* grid로 3개 이상이면 아래로 떨구기 */}
                <div>파트1</div>
                <div>파트2</div>
                <div>파트3</div>
                <div>파트4</div>
                <div>파트5</div>
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
                {/* grid로 3개 이상이면 아래로 떨구기 */}
                <div>파트1</div>
                <div>파트2</div>
                <div>파트3</div>
                <div>파트4</div>
                <div>파트5</div>
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
                {/* grid로 3개 이상이면 아래로 떨구기 */}
                <div>파트1</div>
                <div>파트2</div>
                <div>파트3</div>
                <div>파트4</div>
                <div>파트5</div>
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
                {/* grid로 3개 이상이면 아래로 떨구기 */}
                <div>파트1</div>
                <div>파트2</div>
                <div>파트3</div>
                <div>파트4</div>
                <div>파트5</div>
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
                {/* grid로 3개 이상이면 아래로 떨구기 */}
                <div>파트1</div>
                <div>파트2</div>
                <div>파트3</div>
                <div>파트4</div>
                <div>파트5</div>
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
                {/* grid로 3개 이상이면 아래로 떨구기 */}
                <div>파트1</div>
                <div>파트2</div>
                <div>파트3</div>
                <div>파트4</div>
                <div>파트5</div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.characterOne}>
          <Card sx={{ maxWidth: 345 }}>
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
          </Card>
        </div>
      </div>
    </>
  );
}

export default CharacterTest;
