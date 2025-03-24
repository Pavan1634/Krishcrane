import React from "react";
import "./CareerPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Placeholder from "../../assets/PageUC.png";

const CareerPage = () => {
  return (
    <div>
      <Navbar />
      <img className="error-page" src={Placeholder} alt="" />
      <Footer />
    </div>
  );
};

export default CareerPage;
