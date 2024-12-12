import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <div className="footer-firstrow">
          <h2>Mediplus</h2>
          <p>
            Far far away, behind the word mountains, far from the countries.
          </p>
        </div>
        <div className="footer-secondrow">
          <h2>Departments</h2>
          <ul className="footerlist">
            <li>Neurology </li>
            <li>Opthalmology</li>
            <li>Nuclear Magnetic</li>
            <li>Surgical</li>
            <li>Cardiology</li>
            <li>Dental</li>
          </ul>
        </div>
        {/* <div className="footer-thirdrow">
          <h2>Links</h2>
          <ul className="footerlist">
            <li>Home </li>
            <li>About</li>
            <li>Departments</li>
            <li>Doctors</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div> */}
        <div className="footer-forthrow">
          <h2>Services</h2>
          <ul className="footerlist">
            <li>Emergency Services</li>
            <li>Qualified Doctors</li>
            <li>Outdoors Checkup</li>
            <li>24 Hours Services</li>
          </ul>
        </div>
        <div className="footer-forthrow">
          <h2>Have a Questions?</h2>
          <ul className="footerlist">
            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li> +2 392 3929 210</li>
            <li> info@yourdomain.com</li>
          </ul>
        </div>
      </div>
      <div className="footerhead">
        <h3>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </h3>
      </div>
    </div>
  );
};

export default Footer;
