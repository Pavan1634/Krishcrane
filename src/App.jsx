import React, { useState } from "react";
// impor } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

import AboutPage from "./components/About/AboutPage";
import CareerPage from "./components/Careers/CareerPage";
import ContactPage from "./components/Contact/ContactPage";
import ProductPage from "./components/Products/ProductPage";
import ServicePage from "./components/Services/ServicePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// HomePage component (acts as your main page)
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
      </div>
        <Products />
      
        <Title subTitle="Our Services" title="Repair & Maintenance" />
        <Services />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/ProductPage" Component={ProductPage} />
        <Route path="/ServicePage" Component={ServicePage} />
        <Route path="/CareerPage" Component={CareerPage} />
        <Route path="/AboutPage" Component={AboutPage} />
        <Route path="/ContactPage" Component={ContactPage} />
      </Routes>
    </Router>
  );
};

export default App;
