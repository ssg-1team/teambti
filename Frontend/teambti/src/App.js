import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Assignment from "./pages/assignment/Assignment";
import Comparison from "./pages/comparison/Comparison";
import Mypage from "./pages/mypage/Mypage";
import Character from "./pages/character/Character";
import Character2 from "./pages/character/Character2";

import Home from "./pages/home/Home";
import Test from "./pages/home/Test";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = (bool) => {
    setisLoggedIn(bool);
  }
  
  return (
    <div className="App">
      <div>안녕하세요?</div>
      <BrowserRouter>
        <Routes>
          {/* 로그인화면 */}
          <Route path="/" element={<Login></Login>}></Route>

          {/* 메인화면 */}
          <Route path="/main" element={<Main></Main>}></Route>

          {/* 캐릭터화면 */}
          <Route path="/character" element={<Character></Character>}></Route>
          <Route path="/character2" element={<Character2></Character2>}></Route>

          {/* 업무할당 */}
          <Route path="/assignment" element={<Assignment></Assignment>}></Route>

          {/* 1:1 성격 비교 */}
          <Route path="/comparison" element={<Comparison></Comparison>}></Route>

          {/* 마이페이지 */}
          <Route path="/mypage" element={<Mypage></Mypage>}></Route>

          {/* 여기 밑으로는 테스트 */}
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/test" element={<Test></Test>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
