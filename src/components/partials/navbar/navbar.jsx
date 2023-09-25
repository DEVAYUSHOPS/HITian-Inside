import React from "react";
import Logo from "../../../assets/img/logo.png";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h5>HITian Inside</h5>
        </div>

        <div className="nav-items">
          <span className="nav-item">
            <a href="#">Home</a>
          </span>
          <span className="nav-item">
            <a href="#">Events</a>
          </span>
          <span className="nav-item">
            <a href="#">Almanac</a>
          </span>
          <span className="nav-item">
            <a href="#">Merchandise</a>
          </span>
          <span className="nav-item">
            <a href="#">Members</a>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
