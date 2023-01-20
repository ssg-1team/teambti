import React, { useEffect, useState } from "react";
import "../css/components/tag.css";
import axios from 'axios';
import { API_HOST } from '../constant';
import userEvent from "@testing-library/user-event";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Chip, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';

export default function Tag () {
  // constants
  const e_id = parseInt(localStorage.getItem('e_id'));

  const [tags, setTags] = useState([]);

  const getTag = () => {
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
  }

  const addTag = (e) => {
    if (e.target.value !== "") {
      // const newTags = [...tags, e.target.value];
      // setTags([...new Set(newTags.flat())]);

      const data = {
        e_id: e_id,
        content : e.target.value
      };
      
      axios
      .post(`${API_HOST}/member/setTag`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*",
        },
      })
      .then((response) => {
        console.log(response.data);
        getTag();
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
      e.target.value = "";
    }
  };

  const removeTag = (idx, id) => {
    setTags(tags.filter((_, index) => index !== idx));

    axios
    .post(`${API_HOST}/member/deleteTag`, {t_id : id}, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
      },
    })
    .then((response) => {
      console.log(response.data);
      getTag();
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

  useEffect(() => {
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
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    width: "92%",
    color: theme.palette.text.secondary,
  }));

  return (
    <Item>
      <ul className="tag-tags">
        {tags.map((tag, idx) => (
          <li className="tag-tag" key={idx} id={tag.t_id}>
            <Chip style={{fontFamily:'Pretendard-Regular',}} label={tag.content} onDelete={() => removeTag(idx, tag.t_id)} />

          </li>
        ))}
      </ul>
      <TextField
          label="나만의 태그 입력"
          id="outlined-start-adornment"
          sx={{ mt: 2, mb: 2, width: '100%' }}
          onKeyUp={(e) => (e.key === "Enter" ? addTag(e) : null)}
          style={{fontFamily:'Pretendard-Regular',}}
          InputProps={{
            startAdornment: 
              <InputAdornment position="start" style={{fontFamily:'Pretendard-Regular',}} >#</InputAdornment>,
          }}
        />
    </Item>
  );
};
