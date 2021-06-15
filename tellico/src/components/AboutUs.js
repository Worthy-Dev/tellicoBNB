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
                    <h3>Lori</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p>Doggo ipsum  Extremely cuuuuuute corgo heckin good boys and girls clouds sub woofer big ol corgo, big ol bork doggo adorable doggo. Big ol smol super chub long doggo big ol doggo doggorino, most angery pupper I have ever seen pats borkf puggorino. shoober floofs the neighborhood pupper. Adorable doggo very taste wow porgo heckin good boys doggorino, woofer long woofer pupper. pats. Corgo puggo yapper lotsa pats maximum borkdrive, big ol big ol pupper smol borking doggo with a long snoot for pats boof, long doggo vvv long bois. Smol big ol pupper tungg vvv what a nice floof tungg what a nice floof, big ol long bois corgo porgo. </p>
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
