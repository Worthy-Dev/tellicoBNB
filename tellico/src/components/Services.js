import React from 'react'
import styled from "styled-components";
// Images
import boarding from '../images/boarding.jpeg'
import daycare from '../images/daycare2.jpeg';
import grooming from '../images/haircut.JPG';

const Services = () => {
    return (
        <ServicesContainer>
            <div id="boarding" className="service">
                <h2>Services</h2>
                <img src={boarding} alt="horse booarding" />
                <div className="title">
                    <h3>Boarding</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p>Whether you are gone for a month, a week, or a day, Tellico Bed & Biscuit is a state of the art facility that provides clean and safe first-class accommodations for your pet. Our top notch caregivers take every precaution to provide a healthy, enjoyable stay for each pet. </p>
                    <p>Our kennels feature air-conditioning, radiant floor heat, and an air exchange ventilation system in a unique indoor-outdoor facility so your pet will be comfortable all year round.</p>

                    <h3>Fees</h3>
                    <h4>Includes play sessions, hammock-style beds (dogs), prescribed medications, special diets, and bedtime treats. </h4>
                    <div className="fee-section">
                        <p>Dogs: $20 per day</p>
                        <p>Cats: $15 per day</p>
                        <p>Rabbits: $5 per day</p>
                    </div>
                </div>
            </div>

            <div id="daycare" className="service">
                <img src={daycare} alt="sleeping cat" />
                <div className="title">
                    <h3>Daycare</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p>Don't want to leave your pet home alone? Tellico Bed & Biscuit offers a convenient daycare option. Your pet will be given the opportunity to participate in one morning and one afternoon play session and benefit from the attention of qualified caregivers. Daycare provids peace of mind with the additional benefit of safety and consideration for your pet. </p>
                    <p>Although most play time happens in our outdoor yards, we are an indoor facility, so activities go on throughout the day regardless of the weather. Each dog will be provided 15 minutes of supervised playtime, either alone or in a group, twice a day.</p>

                    <div className="fee-section">
                        <h4 className="hours">Monday - Saturday</h4>
                        <p>9:00 a.m. - 8:00 p.m.</p>
                    </div>

                    <h3>Fees</h3>
                    <div className="fee-section">
                        <p>Dogs & Cats: $16 per day</p>
                    </div>
                </div>
            </div>

            <div id="grooming" className="service">
                <img src={grooming} alt="dog haircut" />
                <div className="title">
                    <h3>Grooming</h3>
                    <hr className="lines"></hr>
                </div>
                <div className="details">
                    <p> To keep your pet healthy, we highly recommend setting up a regular grooming appointment. We offer a variety of services to keep your pet clean, healthy, and happy. We use specialty equipment which massages your pet as it cleans the skin and coat with specially formulated products. Bathing is followed by a warm air massage, whick loosens dead hair and begins to fluff and dry the coat.</p>
                    <p>Special coat treatments are available and requests for specialty shampoos can be accommodated.</p>
                    <p>We recommend a departure bath for each pet that stays at our facility for more than three days.</p>

                    <h3>Fees</h3>
                    <h4>Includes shampoo, ear cleaning, and anal gland cleaning.</h4>
                    <div className="fee-section">
                        <p>Small (under 20 lbs): $16</p>
                        <p>Medium (up to 50 lbs): $18</p>
                        <p>Large (50+ lbs): $20</p>
                    </div>

                    <h4>Additional Services:</h4> 
                    <div className="fee-section">
                        <p>Nail Grinding: $10</p>
                        <p>Extra Undercoat Raking: Starts at $5</p>
                        <p>De-matting: Starts at $10</p>
                    </div>
                </div>
            </div>

            <div className="service">
                <h2>Additional Information</h2>
                <div className="details">
                    <p>*Recieve 10% off for each additional pet visit.</p>
                    <p>We accept cash and checks. No credit cards.</p>
                    <p>We require proof of vaccinations for each pet. Dogs must be current on Rabies, Distemper, and Parvo, and Boardatella vaccine. Cats must be current on Rabies, RCP-C, and FeLV (or neg blood test).</p>
                    <p>If your pet requires medical attention while in our care, our customary procedure is to contact your veterinarian. Oral or topical medication can be administered to your pet while boarding.  </p>
                    <p>Please provide us with a phone number where you or the person you designate can be contacted in the event of an emergency.</p>
                    
                </div>
            </div>
            <button>Book Now</button>
        </ServicesContainer>
    )
}

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    /* text-align: center; */
    .service{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
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
            border-top: 2px solid #7ca57c;
            width: 100%;
            }
        }
    }

`
export default Services;
