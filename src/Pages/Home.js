import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';
import "./Home.css";
import { useCookies } from "react-cookie";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [cookies] = useCookies(["access-token"]);
  const accessToken = cookies["access-token"];

  useEffect(() => {
      fetch("http://localhost:8000/home/homePageMessage", {
        method: 'GET',
        headers: {
          'Accept': 'Application/json',
          'Content-Type': 'Application/json',
          'access-token': accessToken,
        }
      })
      .then((res) => res.json())
      .then((data) => data.message == "token-expired" || data.message == "unauthenticated" ? window.location = "http://localhost:3000/" : setMessage(data.message));
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
       
        <h1>{message}</h1>

        {/* <button onClick={() => navigate("/", { replace: true })}> 
          Logout
        </button> */}
      </header>
    </div>
  );
}

export default Home
