import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";

function Nav() {
  const navStyle = {
    color: "violet",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="sayvibes" />
      </Link>
      <ul className="nav-links">
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="vibes" style={navStyle}>
          <li>Vibes</li>
        </Link>
        <Link to="contact" style={navStyle}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
