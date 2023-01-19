import React, { useState } from "react";
import {
  CardActionArea,
  CardActions,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { API_HOST } from "../../constant";
import axios from "axios";
import EmpModal from "../../components/EmpModal";
import { Link } from "react-router-dom";

export default function MentoProfile({ user, key, ranking }) {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const e_id = user.e_id;
  const [myUrl, setMyUrl] = useState('');
  const [myMBTI, setMyMBTI] = useState('');

  const handleOpen = () => {  
    axios
      .get(`${API_HOST}/member/getEmp/${e_id}`,{
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data)
      })
    // #####[s]삭제NO
    axios
      .get(`${API_HOST}/member/getTag/${e_id}`, {
        headers: {
          // "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        const status = error?.response?.status;
        if (status === undefined) {
          console.dir("데이터 오류" + JSON.stringify(error));
        } else if (status === 400) {
          console.dir("400에러");
        } else if (status === 500) {
          console.dir("내부 서버 오류");
        }
      });
    axios
      .get(`${API_HOST}/char/getChar/${e_id}`, {
        headers: {
          // "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setMyUrl(response.data.completed)
      })
    // #####[e]삭제NO

    // [s]삭제예정
    // setTags(tags_list);
    // [e]
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box style={{position:'relative'}}>
      {ranking > 0 ? <img style={{position:'absolute', marginTop:10 ,top:-30, left:-30, width:80, zIndex:20}} src={require(`../../assets/image/icon/medal${ranking}.png`)} alt=""/> : <></>}
      <Card sx={{ width: "90%" }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="90%"
            image={
              user.image == null ? "images/characterExample.png" : {myUrl}
            }
            alt="IMAGE"
          />
          <CardContent style={{}}>
            <Typography gutterBottom>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
              <div><span style={{fontSize:25}}>{user.name}</span> <span>{user.position}</span></div>
              <div style={{fontSize:30}}>{user.mbti !== null ? user.mbti : "MBTI"}</div>
              </div>
            </Typography>
            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
              <Button style={{width:'45%'}} variant="contained" >
                프로필
              </Button>
              <Link 
                to={`/comparison`}
                state={{other : user}}
                style={{ textDecoration: "none", width:'45%'}}
                >
                <Button variant="contained" style={{width:'100%'}} >
                  성격비교 
                </Button>
              </Link>
            </div>
          </CardContent>
        </CardActionArea>
        <EmpModal
          user={user}
          open={open}
          handleClose={handleClose}
          tags={tags}
        />
      </Card>
    </Box>
  );
}
