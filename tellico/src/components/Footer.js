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
        
        <div className="section">
          <div className="logo-container">
              <img className="footer-logo" src={fullLogo} alt="logo" />
          </div>
          <div className="phone">
              <p>865-458-8534</p>
              <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Tellico+Bed+And+Biscuit/@35.7052457,-84.3042971,17.18z/data=!4m13!1m7!3m6!1s0x885e7e70280fe9e1:0x818eeb52964b1ab7!2s13500+Vonore+Rd,+Loudon,+TN+37774!3b1!8m2!3d35.7053837!4d-84.3019763!3m4!1s0x885e7e6546044031:0xdbc136eb60b443a4!8m2!3d35.7042511!4d-84.3029911">Map / Directions</a>
          </div>
          <div className="address">   
              <p>13500 Vonore Road</p>
              <p>Loudon, TN 37774</p>
          </div>

          <div>   
              <p className="hours">Monday - Saturday</p>
              <p>9:00 a.m. - 12:00 p.m.</p>
              <p>6:00 p.m. - 8:00 p.m.</p>
              <p className="sunday">Sunday</p>
              <p>6:00 p.m. - 8:00 p.m.</p>
          </div>
        </div>

        <hr className="lines"></hr>
       
        <div className="section">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <a href="https://www.facebook.com/TellicoBandB/">
            <img className="social" src={facebook} alt="facebook icon"></img>
          </a>
          <a href="https://www.instagram.com/">
            <img className="social" src={instagram} alt="instagram icon"></img>
          </a>
          
        </div>
          <p className="copyright">&copy; 2014 Tellico Bed & Biscuit. All rights reserved.</p>
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

  .footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    .copyright{
        font-size: .7rem;
        color: #c4bcbc;
        margin-bottom: 1.5rem;
    }

    .logo-container{
        display: flex;
        justify-content: center;

        .footer-logo{
            width: 270px;
            height: 50px;
        }
  }

  .section {
    padding: 1rem;
    .phone{
        font-size: 1.4rem;
        padding: .8rem;
        font-family: 'Oswald', sans-serif;
    }
    .hours{
        font-size: 1.4rem;
        padding-top: 2rem;
        font-family: 'Oswald', sans-serif;
    }
    .sunday{
        padding-top: 1rem;
        font-size: 1.4rem;
        font-family: 'Oswald', sans-serif;
    }
    
    .social{
        padding: .7rem .2rem;
    }
  }

  .lines{
    border-top: 2px solid #6c7d57;
    width: 50%;
  }

  p{
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;
export default Footer;
