import React from "react";
import logo from "../Images/logo.webp";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <Link to="/" className="site-logo">
        <img src={logo} className="" alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
