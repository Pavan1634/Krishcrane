import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import menu_icon from "../../assets/menu-icon.png";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ProductPage">Products</Link>
        </li>
        <li>
          <Link to="/ServicePage">Services</Link>
        </li>
        <li>
          <Link to="/CareerPage">Careers</Link>
        </li>
        <li>
          <Link to="/AboutPage">About</Link>
        </li>
        <li>
          <Link to="/ContactPage">
            <button className="btn">Contact</button>
          </Link>
        </li>
      </ul>

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
