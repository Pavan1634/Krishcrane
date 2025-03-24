import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="service service-section">
      {/* Text Container for the Overlay */}
      <div className="service-overlay-text">
        <h2>Solutions</h2>
        <p>At Krish Crane, we keep your lifting operations running safely and efficiently. With expert service and maintenance, we minimize downtime and maximize productivity, so you can focus on what matters most.</p>
        <Link to="/ServicePage">View All ❯</Link>
      </div>
      
    </div>
  );
};

export default Services;
