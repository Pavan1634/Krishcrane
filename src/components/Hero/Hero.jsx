import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero container hero-section">
      <div className="hero-text">
        <h1>
          Precision. Power. <br />
          Performance.
        </h1>
        <p>Leading the Way in Crane Manufacturing</p>
        <Link to="/AboutPage">
          <button className="btn">Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
