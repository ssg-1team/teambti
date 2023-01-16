import React, { useEffect, useState } from "react";
import Router from "./Router";
import "./css/font.css";
import "./css/index.css";
import "./App.css";
import Header from "./components/base/Header";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

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
    <div className="App">
      {isLoggedIn && <Header login={login} />}
      <div className="body-wrapper">
        <Router isLoggedIn={isLoggedIn} login={login}></Router>
      </div>
    </div>
  );
}

export default App;
