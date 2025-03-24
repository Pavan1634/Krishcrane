import React from "react";
import "./ProductPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Placeholder from "../../assets/PageUC.png";
const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <img className="error-page" src={Placeholder} alt="" />
      <Footer />
    </div>
  );
};

export default ProductPage;
