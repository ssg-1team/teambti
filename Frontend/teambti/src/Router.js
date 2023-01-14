import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import CoworkingStart from "./pages/coworking/CoWorkingStart";
import Comparison from "./pages/comparison/Comparison";
import Mypage from "./pages/mypage/Mypage";
import Character from "./pages/character/Character";
import ComparisionArrow from "./components/ComparisionArrow";
import CharacterTest from "./pages/character/CharacterTest";

const Router = ({ isLoggedIn, login }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            isLoggedIn ? <Main login={login} /> : <Login login={login} />
          }
        ></Route>

        {/* 캐릭터화면 */}
        <Route path="/characterTest" element={<CharacterTest />}></Route>
        <Route path="/character" exact element={<Character />}></Route>

        {/* 업무할당 */}
        <Route path="/coworking" exact element={<CoworkingStart/>}></Route>

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
