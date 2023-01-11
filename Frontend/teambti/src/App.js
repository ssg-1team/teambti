import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Login from "./login/Login";
import Character from "./character/Character";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route path="/character" element={<Character></Character>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
