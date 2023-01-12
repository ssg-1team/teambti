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
  Button
} from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Coworking({getDataMentoMenti}) {

    const onClick = () => {
        getDataMentoMenti();
    }

    const [EIcnt, setEIcnt] = React.useState(0);
    const [NScnt, setNScnt] = React.useState(0);
    const [FTcnt, setFTcnt] = React.useState(0);
    const [JPcnt, setJPcnt] = React.useState(0);
    
    const questionsMentoMentiEI = [
        {
            "E":"활발한 사람",
            "I":"조용한 사람"
        },
        {
            "E":"회식 좋아하는 사람",
            "I":"회식 싫어하는 사람"
        },
        {
            "E":"빨리 친해지는 사람",
            "I":"깊이 있게 천천히 친해지는 사람"
        },
        {
            "E":"열정적으로 일하는 사람",
            "I":"차분하게 일하는 사람"
        },
        {
            "E":"말을 주도적으로 해주는 사람",
            "I":"말을 잘 들어주는 사람 "
        },
    ]
    const questionsMentoMentiNS = [
        {
            "N":"미래를 생각하는 사람",
            "S":"현재에 집중하는 사람"
        },
        {
            "N":"일 처리가 신속한 사람",
            "S":"일 처리가 철저한 사람"
        },
        {
            "N":"큰 그림을 잘 그리는 사람",
            "S":"당장 주어진 일을 잘 해내는 사람"
        },
        {
            "N":"통찰력 있는 사람",
            "S":"디테일한 것에 강한 사람"
        },
        {
            "N":"개성이 강한 사람",
            "S":"일관성 있는 사람"
        },
    ]
    const questionsMentoMentiFT = [
        {
            "F":"공감이 우선인 사람",
            "T":"원칙이 우선인 사람"
        },
        {
            "F":"상황에 의존하는 사람",
            "T":"분석에 의존하는 사람"
        },
        {
            "F":"인간 관계를 중시하는 사람",
            "T":"사실 관계를 중시하는 사람"
        },
        {
            "F":"결과보다 과정에 초점을 두는 사람",
            "T":"과정보다 결과에 초점을 두는 사람"
        },
        {
            "F":"좋다&나쁘다 판단하는 사람",
            "T":"옳다&아니다 판단하는 사름"
        },
    ]
    const questionsMentoMentiJP = [
        {
            "J":"체계적인 사람",
            "P":"도전적인 사람"
        },
        {
            "J":"빠르게 판단하는 사람",
            "P":"유연하게 대처하는 사람"
        },
        {
            "J":"목적의식이 뚜렷한 사람",
            "P":"다양한 가능성을 열어두는 사람"
        },
        {
            "J":"여러 방면을 미리 대비하는 사람",
            "P":"융통성 있는 사람"
        },
        {
            "J":"계획적인 사람",
            "P":"자율적인 사람"
        },
    ]

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        멘토링하기
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6" component="div" align="center">
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6" component="div" align="center">
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>                
            </Grid>
            <Button onClick={onClick}>결과보기</Button>
        </Container>
    );
}

export default Coworking;
