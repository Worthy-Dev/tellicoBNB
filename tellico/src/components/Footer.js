import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// images
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer">
                <div className="section">
                    <h3>Social Media</h3>
                    <a href="https://www.facebook.com/TellicoBandB/">
                        <img src={facebook} alt="facebook icon"></img>
                    </a>
                    <a href="#">
                        <img src={instagram} alt="instagram icon"></img>
                    </a>
                </div>
                <div className="section">
                    <h3>Company Links</h3>
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
                </div>
                <div className="section">
                    <h3>Location</h3>
                    <div className="address">
                        <p>13500 Vonore Road</p>
                        <p>Loudon, TN 37774</p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    background: #ffffff;
    align-items: center;
    justify-content: center;
    

    .footer{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
    }
    
    .section{
        padding: 4rem;
    }
    
    a{
       text-decoration: none; 
    }

    ul{
        list-style-type: none;
    }
`
export default Footer

