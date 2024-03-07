import React from 'react'
import styled from "styled-components";
// Images
import boarding from '../images/boarding.jpeg'
import daycare from '../images/daycare2.jpeg';
import grooming from '../images/haircut.JPG';
import happy from '../images/happy-dog.jpeg';

const Services = () => {
    return (
        <ServicesContainer>
            <div className="service">
                <h2 id="boarding">Services</h2>
                <img className="service-img" src={boarding} alt="horse booarding" />
                <div className="title">
                    <h3>Boarding</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p>Whether you are gone for a month, a week, or a day, Tellico Bed & Biscuit is a state of the art facility that provides clean and safe first-class accommodations for your pet. Our top notch caregivers take every precaution to provide a healthy, enjoyable stay for each pet. </p>

                    <div className="bullets">
                        <div>
                            <ul>
                                <h4>Kennel Details:</h4>
                                <li>Indoor-outdoor areas</li>
                                <li>Air conditioning</li>
                                <li>Radiant floor heat</li>
                                <li>Air exchange ventilation system</li>
                                <li>Hammock-style beds</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h4>Boarding Details:</h4>
                                <li>We require vaccinations for each pet </li>
                                <li>Includes play sessions</li>
                                <li>Administer any prescribed medication</li>
                                <li>Accommodate special diets</li>

                            </ul>
                        </div>
                    </div>

                    <div className="fee">
                        <ul >
                            <li>Dogs: $22 per day</li>
                            <li>Cats: $15 per day</li>
                            <li>Rabbits: $5 per day</li>
                        </ul>
                        <p id="daycare">*10% discount for each additional pet</p>
                    </div>
                </div>
            </div>

            <div className="service">
                <img className="service-img" src={daycare} alt="sleeping cat" />
                <div className="title">
                    <h3>Daycare</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p>Don't want to leave your pet home alone? Tellico Bed & Biscuit offers a convenient daycare option where your pet will benefit from the attention of qualified caregivers. Daycare provides peace of mind with the additional benefit of safety and consideration for your pet. </p>

                    <div className="bullets">
                        <div>
                            <ul>
                                <h4>Daycare Details:</h4>
                                <li>60 minutes of playtime, twice a day</li>
                                <li>One morning & one afternoon play sessions</li>
                                <li>Alone or group play</li>
                                <li>Activities regardless of weather in our indoor/outdoor facility </li>
                                <li>Monday - Saturday, 9:00 a.m. - 8:00 p.m. </li>
                            </ul>
                        </div>
                    </div>

                    <div className="fee">
                        <ul >
                            <li>$16 per day</li>
                        </ul>
                        <p id="daycare">*10% discount for each additional pet</p>
                    </div>
                </div>
            </div>

            <div className="service">
                <img className="haircut-img" src={grooming} alt="dog haircut" />
                <div className="title">
                    <h3>Grooming</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p> To keep your pet healthy, we highly recommend setting up a regular grooming appointment. We offer a variety of services to keep your pet clean, healthy, and happy.</p>


                    <div className="bullets">
                        <div>
                            <ul>
                                <h4>Grooming Details:</h4>
                                <li>Specialty equipment massages as it cleans</li>
                                <li>Specially formulated products to clean the coat and skin</li>
                                <li>Warm air massage fluffs while drying the coat</li>
                                <li>Special coat treatments available</li>
                                <li>Specialty shampoo can be accommodated</li>
                                <li>Bath includes shampoo, ear cleaning, & anal gland cleaning</li>
                                <li>Departure bath recommended for each pet that stays more than three days</li>
                            </ul>
                        </div>
                    </div>

                    <div className="fee">
                        <ul >
                            <li>Small (under 20 lbs): $16</li>
                            <li>Medium (up to 50 lbs): $18</li>
                            <li>Large (50+ lbs): $20</li>
                        </ul>
                    </div>

                    <div className="fee add-grooming">
                        <hr className="lines"></hr>
                        <ul >
                            <h3>Additional Services:</h3>
                            <li>Nail Grinding: $10</li>
                            <li>Extra Undercoat Raking: Starts at $10</li>
                            <li>De-matting: Starts at $10</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="service">
                <img className="service-img" src={happy} alt="dog haircut" />
                <h2>PREPARE FOR YOUR VISIT</h2>
                <div className="details">
                    <p>If you are new to Tellico Bed & Biscuit, please come prepared with details on how we can better care for your pet. We have provided additional information below to help you prepare:</p>

                    <div className="bullets">
                        <div>
                            <ul>
                                <li>Bring proof of vaccinations for each pet or a negative blood test</li>
                                <li>Dogs must be current on Rabies, Flu, Distemper, and Parvo, and Boardatella vaccine</li>
                                <li>Cats must be current on Rabies, Flu, RCP-C, and FeLV</li>
                                <li>Provide the name of your veterinarian, in the case of a medical emergency </li>
                                <li>Provide your phone number and an emergecy contact number if you cannot be reached </li>
                                <li>We accept cash or checks, no credit cards at this time</li>
                                <li>Please provide a 48-hour cancellation notice for all services.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ServicesContainer>
    )
}

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    
    .service{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            padding: 1rem;
            font-weight: 400;
            font-size: 2.5rem;
            text-align: center;
        }
        img{
            width: 100%;
            margin-bottom: .5rem;
        }
        h4{
            font-size: 1.5rem;
            font-weight: 300;
        }
        h3{
            font-size: 2rem;
            font-weight: 300;
        }
        
        .details{
            margin: .2rem 1rem;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .bullets{
                display: flex;
                flex-direction: column;
                width: 70%;
                margin: .5rem 0;
                ul{
                    li{
                        margin-left: 1.8rem;
                    }
                }
            }
            .fee{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                ul{
                    font-weight: 200;
                    font-family: "Oswald", sans-serif;
                    li{
                    font-size: 1.8rem;
                    display: inline-block;
                    padding: 0 1rem;
                    }
                }
            }
            .add-grooming{
                margin-bottom: 1rem;
                .lines{
                border-top: 2px solid #7ca57c;
                width: 60%;
                }
                ul{
                    li{
                        font-size: 1.4rem;   
                    }
                }
            }
        }
        .title {
        width: 90%;
        margin: 1.5rem 1rem 0 1rem;
            .lines{
            border-top: 2px solid #7ca57c;
            width: 100%;
            }
        }
    }
    @media (min-width: 600px) {
        .service{
            .service-img{
            width: 100%;
            height: 60vh;
            object-fit: cover;
            object-position: 40% 40%;
            margin-bottom: .5rem;
            }
            .haircut-img{
            width: 100%;
            height: 60vh;
            object-fit: cover;
            object-position: 0% 0%;
            margin-bottom: .5rem;
            }
            .details{
                .bullets{
                    flex-direction: row;
                    justify-content: space-evenly;
                    width: 100%;
                }
                .fee-boarding{
                margin: .8rem 0;
                }
            }
        }
    }
`
export default Services;
