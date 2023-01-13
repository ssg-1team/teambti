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
import Tag from "./Tag";

export default function MbtiModal() {
    // constants
  const e_id = parseInt(localStorage.getItem('e_id'));
  // mbti
  const [mbtiListDb, setMbtiListDb] = useState([]);
  const [mbti, setMbti] = useState(0); // m_id
  // tags
  const [tags, setTags] = useState([]);
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
  };

  const mbtiList = mbtiListDb.map((data, i) => (
		<MenuItem value={data.m_id} key={i}>
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
  }

  return (
    <>
      <Button onClick={handleOpen}>MBTI 등록하기</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <FormControl fullWidth>
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
          <Tag />
          {tags}
          <Button onClick={save}>저장하기</Button>
        </Box>
      </Modal>
    </>
  );
}