import React from "react";
// import "./Appointment.css";
import Layout from "../Layout/Layout";
import Appointmentbanner from "../Layout/Appointmentbanner";
import About from "../Layout/About";
import Service from "../Layout/Service";

const Appointment = () => {
  return (
    <Layout>
     <Appointmentbanner/>
     <About/>
     <Service/>

    </Layout>
  );
};

export default Appointment;
