import React from 'react'
import styled from "styled-components";
import about from "../images/loriAndPup.JPG";

const AboutUs = () => {
    return (
        <About>
            <div className="about-container">
                <h2>About Us</h2>
                <img src={about} alt="Lori and pup" />
                <div className="title">
                    <h3>Lori Fingerlin</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p>Lori took over ownership in February 2021. She moved from southern California and now calls beautiful Tennessee her home. She loves all animals but olde English Bulldogs have a special place in her heart after breeding them for many years. Lori is excited to embark on this new journey and continue to provide excellent care for the animals that come to stay at Tellico Bed & Biscuit.  </p>
                </div>
            </div>
        </About>
    )
}

const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    .about-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            font-size: 2.5rem;
            padding: 1rem;
        }
        img{
            width: 425px;
            margin-bottom: 1rem;
        }
        h4{
            font-size: 1.1rem;
        }
        h3{
            font-size: 1.4rem;
        }
        .fee-section{
            margin-bottom: 2rem;
            p{
                margin: 0;
            }
        }
        .details{
            margin: 1rem;
            width: 90%;
        }
        .title {
        width: 90%;
        margin: 1.5rem 1rem 0 1rem;
            .lines{
            border-top: 2px solid #6c7d57;
            width: 100%;
            }
        }
    }
`
export default AboutUs;
