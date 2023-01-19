import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { modalStyle } from "./Profile.module";

import { API_HOST } from "../constant";
import {
  bigButtonStyle,
  mbtiButtonStyle,
  smallButtonStyle,
} from "./_shared.module";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export default function MbtiModal({ title, getMyUrl, getMyMBTI }) {
  const [defaultParts, setDefaultParts] = useState(1);
  // constants
  const e_id = parseInt(localStorage.getItem("e_id"));
  // mbti
  const [mbtiListDb, setMbtiListDb] = useState([]);
  const [mbti, setMbti] = useState(0); // m_id
  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);

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
    setDefaultParts(mbti > 8 ? mbti - 8 : mbti);
    // handleClose();
  };

  useEffect(() => {
    console.log(mbti);
    setDefaultParts(mbti > 8 ? mbti - 8 : mbti);
  }, [mbti]);

  const mbtiList = mbtiListDb.map((data, i) => (
    <MenuItem sx={{}} value={data.m_id} key={i}>
      {data.type}
    </MenuItem>
  ));

  const save = () => {
    if (mbti == 0) {
      alert("mbti를 선택해주세요!");
      return;
    }

    const data = {
      e_id: e_id,
      m_id: mbti,
    };

    axios
      .post(`${API_HOST}/member/setMbti`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
      });

    const data2 = {
      e_id: e_id,
      head: defaultParts,
      background: 0,
      body: defaultParts,
      ear: defaultParts,
      eye: defaultParts,
      mouth: defaultParts,
      accessory: 0,
      completed: defaultParts == 0 ? 'https://user-images.githubusercontent.com/97590478/213482208-b7bfdf1e-9c0e-4af6-8d4b-0f6f1f502d48.jpg'
      : (defaultParts == 1 ? 'https://user-images.githubusercontent.com/97590478/213482211-d1e86a2f-ebd3-4b4c-b9e1-6f16fd9982a1.jpg' 
      : (defaultParts == 2 ? 'https://user-images.githubusercontent.com/97590478/213482212-ac2db847-26ae-4ce3-9009-7cba69fa329a.jpg'  
      : (defaultParts == 3 ? 'https://user-images.githubusercontent.com/97590478/213482218-669504e0-1e8a-4b9b-bad1-bc5bd86d7f0b.jpg'  
      : (defaultParts == 4 ? 'https://user-images.githubusercontent.com/97590478/213482220-a9ec9ef7-8bda-4234-ab34-6c400f8f66f3.jpg'  
      : (defaultParts == 5 ? 'https://user-images.githubusercontent.com/97590478/213482187-eb887eb5-b31f-4873-b743-90f916f243af.jpg'  
      : (defaultParts == 6 ? 'https://user-images.githubusercontent.com/97590478/213482194-ca691990-e7eb-4268-ace8-8f0fdb98d7ec.jpg'  
      : (defaultParts == 7 ? 'https://user-images.githubusercontent.com/97590478/213482199-576ca484-4bea-4686-b4cf-6e402033f5f7.jpg'  
      : (defaultParts == 8 ? 'https://user-images.githubusercontent.com/97590478/213482201-181446bd-5c1e-44e0-987c-b0e488e1a917.jpg'
      :  'https://user-images.githubusercontent.com/97590478/213482205-b6e32bfc-1c7a-459e-8f53-0c163769f02f.jpg'))))))))
    };

    axios
      .post(`${API_HOST}/char/setChar`, data2, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
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
            response.data.map((oneMBTI) => {
              if (oneMBTI.m_id == mbti) {
                getMyMBTI(oneMBTI.type);
              }
            });
            setMbtiListDb(response.data);
          });

        getMyUrl(defaultParts);
        console.log(data2);
        alert("저장되었습니다!");
        handleClose();
      });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        color="secondary"
        variant="outlined"
        sx={{ fontSize: "20px" }}
        endIcon={<SettingsSuggestIcon sx={{ mb: 0.5 }} />}
      >
        {title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box
            sx={modalStyle}
            style={{ width: 500, display: "flex", flexDirection: "column" }}
          >
            <div style={{ width: "100%", height: "90%" }}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: 25 }}>나의 MBTI는?</div>
                  <br />
                  <br />
                  <FormControl style={{ width: "50%" }}>
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
                <img
                  style={{ width: "40%" }}
                  src={require(`../assets/image/parts/content/${
                    mbti > 8 ? mbti - 8 : mbti
                  }.jpg`)}
                  alt=""
                />
              </div>
            </div>
            <br />
            <br />
            <Button
              onClick={save}
              style={{ width: "100%" }}
              sx={bigButtonStyle}
            >
              저장하기
            </Button>
          </Box>
        </div>
      </Modal>
    </>
  );
}
