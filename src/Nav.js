import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <img
        src="../public/logo.jpg"
        alt="sayvibes"
        width="42"
        height="42"
        style="vertical-align:bottom"
      ></img>
      <ul className="nav-links">
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="projects" style={navStyle}>
          <li>Projects</li>
        </Link>
        <Link to="contact" style={navStyle}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
