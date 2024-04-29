import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import "./App.css";

// function callApi() {
//   window.location ="https://testworkqueue.onelogin.com/trust/saml2/http-post/sso/a95d473e-ed6f-40d9-94a3-4146fc458f94";
//   //fetch('http://localhost:8000/login/sso', { method: 'GET' })
//       //.then(data => alert(JSON.stringify(data.json)))
//      //.then(data => data.json()) // Parsing the data into a JavaScript object
//     // .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
// }

function callApi() {
  window.location ="http://localhost:8000/login/sso";
}

function App() {
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/stuff", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'You called ',
        secondParam: 'Post API.',
      })})
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{message}</h1>

        {/* <Link to="/home">
          Click to load Home Page
        </Link> */}

        <button onClick={callApi}>Login</button>
      </header>
    </div>
  );
}

export default App
