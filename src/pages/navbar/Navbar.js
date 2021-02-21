import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo">
            <FaEnvelope className="navbar-icon" />
            Dhea Cell
          </Link>
          <div className="menu-icon">
            <FaTimes />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
