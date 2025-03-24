import React, { useState, useEffect } from "react";
import "./Products.css";
import Product_1 from "../../assets/Product_1.png";
import Product_2 from "../../assets/Product_2.png";
import Product_3 from "../../assets/Product_3.png";
import Product_4 from "../../assets/Product_4.png";
import Product_5 from "../../assets/Product_5.png";
import Product_6 from "../../assets/Product_6.png";
import productHover_1 from "../../assets/productHover_1.png";
import productHover_2 from "../../assets/productHover_2.png";
import productHover_3 from "../../assets/productHover_3.png";
import productHover_4 from "../../assets/productHover_4.png";
import productHover_5 from "../../assets/productHover_5.png";
import productHover_6 from "../../assets/productHover_6.png";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

// Product Data
const productData = [
  {
    id: 1,
    name: "EOT Crane",
    description:
      "Our Electric Overhead Traveling Cranes offer unmatched efficiency and durability for industrial lifting operations. Designed with high-performance motors, robust steel structures, and advanced control systems ensuring precise, reliable, and safe material handling, these cranes optimize workflow and minimize downtime, making them ideal for heavy-duty applications.",
    highlights: [
      "High Load Capacity",
      "Precision Control Systems",
      "Single & Double Girder Configurations",
      "Remote Operation & Anti-Sway Tech",
    ],
    baseImg: Product_1,
    hoverImg: productHover_1,
  },
  {
    id: 2,
    name: "Crane Hoist",
    description:
      "Our Crane Hoists are engineered for smooth, efficient, and safe lifting operations. Integrated with an overhead crane, they feature powerful motors, user-friendly controls, and advanced safety mechanisms. Built to withstand rigorous industrial use, they ensure superior performance with reduced maintenance, ensuring reliability in even the most demanding environments.",
    highlights: [
      "Electric & Manual Options",
      "Overload Protection",
      "Automatic Braking System",
      "High Load-Bearing Capacity",
    ],
    baseImg: Product_2,
    hoverImg: productHover_2,
  },
  {
    id: 3,
    name: "Goliath Crane",
    description:
      "Goliath Crane is a powerful gantry crane designed for heavy industrial applications, such as shipyards and construction sites. Its ground-supported structure enhances mobility while maintaining excellent lifting performance. With advanced load distribution systems and customizable span lengths, it provides unparalleled efficiency for large-scale lifting needs while ensuring operational safety and stability.",
    highlights: [
      "Single & Double Girder Models",
      "High Strength & Stability",
      "Weather-Resistant Components",
      "Remote & Automated Control",
    ],
    baseImg: Product_3,
    hoverImg: productHover_3,
  },
  {
    id: 4,
    name: "Semi-Goliath Crane",
    description:
      "Semi-Goliath Cranes provide an optimal mix of overhead and gantry cranes, making them perfect for factories and workshops requiring flexible and high-capacity lifting solutions. Their unique design offers a blend of mobility and strength, maximizing space efficiency while maintaining high load-bearing capabilities. Engineered for ease of installation and maintenance.",
    highlights: [
      "Single & Double Girder Options",
      "Partial Ground & Overhead Support",
      "Cost-Effective & Space-Saving",
      "Advanced Safety Features",
    ],
    baseImg: Product_4,
    hoverImg: productHover_4,
  },
  {
    id: 5,
    name: "Jib Crane",
    description:
      "Jib Cranes offer compact, space-saving lifting solutions with a pivoting arm mechanism for easy load handling. They are ideal for workshops, assembly lines, and warehouses. Designed with high-precision bearings and smooth rotation. Our Jib Cranes enhance productivity while minimizing operator fatigue, making material handling safer and more streamlined.",
    highlights: [
      "Wall-Mounted & Freestanding Options",
      "Smooth 360° Rotation",
      "Customizable Load Capacities",
      "Durable & Efficient Design",
    ],
    baseImg: Product_5,
    hoverImg: productHover_5,
  },

  {
    id: 6,
    name: "Spares",
    description:
      "We provide a comprehensive range of high-quality spare parts to ensure uninterrupted crane operation and longevity. From precision-engineered wire ropes and motorized trolleys to control panels and safety mechanisms, our spare parts are designed for optimal compatibility and performance. Regular availability and strict quality checks make our spare parts a reliable choice for maintenance and repairs.",
    highlights: [
      "High-Quality & Durable Components",
      "OEM-Compatible Spares",
      "Fast Availability & Delivery",
      "Ensuring Long-Term Crane Efficiency",
    ],
    baseImg: Product_6,
    hoverImg: productHover_6,
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to move to the next product
  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  // Function to move to the previous product
  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + productData.length) % productData.length
    );
  };

  // Toggle pause/play
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Rotate products every 5 seconds (if not paused)
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextProduct, 10000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="products">
      <Title subTitle="Product Portfolio" title="What We Offer" />

      <div className="products-container">
        {/* Rotating Product Wheel */}
        <div className="product-wheel">
          {productData.map((product, index) => {
            const totalProducts = productData.length;
            const angle =
              (360 / totalProducts) *
              ((index - currentIndex + totalProducts) % totalProducts); // Ensures proper rotation
            const isFocused = index === currentIndex % totalProducts;

            return (
              <div
                key={product.id}
                className={`product-item ${isFocused ? "focused" : ""}`}
                style={{
                  transform: `rotate(${angle}deg) translateX(190px)  rotate(-${angle}deg)`,
                }}
              >
                <img
                  className="base-image"
                  src={product.baseImg}
                  alt={product.name}
                />
                <img className="hover-image" src={product.hoverImg} alt="" />
              </div>
            );
          })}
        </div>

        {/* Product Details (Title, Description & Highlights) */}
        <div className="product-details">
          <div className="controls">
            <button onClick={prevProduct}>❮</button>
            <button onClick={togglePause}>{isPaused ? "▶" : "❚❚"}</button>
            <button onClick={nextProduct}>❯</button>
          </div>
          <div>
            <h2>{productData[currentIndex].name}</h2>
            <p>{productData[currentIndex].description}</p>
          </div>
          <div className="product-highlights">
            {productData[currentIndex].highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                {highlight}
              </div>
            ))}
          </div>
          <h6>
            <Link to="/ProductPage">View all Products</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Products;
