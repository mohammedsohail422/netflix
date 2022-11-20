import React from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 500) {
      setColor(true);
    }
  };
  window.addEventListener("scroll", handleColor);
  return (
    <>
      <nav className={color ? "color" : ""}>
        <img src={logo} alt="logo" />
        <div className="nav-buttons">
          <Link to="/" className="language">
            English
          </Link>
          <Link to="/" className="signin">
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
