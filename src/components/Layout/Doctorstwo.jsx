import React from "react";
import "./Doctorstwo.css";

const Doctorstwo = () => {
  return (
    <div>
      <div className="doctotrstwo-banner">
        <h1>Fun facts</h1>
        <h2>Over 5,100 patients trust us</h2>
        <button className="dctstwo-btn">Make an Apoointment</button>
        <div className="years-firstrow">
          <div className="years-exp-container">
            <div className="years-experience">
              <h1>30</h1>
              <h3>Years of experience</h3>
            </div>

            <div className="years-experience">
              <h1>4500</h1>
              <h3>Happy Patients</h3>
            </div>
          </div>
          <div className="years-secondrow">
            <div className="years-experience">
              <h1>84</h1>
              <h3>Number of Doctors</h3>
            </div>
            <div className="years-experience">
              <h1>300</h1>
              <h3> Number of Staffs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctorstwo;
