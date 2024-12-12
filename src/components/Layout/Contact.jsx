import React from "react";
import "./Contact.css";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="contact-container-alldetails">
       <h1>Contact Us</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p> 
    <div className="contact-container">
    
   
    <div className="contactby">
    <FaRegAddressCard className="contact-icons" />
    <h3>Address</h3>
    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
    </div>


    
    <div className="contactby">
    <IoMdCall  className="contact-icons"/>
    <h3>Contact Number</h3>
    <p>1486789909</p>
    </div>

    
    <div className="contactby">
    <FaTelegramPlane className="contact-icons" />
    <h3>Email Address</h3>
    <p>info@yoursite.com</p>
    </div>

    <div className="contactby">
    <GiWorld  className="contact-icons"/>
    <h3>Website</h3>
    <p>yoursite.com</p>
    </div>
    


    </div>
    </div>
  );
};

export default Contact;
