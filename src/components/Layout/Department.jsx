import React from "react";
import "./Department.css";
import { CiStethoscope } from "react-icons/ci";

const Department = () => {
  return (
    <div className="main-departments">
      {/* <div className="department-container"> */}
      <img
        className="deprt-img"
        src="https://www.generalmedicine.com/wp-content/uploads/2014/10/doctor-and-senior-patient.jpg"
        alt=""
      />
      {/* </div> */}
      <div className="all-departments">
        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Neurology</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Surgical</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Dental</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Neurology</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>X-ray</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Nuclear Magnetic</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Opthalmology</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Traumatology</h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="Neurology">
          <CiStethoscope className="doctoricon" />
          <h2>Cardiology</h2>
          <p>Far far away, behind the word mountains</p>
        </div>
      </div>
    </div>
  );
};

export default Department;
