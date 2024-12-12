import React from "react";
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="top-navbar">
      <div className="mediplus">
        <h2> Mediplus</h2>
      </div>
      <FiAlignJustify className="bar-icon" />
      <ul className="navbar-list">
        <li>Home</li>
        <li>About</li>
        <li> Department</li>
        <li> Doctors</li>
        <li>Contact</li>
      </ul>
      <button className="appointment">Appointment</button>

      {/* <h3>8754390477</h3> */}
    </div>
  );
};

export default Navbar;
