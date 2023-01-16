import React from "react";
import { Router } from "react-router-dom";

function Main({isLoggedIn, login}) {
  return (
    <div className="body-wrapper">
      main이야
      <Router isLoggedIn={isLoggedIn} login={login}></Router>
    </div>
  );
}

export default Main;
