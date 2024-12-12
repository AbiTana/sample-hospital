import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Layout/Banner";
import About from "../Layout/About";
import Service from "../Layout/Service";
import Search from "../Layout/Search";
import Department from "../Layout/Department";
import Doctors from "../Layout/Doctors";
import Doctorstwo from "../Layout/Doctorstwo";
import Contact from "../Layout/Contact";
import Contacttwo from "../Layout/Contacttwo";

const Home = () => {
  return (
    <Layout>
      <Banner/>
      <About/>
      <Service/>
      <Search/>
      <Department/>
      <Doctors/>
      <Doctorstwo/>
      <Contact/>
      <Contacttwo/> 

    </Layout>

  );
};

export default Home;
