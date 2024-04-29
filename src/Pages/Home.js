import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';
import "./Home.css";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/homePageMessage")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

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
