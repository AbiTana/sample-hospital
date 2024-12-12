import React from "react";
import "./Service.css";
import { FaAmbulance } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { TbClock24 } from "react-icons/tb";

const Service = () => {
  return (
    <div className="service-container">

        <div className="service-left">
      <h1>Our Services</h1>
          <div className="first-rowbox">
            <div className="emergency-qualifieddoctors">
              <div className="Iconwrapper">
                <FaAmbulance className="serviceIcon" />
              </div>
              <div className="service-details">
                <span className="service-head">Emergency Services</span>
                <span className="paraservice">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </span>
              </div>
            </div>

            <div className="emergency-qualifieddoctors">
              <div className="Iconwrapper">
                <FaAmbulance className="serviceIcon" />
              </div>
              <div className="service-details">
                <span className="service-head">Qualified Doctors</span>
                <span className="paraservice">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </span>
              </div>
            </div>
          </div>
          <div className="second-rowbox">
            <div className="emergency-qualifieddoctors">
              <div className="Iconwrapper">
                <FaAmbulance className="serviceIcon" />
              </div>
              <div className="service-details">
                <span className="service-head">Outdoors Checkup</span>
                <span className="paraservice">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </span>
              </div>
            </div>
            <div className="emergency-qualifieddoctors">
              <div className="Iconwrapper">
                <FaAmbulance className="serviceIcon" />
              </div>
              <div className="service-details">
                <span className="service-head">24 Hours Service</span>
                <span className="paraservice">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container">
          <h2>Free Consultation</h2>
          <input className="form" type="text" placeholder="First Name" />
          <input className="form" type="text" placeholder="Last  Name" />
          <input
            className="form"
            type="text"
            placeholder="Select your services"
          />
          <input className="form" type="text" placeholder="Phone" />
          <input className="form" type="number" placeholder="Date" />
          <input className="form" type="text" placeholder="Time" />
          <input className="form" type="text" placeholder="Message" />
          <button className="service-btn">Appointment</button>
        </div>
    </div>
  );
};

export default Service;
