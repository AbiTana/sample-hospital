import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <img
        className="abt-img"
        src="https://wallpapers.com/images/hd/doctor-pictures-7s3zg1bsdzvcdfrx.jpg"
        alt=""
      />
      <div className="about-rightside">
        <h1>We Are Mediplus A Medical Clinic</h1>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
        <div className="about-buttons-wrapper">
          <button className="about-btn">Make an appointment</button>
          <button className="about-btn2">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
