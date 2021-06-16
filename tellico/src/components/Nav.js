import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import images
import logo from "../images/TBB-full.svg";
import hamburger from "../images/hamburger.svg";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <NavContainer>
      <div className="logoDiv">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="navBar">
        <button className="hamburger" onClick={handleToggle}>
            <img src={hamburger} alt="hamburger navigation"/>
        </button>
        
        <div className="nav-links">
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li>
              <Link to="/" onClick={() => closeMenu()}>Home</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => closeMenu()}>Services</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => closeMenu()}>About Us</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => closeMenu()}>Gallery</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => closeMenu()}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    position: sticky;
    top: 0;
    z-index: 10;

  .hamburger {
    display: flex;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0 1.5rem;
    img{
      width:42px;
      height: 42px;
    }
  }

  .menuNav {
    overflow-y: scroll;
    list-style: none;
    position: absolute;
    top: 2;
    background: #A6BEA6;
    right: 0;
    height: 48vh;
    width: 0;
    overflow: hidden;
    max-width: 100%;
    z-index: 9;
  }
  
  .menuNav.showMenu {
    width: 100%;
    text-align: center;
    margin-top: 1.5rem;
  }
  
  .logo {
    width: 150px;
    height: 100px;
    padding-left: 1.5rem;
  }

  a {
    display: block;
    padding: 1rem 3rem;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-family: "Oswald", sans-serif;
    font-size: 1.4rem;
  }
  
  .menuNav li:first-child {
    margin-top: 1.5rem;
  }
  

`;

export default Nav;
