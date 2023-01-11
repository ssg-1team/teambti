import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import EmpModal from '../../components/EmpModal';
import MyModal from '../../components/MyModal';

import axios from 'axios';
import { API_HOST } from "../../constant";

function Main({login}) {
  const e_id = localStorage.getItem('e_id');
  const [emps, setEmps] = useState([]);

  // logout
  const handleLogout = () => {
    localStorage.removeItem('e_id');
    login(false);
  }

  useEffect(() => {
    axios
    .get(`${API_HOST}/member/getAll`, {
      headers: {
        // "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data)
      setEmps(response.data);
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
  
  return (
    <div className="App">
      <div>메인페이지</div>
      <div>{e_id}</div>
      <EmpModal />
      <MyModal />
      <Button onClick={handleLogout}>logout</Button>
    </div>
  );
}

export default Main;
