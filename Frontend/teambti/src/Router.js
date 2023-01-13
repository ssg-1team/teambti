import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Coworking from "./pages/coworking/CoWorking";
import Comparison from "./pages/comparison/Comparison";
import Mypage from "./pages/mypage/Mypage";
import Character from "./pages/character/Character";
import Character2 from "./pages/character/Character2";
import ComparisionArrow from "./components/ComparisionArrow";

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
        <Route path="/coworking" element={<Coworking />}></Route>

        {/* 1:1 성격 비교 */}
        <Route path="/comparison" element={<Comparison />}></Route>

        {/* 마이페이지 */}
        {/* <Route path="/mypage" element={<Mypage />}></Route> */}

        {/* 여기 밑으로는 테스트 */}
        <Route path="/comparisionarrow" element={<ComparisionArrow />}></Route>    
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
