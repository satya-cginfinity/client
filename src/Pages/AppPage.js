import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import "./AppPage.css";

function callApi() {
  fetch('http://localhost:8000/login/sso', { method: 'GET' })
      //.then(data => alert(JSON.stringify(data.json)))
     //.then(data => data.json()) // Parsing the data into a JavaScript object
    // .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
}

function AppPage() {
  
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/stuff", {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        firstParam: 'You called ',
        secondParam: 'Post API.',
      })})
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="AppPage">
      <header className="AppPage-header">
        
        <img src={logo} className="AppPage-logo" alt="logo" />

        <h1>{message}</h1>

        <Link to="/home">
          Click to load Home Page
        </Link>

        <button onClick={callApi}>Login</button>
      </header>
    </div>
  );
}

export default AppPage
