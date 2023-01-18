import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { modalStyle } from "./Profile.module";

import { API_HOST } from '../constant';
import { bigButtonStyle, mbtiButtonStyle, smallButtonStyle } from "./_shared.module";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function MbtiModal({title, getMyUrl, getMyMBTI}) {

  const [defaultParts, setDefaultParts] = useState(1)
    // constants
  const e_id = parseInt(localStorage.getItem('e_id'));
  // mbti
  const [mbtiListDb, setMbtiListDb] = useState([]);
  const [mbti, setMbti] = useState(0); // m_id
  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)

    axios
    .get(`${API_HOST}/mbti/getAllMbti`, {
      headers: {
        // "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      setMbtiListDb(response.data);
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
  };
  const handleClose = () => setOpen(false);

  // 함수
  // mbti
  const handleChange = (event) => {
    setMbti(event.target.value); // m_id
    setDefaultParts(mbti > 8 ? mbti - 8 : mbti)
    // handleClose();
  };

  useEffect(()=> {
    console.log(mbti)
    setDefaultParts(mbti > 8 ? mbti - 8 : mbti)
  }, [mbti])

  const mbtiList = mbtiListDb.map((data, i) => (
      <MenuItem sx={{}} value={data.m_id} key={i}>
        {data.type}
      </MenuItem>
	));

  const save = () => {
    if (mbti == 0) {
      alert("mbti를 선택해주세요!");
      return
    }

    const data = {
			e_id: e_id,
			m_id: mbti,
		};

    axios
    .post(`${API_HOST}/member/setMbti`, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
      },
    })
    .then((response) => {
      console.log(response.data)
    })

    const data2 = {
      "e_id" : e_id,
      "head" : defaultParts,
      "background" : 0,
      "body" : defaultParts,
      "ear" : defaultParts,
      "eye" : defaultParts,
      "mouth" : defaultParts,
      "accessory" : 0,
      "completed" : defaultParts,
      }
    axios
    .post(`${API_HOST}/char/setChar`,data2, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
      },
    })
    .then((response) => {
      // console.log(response.data)
      axios
        .get(`${API_HOST}/mbti/getAllMbti`, {
          headers: {
            // "Access-Control-Allow-Origin" : "*",
            "Content-Type": "application/json",
          },    
        })
        .then((response) => {
          response.data.map((oneMBTI)=>{
            if(oneMBTI.m_id == defaultParts){
              getMyMBTI(oneMBTI.type);
            }
          })
          setMbtiListDb(response.data);
        })
          
      getMyUrl(defaultParts);
      console.log(data2)
      alert('저장되었습니다!')
      handleClose();
    })
  }

  return (
    <>
      <Button onClick={handleOpen} color="secondary" sx={{fontSize:'20px'}} endIcon={<SettingsSuggestIcon sx={{mb:0.5}}/>}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div >
          <Box sx={modalStyle} style={{width:500, display:'flex', flexDirection:'column'}}>
            <div style={{width:'100%', height:'90%'}}>
              <div style={{height:'100%',display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div style={{width:'50%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  <div style={{fontSize:25}}>나의 MBTI는?</div>
                  <br/>
                  <br/>
                  <FormControl style={{width:'50%'}}>
                    <InputLabel id="demo-simple-select-label">MBTI</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mbti}
                        label="MBTI"
                        
                        onChange={handleChange}
                      >
                      {mbtiList}
                    </Select>
                  </FormControl>
                </div>
                {/* <Tag /> */}
                <img style={{width:'40%'}} src={require(`../assets/image/parts/content/${mbti > 8? mbti-8 : mbti}.jpg`)} alt=""/>
              </div>
            </div>
            <br/>
            <br/>
            <Button onClick={save} style={{width:'100%'}} sx={bigButtonStyle}>저장하기</Button>
          </Box>
        </div>
      </Modal>
    </>
  );
}