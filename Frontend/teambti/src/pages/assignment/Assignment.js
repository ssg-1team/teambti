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

function Assignment({number, getData}) {

    const onClick = () => {
        getData(number + 1);
    }

    const question = {
        id: 1,
        type: "EI",
        question1: "외향적인가요?",
        question2: "내향적인가요?"
      };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        업무 할당하기
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6" component="div" align="center">
                                    {question.question1}
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
                                    {question.question2}
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

export default Assignment;
