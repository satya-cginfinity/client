import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';
import "./Home.css";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  var accessToken = "";

  useEffect(() => {
    fetch("http://localhost:8000/api/requestToken", {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        key: id
      })})
      .then((res) => res.json())
      .then((data) => accessToken = data.message)
      .then((data) => fetch("http://localhost:8000/home/homePageMessage", {
        method: 'GET',
        headers: {
          'Accept': 'Application/json',
          'Content-Type': 'Application/json',
          'access-token': accessToken,
        }
      })
        .then((res) => res.json())
        .then((data) => setMessage(data.message)));
    
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000/home/homePageMessage", {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'Application/json',
  //       'Content-Type': 'Application/json',
  //       'access-token': accessToken,
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
       
        <h1>{message}</h1>

        {/* <button onClick={() => navigate("/", { replace: true })}> 
          Click to load App Page
        </button> */}
      </header>
    </div>
  );
}

export default Home
