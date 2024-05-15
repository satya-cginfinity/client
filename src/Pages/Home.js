import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';
import "./Home.css";
import { useCookies } from "react-cookie";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const accessToken = cookies["access-token"];

  function SetValues(name, email){
    setCookie('access-token', accessToken, { path: '/' });
    setName(name);
    setEmail(email);
  }

  function Logout(){
      removeCookie("access-token","/");
      navigate("/", { replace: true });
  }

  useEffect(() => {
      fetch("http://localhost:8000/home/userdetails", {
        method: 'GET',
        headers: {
          'Accept': 'Application/json',
          'Content-Type': 'Application/json',
          'access-token': accessToken,
        }
      })
      .then((res) => res.json())
      .then((data) => data.message == "token-expired" 
      || data.message == "unauthenticated" 
       ? window.location = "http://localhost:3000/" 
       : SetValues(data.firstName, data.email));
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
       
        <h1>Hey {name}! you are logged in now.</h1>
        <p>Your email is {email}</p>

        <button onClick={Logout}> 
          Logout
        </button>
      </header>
    </div>
  );
}

export default Home
