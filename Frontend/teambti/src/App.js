import React, { useEffect, useState } from "react";
import Router from "./Router";
import "./css/font.css";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = (bool) => {
    setisLoggedIn(bool);
  }

  useEffect(() => {
    const e_id = localStorage.getItem('e_id');
    if (e_id != null) {
      setisLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} login={login} />
    </div>
  );
}

export default App;
