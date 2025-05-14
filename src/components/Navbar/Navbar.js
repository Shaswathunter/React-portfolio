import "./Navbar.css";
import React from "react";
import image from "./ii.png"; // Ensure this file exists in the 'images' folder relative to Navbar.js

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={image} alt="Logo"  width={80}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/">Projects</a>
          </li>
          <li>
            <a href="#/">Skills</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src={image} alt="Logo"  width={80}/>
      </div>
    </div>
  );
}

export default Navbar;
