import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <h1><Link to='/'>kainat</Link></h1>
      <ul id="navLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
