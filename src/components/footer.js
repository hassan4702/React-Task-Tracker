import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copy Right &copy; 2023</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
