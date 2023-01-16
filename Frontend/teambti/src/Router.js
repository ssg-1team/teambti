import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Coworking from "./pages/coworking/Coworking";
import CoworkingStart from "./pages/coworking/CoWorkingStart";
import Comparison from "./pages/comparison/Comparison";
import Character from "./pages/character/Character";
import ComparisionArrow from "./components/ComparisionArrow";
import CharacterTest from "./pages/character/CharacterTest";
import Mentomenti from "./pages/mentomenti/MentoMenti";
import Home from "./pages/home/Home";
import Header from "./components/base/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>

        {/* 캐릭터화면 */}
        <Route path="/characterTest" element={<CharacterTest />}></Route>
        <Route path="/character" exact element={<Character />}></Route>

        {/* coworking */}
        <Route path="/coworking" exact element={<CoworkingStart/>}></Route>
        <Route path="/coworking3" exact element={<Coworking questionsNumber={3}/>}></Route>
        <Route path="/coworking5" exact element={<Coworking questionsNumber={5}/>}></Route>
        <Route path="/coworking7" exact element={<Coworking questionsNumber={7}/>}></Route>
        {/* mentomenti */}
        <Route path="/mentomenti" exact element={<Mentomenti/>}></Route>

        {/* 1:1 성격 비교 */}
        <Route path="/comparison" exact element={<Comparison />}></Route>

        {/* 마이페이지 */}
        {/* <Route path="/mypage" element={<Mypage />}></Route> */}

        {/* 여기 밑으로는 테스트 */}
        <Route path="/comparisionarrow" element={<ComparisionArrow />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
