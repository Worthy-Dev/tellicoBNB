import React from "react";
import { useHistory } from "react-router-dom";
// Styling
import styled from "styled-components";
import { Card, CardDeck } from "react-bootstrap";
// Images
import boarding from "../images/dogs-running.jpeg";
import building from "../images/mainBuilding.jpg";
import daycare from "../images/daycare.jpeg";
import grooming from "../images/grooming.jpeg";

const Home = () => {
  const history = useHistory();

  const redirect = () => {
    history.push("/contact");
  };

  return (
    <HomeContainer>
      <div className="home-image">
        <div className="h2-btn">
          <h2>A one-of-a-kind facility you have to see to believe.</h2>
          <button onClick={redirect}>Book Now</button>
        </div>
      </div>
      <div className="welcome-message">
        <h3>Welcome</h3>
        <hr className="lines"></hr>
        <p>
          Surrounded by 30 acres of pasture, our facility houses a 80-run
          boarding kennel and indoor arena.
        </p>
        <p>
          We also call Tellico our home. Our on-site residence allows us to take
          optimum care of your pet even when we are closed. We offer hours that
          provide convenience for you and close supervision of your pet, while
          still allowing some privacy for us. Please respect this by observing
          our business hours.{" "}
        </p>
        <p>We look forward to a visit from you and your pet!</p>
      </div>

      <div className="welcome-message">
        <h3>Tellico News</h3>
        <hr className="lines"></hr>
        <p>
          Dear Valued Customers & Friends,
        </p>
        <p>
          As we close out the year here at Tellico Bed and Biscuit, the team would like to thank you all for your patronage.{" "}
        </p>
        <p>Since taking over ownership in February of 2021, we have seen an exciting and challenging year.  The exciting part was moving to Tennessee and discovering a beautiful state with kind people.  Meeting our clients has been a blessing.  So many of you have welcomed us and have wished us well with our business.</p>
        <p>At the same time, we have seen many challenges.  The Coronavirus and all its variants have affected us all, which I know many of you can attest to.  Employment has been by far, our biggest challenge.  We have had weeks where we had one employee and we (Dad, Mom, and myself) had to roll up our sleeves and keep the business going.  As of now, we have a stable workforce but it came with a significant increase in salaries.  We have also experienced the cost of products and supplies increase significantly.
        </p>
        <p>In reviewing our cost, we have decided that we will have to raise our rates for boarding from $20.00 to $22.00 a day.  All other services, which includes cat boarding, shampoo & nail trims will remain at our present rates.</p>
        <p>The new rate change will take effect on any reservations starting on or after January 1, 2022.  If you have a reservation that has been made prior to 1/1/22 the rate will remain the same throughout your pet's stay.</p>
        <p>Again, we thank you for your patronage and we are committed to continuing to give the best quality of service to your (family members) pets.
        </p>
        <p>Happy and Healthy Holidays to you and your family.</p>
        <p>Regards,</p>
        <p>Lori Fingerlin</p>
      </div>

      <div className="welcome-message">
        <h3>Services</h3>
        <hr className="lines"></hr>
      </div>

      <div className="card-container">
        <CardDeck>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="card-image" variant="top" src={boarding} />
            <Card.Body>
              <Card.Title className="card-title">Boarding</Card.Title>
              <Card.Text>
                Your pet will be in excellent hands while you are away. Make
                reservations in advance to ensure your pet will have
                accommodations.
              </Card.Text>
              <a className="button" href="/services#boarding">
                Learn More
              </a>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="card-image" variant="top" src={daycare} />
            <Card.Body>
              <Card.Title className="card-title">Daycare</Card.Title>
              <Card.Text>
                We offer peace of mind knowing your pet is in good hands and
                engaging in morning and afternoon play sessions.
              </Card.Text>
              <a className="button" href="/services#daycare">
                Learn More
              </a>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="card-image" variant="top" src={grooming} />
            <Card.Body>
              <Card.Title className="card-title">Grooming</Card.Title>
              <Card.Text>
                A pet likes to be pampered just as much as their owner. We love
                to make your four-legged family member look and smell great!
              </Card.Text>
              <a className="button" href="/services#grooming">
                Learn More
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .home-image {
    background: url(${building}) no-repeat left top;
    background-size: 100%;
    flex: auto;
    width: 100vw;
    .h2-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: 1.5rem;
    }
    h2 {
      font-size: 2rem;
      margin-top: 8rem;
      color: #ffffff;
      font-family: "Oswald";
    }
    button {
      margin: 0.5rem 0;
      background: #7ca57c;
      color: #ffffff;
    }
  }
  .welcome-message {
    width: 90%;
    margin: 1.5rem 1rem 0 1rem;
    h2 {
      font-size: 1.8rem;
    }
    .lines {
      border-top: 2px solid #7ca57c;
      width: 100%;
    }
  }
  .card-container {
    margin-bottom: 2rem;
  }
  .card {
    margin: 1rem .8rem 1.5rem;
    box-shadow: 0px 30px 40px -50px rgba(0, 0, 0, 0.5);
    .card-title {
      font-family: "Oswald", sans-serif;
      font-size: 1.5rem;
    }
  }
  .button {
    cursor: pointer;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    transition: all 0.5s ease;
    font-family: "Oswald", sans-serif;
    background: #7ca57c;
    color: #ffffff;
    border-radius: 0.1rem;
    text-align: center;
    &:hover {
      color: #bccebc;
      background: #ffffff;
      text-decoration: none;
      background: #627d57;
    }
  }
  @media (min-width: 600px) {
    .home-image {
      background-position: left center;
      height: 60vh;
      .h2-btn {
        width: 75%;
        margin: 1.5rem 2rem;
      }
      h2 {
        margin-top: 11rem;
        font-size: 2.5rem;
        width: 90%;
      }
    }
    .card-container {
      margin: 2.5rem;
      .card {
        margin: 1rem 1.5rem 1.5rem;
      }
      .card-body {
        display: flex;
        flex-direction: column;
        .button {
          margin-top: auto;
        }
      }
    }
  }
  @media (min-width: 786px) {
    .home-image {
      .h2-btn {
        width: 55%;
        margin: 4rem;
      }
    }
    .card-container {
      display: flex;
      width: 80%;
      justify-content: center;
    }
  }
  @media (min-width: 1450px) {
    .home-image {
      .h2-btn {
        width: 48%;
      }
    }
  }
`;

export default Home;
