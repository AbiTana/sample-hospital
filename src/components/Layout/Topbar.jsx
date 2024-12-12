import React from "react";
import "./Topbar.css";
import { IoMdCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div className="topbar-contact">
          <IoMdCall className="call" />
          <h3>9562465095</h3>
        </div>
        <div className="topbar-contact">
          <FaTelegramPlane className="call" />
          <h3>youremail@email.com</h3>
        </div>
      </div>
      <div className="topbar-right">
        <h5>Sign up</h5>
        <h5>Sign in</h5>
      </div>
    </div>
  );
};

export default Topbar;
