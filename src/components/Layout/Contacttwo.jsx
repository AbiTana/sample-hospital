import React from "react";
import "./Contacttwo.css";

const Contacttwo = () => {
  return (
    <div className="contacttwo-container">
      <img
        className="contacttwoimg"
        src="http://cleveland-bookkeeping.com/wp-content/uploads/2016/03/shutterstock_155141132.jpg"
        alt=""
      />
      <div className="form-contacttwo-container">
        <input className="form1" type="text" placeholder="First Name" />
        <input className="form1" type="text" placeholder="Last  Name" />
        <input
          className="form1"
          type="text"
          placeholder="Subject"
        />
        <input className="msg" type="text" placeholder="Message" />
        <button className="send-contacttwobtn">Send message</button>
      </div>
    </div>
  );
};

export default Contacttwo;
