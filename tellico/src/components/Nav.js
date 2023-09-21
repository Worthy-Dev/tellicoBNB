import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import images
import logo from "../images/TBB-full.svg";
import hamburger from "../images/hamburger.svg";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  
  const history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <NavContainer>
      <div className="logoDiv">
        <img className="logo" src={logo} alt="logo" onClick={redirect} />
      </div>

      <div className="navBar">
        <button className="hamburger" onClick={handleToggle}>
          <img src={hamburger} alt="hamburger navigation" />
        </button>

        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link to="/" onClick={() => closeMenu()}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => closeMenu()}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => closeMenu()}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => closeMenu()}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => closeMenu()}>
              Contact Us
            </Link>
          </li>
        </ul>
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
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;

  .hamburger {
    display: flex;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0 2.5rem;
    img {
      width: 30px;
      height: 30px;
    }
  }

  .menuNav {
    overflow-y: scroll;
    list-style: none;
    position: absolute;
    top: 2;
    background: #a6bea6;
    right: 0;
    height: 40vh;
    width: 0;
    overflow: hidden;
    max-width: 100%;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menuNav.showMenu {
    width: 100vw;
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
    padding: .7rem 0;
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

//   .menuNav li:first-child {
//     margin-top: .5rem;
//   }

  @media (min-width: 768px) {
    justify-content: space-between;

    ul {
      flex-direction: row;
    }

    .menuNav li:first-child {
      margin-top: 0;
    }

    .hamburger {
      display: none;
    }

    .menuNav {
      list-style: none;
      background: none;
      position: sticky;
      width: 100%;
      height: 100%;
      margin:  0 2rem;
      overflow: hidden;
    }
    
    .menuNav.showMenu {
    margin-top: 0;
  }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: normal;
      font-size: 1rem;
      padding: 0 1.5rem;
    }

    .logoDiv {
      margin: 0;
    }
    .logo {
      margin-left: 2rem;
    }

    .menuNav li:last-child {
      padding-right: 2rem;
    }
  }
`;

export default Nav;
