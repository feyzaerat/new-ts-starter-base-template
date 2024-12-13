import React, { useState, useEffect } from "react";
import { HiOutlineUser } from "react-icons/hi2";

import { NavLink, Link, useLocation } from "react-router-dom"; 
import "./navbar.css";
import logo from "../../assets/fke-logo-light.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container w-100 justify-space-around">
        <div className="navbar__logo w-100 align-i-center  d-flex">
          <img src={logo} className="w64" alt="logo" />
          <span>Portfolio</span>
        </div>
        <nav
          className={`justify-space-evenly navbar__links ${isMenuOpen ? "active" : ""}`}
        >
         
          <NavLink 
            to="/"
            className={({ isActive }) => (isActive ? "bold text-active" : "")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "bold text-active" : "")}
          >
            About Me
          </NavLink>
          
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "bold text-active" : "")}
          >
            Contact
          </NavLink>
        </nav>

       <p className="big-text italic small-text-light-mode text-danger">(BETA)</p>

        <button className="navbar__toggle" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
