import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import "./App.css";

function callApi() {
  window.location ="http://localhost:8000/login/sso";

  // fetch("http://localhost:8000/welcomeMessage")
  //     .then((res) => res.json())
  //     .then((data) => alert(data.message));
}

function App() {
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/welcomeMessage")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{message}</h1>

        <button onClick={callApi}>Login</button>
      </header>
    </div>
  );
}

export default App
