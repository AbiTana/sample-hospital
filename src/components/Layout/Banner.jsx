import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner-container">
      <h2>Welcome to Mediplus</h2>
      <h1>
        We are here <br />
        for your Care
      </h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia{" "}
        <br />
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove.
      </p>
      <div className="banner-button">
        <button className="make-appoint-button">make an appointment</button>
      </div>
    </div>
  );
};

export default Banner;
