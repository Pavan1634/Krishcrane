import React from "react";
import "./ContactPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Placeholder from "../../assets/PageUC.png";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <img className="error-page" src={Placeholder} alt="" />
      <Footer />
    </div>
  );
};

export default ContactPage;
