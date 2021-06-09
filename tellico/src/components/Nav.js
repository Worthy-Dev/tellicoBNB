import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import images
import logo from '../images/TBB.png';

const Nav = () => {
    return (
        <NavContainer>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-links">
                <ul>
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
            
                </ul>
            </div>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    position: sticky;
    top: 0;
    z-index: 10;

    a{
        color: #3c403d;
        text-decoration: none;
        font-size: 1rem;
        padding: 2rem; 
    }

    ul{
        display: flex;
        list-style: none;
        margin: 0 2.5rem;
    }
    img{
        width: 150px;
        height: 100px;
        margin: 0 2.5rem;
    }

`


export default Nav

