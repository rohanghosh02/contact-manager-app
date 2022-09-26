import React from "react";
import "../Styles/Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  const goToHome = () => { 
    navigate("/");
  };
  return (
    <div className="ui fixed menu">
      <div id="header-div" className="ui container">
        <h2 >Contact Manager
            
        </h2>
        {/* <button  className=" ui icon button"> */}
       
       
      </div>
      <i id="home-button"  className="icon home "  onClick={goToHome}>Home</i>
    </div>
  );
}
