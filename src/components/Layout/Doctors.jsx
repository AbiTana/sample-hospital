import React from "react";
import "./Doctors.css";

const Doctors = () => {
  return (
    <div className="doctors-container">
      <h1>Our Qualified Doctors</h1>
      <p>
        Separated they live in. A small river named Duden flows by their place
        and supplies it with the necessary regelialia. It is a paradisematic
        country
      </p>

      <div className="doctor-imgs">
        <div>
        <img
          className="dct-img"
          src="https://img.freepik.com/premium-photo/beautiful-young-female-doctor-blue-background_582637-10732.jpg"
          alt=""
        />
        <h3>Dr. Rachel Parker</h3>
        <h5>Neurologist</h5>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
        
        <button className="doctors-booknow-btn">Book now</button>
        </div>
        <div>
        <img
          className="dct-img"
          src="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon-768x768.jpg"
          alt=""
        />
        <h3> Dr. Lloyd Wilson</h3>
        <h5>Ophthalmologist</h5>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
        <button className="doctors-booknow-btn">Book now</button>
        </div>
        <div>
        <img
          className="dct-img"
          src="https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=1060"
          alt=""
        />
        <h3>Dr. Alicia Henderson</h3>
        <h5>Dentist</h5>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
        <button className="doctors-booknow-btn">Book now</button>
        </div>
        <div>
        <img
          className="dct-img"
          src="https://img.freepik.com/premium-photo/doctors-medical-hospital-doctors_739685-1896.jpg"
          alt=""
        />
        <h3>Dr. Ian Smith</h3>
        <h5>Pediatrician</h5>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
        <button className="doctors-booknow-btn">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
