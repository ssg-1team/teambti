import React, { useEffect, useState } from "react";
import Router from "./Router";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = (bool) => {
    setisLoggedIn(bool);
  }
  
  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} login={login} />
    </div>
  );
}

export default App;
