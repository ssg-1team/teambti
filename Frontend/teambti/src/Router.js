import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Assignment from "./pages/assignment/Assignment";
import Comparison from "./pages/comparison/Comparison";
import Mypage from "./pages/mypage/Mypage";
import Home from "./pages/home/Home";
import Test from "./pages/home/Test";
import Character from "./pages/character/Character";
import Character2 from "./pages/character/Character2";
import Card from "./components/Card";
import Paper from "./components/Paper";
import Test2 from "./pages/home/Test2";
import Test3 from "./pages/home/Test3";

const Router = ({ isLoggedIn, login }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Main login={login} /> : <Login login={login} />
          }
        ></Route>

        {/* 캐릭터화면 */}
        <Route path="/character" element={<Character />}></Route>
        <Route path="/character2" element={<Character2 />}></Route>
        {/* 업무할당 */}
        <Route path="/assignment" element={<Assignment />}></Route>

        {/* 1:1 성격 비교 */}
        <Route path="/comparison" element={<Comparison />}></Route>

        {/* 마이페이지 */}
        <Route path="/mypage" element={<Mypage />}></Route>

        {/* 여기 밑으로는 테스트 */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/paper" element={<Paper />}></Route>
        <Route path="/test2" element={<Test2 />}></Route>
        <Route path="/test3" element={<Test3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
