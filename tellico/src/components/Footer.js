import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// images
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import fullLogo from "../images/TBB-text-only-logo.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="logo-container section">
          <img className="footer-logo" src={fullLogo} alt="logo" />
          <a className="button" href="/contact">
          Contact Us
          </a>
          <br></br>
          <p>tellicobandb@gmail.com</p>
        </div>
    
        <div className="section">
          <h3>Our Location</h3>
          <div className="details">
            <a className="phone" href="tel:+1-865-458-8534">865-458-8534</a>
            
          </div>

          <div className="details">
            <p className="address">13500 Vonore Road</p>
            <p className="address">Loudon, TN 37774</p>
            <a
              className="map"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/Tellico+Bed+And+Biscuit/@35.7052457,-84.3042971,17.18z/data=!4m13!1m7!3m6!1s0x885e7e70280fe9e1:0x818eeb52964b1ab7!2s13500+Vonore+Rd,+Loudon,+TN+37774!3b1!8m2!3d35.7053837!4d-84.3019763!3m4!1s0x885e7e6546044031:0xdbc136eb60b443a4!8m2!3d35.7042511!4d-84.3029911"
            >
              Map / Directions
            </a>
          </div>
        </div>

        <div className="section">
          <h3>Our Hours</h3>
          <div className="mon-sat details">
            <p className="hours">Monday - Saturday</p>
            <p>9:00 a.m. - 12:00 p.m.</p>
            <p>6:00 p.m. - 8:00 p.m.</p>
          </div>

          <div className="sun details">
            <p className="sunday">Sunday (Boarding Only)</p>
            <p>6:00 p.m. - 8:00 p.m.</p>
          </div>

          <div className="hr-container">
            <hr className="line"></hr>
          </div>
        </div>
      </div>

      <div className="copy">
        <div className="social-icons">
          <a 
            target="_blank"
            rel="noreferrer" 
            href="https://www.facebook.com/TellicoBandB/">
            <img className="social" src={facebook} alt="facebook icon"></img>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social" href="https://www.instagram.com/">
            <img className="social" src={instagram} alt="instagram icon"></img>
          </a>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <p className="copy-right">
            &copy; 2014 Tellico Bed & Biscuit. All rights reserved.
        </p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  text-align: center;
  .logo-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 1.8rem;
      .button {
        cursor: pointer;
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
        transition: all 0.5s ease;
        font-family: "Oswald", sans-serif;
        font-weight: 400;
        background: #7ca57c;
        color: #ffffff;
        border-radius: 0.1rem;
        margin-top: 1rem;
        width: 60%;
        align-self: center;
        text-align: center;
        &:hover {
          color: #bccebc;
          background: #ffffff;
          text-decoration: none;
          background: #627d57;
        }
      }
      .footer-logo {
        width: 270px;
        height: 50px;
      }
    }

  .footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    h3{
    margin-top: .7rem;
    color: #627d57;
    }
    
    .section {
      padding: .8rem;
      font-weight: 200;
      .details{
        padding-bottom: 1rem;
        font-family: "Oswald", sans-serif;
        .sunday, .hours{
          font-size: 1.3rem;
          font-family: "Oswald", sans-serif;
          font-weight: 400;
        }
      }
      .phone {
        font-size: 1.4rem;
        font-family: "Oswald", sans-serif;
        font-weight: 400;
        text-decoration: none;
      }
      .address{
        font-size: 1.3rem;
      }
      .map{
        font-weight: 400;
        font-size: 1.3rem;
      }
      .line {
        border-top: 2px solid #c4bcbc;
        width: 100%;
        margin-top: 2rem;
      }
    }

    p {
      margin: 0;
    }
    a {
      text-decoration: none;
    }
  }
  .copy {
    .copy-right {
      margin: 1rem 0;
      font-size: 0.7rem;
      color: #c4bcbc;
    }
    .social {
        padding: 0 0.3rem;
    }
    .nav-links {
      margin: 1rem;
      font-size: 0.7rem;
      ul {
        display: flex;
        justify-content:center;
        list-style-type: none;
      }
      a {
      margin: .4rem;
      color: #c4bcbc;
      }
    }
  }

  @media (min-width: 600px) {
    text-align: left;
    .logo-container {
      margin: 3rem 0;
        .footer-logo {
          width: 200px;
          height: 50px;
        }
      }

    .footer {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      margin-top: 1rem;
      .section {
        display: flex;
        flex-direction: column;
        h3{
            margin-top: 1rem;
          };
      }
    }

    .line {
      display: none;
    }

    .copy {
      display: flex;
      align-items: center;
      margin-bottom: .5rem;
      .nav-links {
        ul { 
          margin: 0;
        }
      }
    }
  }
`;
export default Footer;
