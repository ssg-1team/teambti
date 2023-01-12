import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";

import { API_HOST } from '../constant';
import { ContactlessOutlined } from "@mui/icons-material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MbtiModal() {
    // constants
  const e_id = parseInt(localStorage.getItem('e_id'));
  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // mbti
  const [mbti, setMbti] = useState(0);
  // tags
  const [tags, setTags] = useState([]);

  // 함수
  // mbti
  const handleChange = (event) => {
    setMbti(event.target.value); // m_id
  };

  const mbtiListDb = [
    {
        "m_id": 1,
        "type": "INTJ"
    },
    {
        "m_id": 2,
        "type": "INTP"
    },
    {
        "m_id": 3,
        "type": "ENTJ"
    },
    {
        "m_id": 4,
        "type": "ENTP"
    },
    {
        "m_id": 5,
        "type": "INFJ"
    },
    {
        "m_id": 6,
        "type": "INFP"
    },
    {
        "m_id": 7,
        "type": "ENFJ"
    },
    {
        "m_id": 8,
        "type": "ENFP"
    },
    {
        "m_id": 9,
        "type": "ISTJ"
    },
    {
        "m_id": 10,
        "type": "ISFJ"
    },
    {
        "m_id": 11,
        "type": "ESTJ"
    },
    {
        "m_id": 12,
        "type": "ESFJ"
    },
    {
        "m_id": 13,
        "type": "ISTP"
    },
    {
        "m_id": 14,
        "type": "ISFP"
    },
    {
        "m_id": 15,
        "type": "ESTP"
    },
    {
        "m_id": 16,
        "type": "ESFP"
    }
  ];

  const mbtiList = mbtiListDb.map((data, i) => (
    // console.log(i, data)
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
    .get(`${API_HOST}/member/setMbti`, data, {
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
        <Box sx={style}>
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
          {tags}
          <Button onClick={save}>저장하기</Button>
        </Box>
      </Modal>
    </>
  );
}