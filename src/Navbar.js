import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <ul className="uList">
        <li className="lists" onClick={props.handleNavbarClick} > Home </li>
        <li className="lists" onClick={props.handleNavbarClick} > About </li>
        <li className="lists"onClick={props.handleNavbarClick}  > Contact </li>
      </ul>
    </div>
  );
};

export default Navbar;
