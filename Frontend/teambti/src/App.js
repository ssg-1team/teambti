import React, { useEffect, useState } from "react";
import Router from "./Router";
import "./css/font.css";
import "./css/index.css";
import "./App.css";
import Header from "./components/base/Header";
import Login from "./pages/login/Login";


function App() {
  // const [myHeaderColorNumber, setMyHeaderColorNumber] = useState(1);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  // function getMyHeaderColorNumber(headerColorNumber) {
  //   setMyHeaderColorNumber(headerColorNumber);
  // } 

  const login = (bool) => {
    setisLoggedIn(bool);
  };

  useEffect(() => {
    const e_id = localStorage.getItem("e_id");
    if (e_id != null) {
      setisLoggedIn(true);
    }
  }, [])

  return (
    <div className="App" style={{fontFamily:'Pretendard-Regular'}}>
      {/* 합칠 수 있는 방법이 없나 */}
      {/* {isLoggedIn && <Header  login={login} myHeaderColorNumber={myHeaderColorNumber} getMyHeaderColorNumber={getMyHeaderColorNumber}/>} */}
      {isLoggedIn && <Header  login={login} />}
      {isLoggedIn ?
      <div className="body-wrapper">
        <Router></Router>
      </div> :
      <Login isLoggedIn={isLoggedIn} login={login}/>
    }
    </div>
  );
}

export default App;
