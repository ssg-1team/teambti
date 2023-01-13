import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
<<<<<<< HEAD
import Coworking from "./pages/coworking/Coworking";
import Comparison from "./pages/comparison/Comparison";
import Mypage from "./pages/mypage/Mypage";
import Character from "./pages/character/CharacterTest";
import ComparisionArrow from "./components/ComparisionArrow";
import CharacterTest from "./pages/character/CharacterTest";
=======
import Coworking from "./pages/coworking/CoWorking";
import Comparison from "./pages/comparison/Comparison";
import Mypage from "./pages/mypage/Mypage";
import Character from "./pages/character/Character";
import Character2 from "./pages/character/Character2";
import ComparisionArrow from "./components/ComparisionArrow";
>>>>>>> 6b709511f199ac087cca2a17f78a96c48ccd5a69

const Router = ({ isLoggedIn, login }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
<<<<<<< HEAD
          exact
=======
>>>>>>> 6b709511f199ac087cca2a17f78a96c48ccd5a69
          element={
            isLoggedIn ? <Main login={login} /> : <Login login={login} />
          }
        ></Route>

        {/* 캐릭터화면 */}
<<<<<<< HEAD
        <Route path="/characterTest" element={<CharacterTest />}></Route>
        <Route path="/character" exact element={<Character />}></Route>
        {/* 업무할당 */}
        <Route path="/coworking" exact element={<Coworking />}></Route>
=======
        <Route path="/character" element={<Character />}></Route>
        <Route path="/character2" element={<Character2 />}></Route>
        {/* 업무할당 */}
        <Route path="/coworking" element={<Coworking />}></Route>
>>>>>>> 6b709511f199ac087cca2a17f78a96c48ccd5a69

        {/* 1:1 성격 비교 */}
        <Route path="/comparison" exact element={<Comparison />}></Route>

        {/* 마이페이지 */}
        {/* <Route path="/mypage" element={<Mypage />}></Route> */}

        {/* 여기 밑으로는 테스트 */}
<<<<<<< HEAD
        <Route path="/comparisionarrow" element={<ComparisionArrow />}></Route>
=======
        <Route path="/comparisionarrow" element={<ComparisionArrow />}></Route>    
>>>>>>> 6b709511f199ac087cca2a17f78a96c48ccd5a69
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
