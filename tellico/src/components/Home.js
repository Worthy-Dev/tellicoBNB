import React from "react";
import building from "../images/mainBuilding.jpg";
import styled from "styled-components";
import { Card, Button } from 'react-bootstrap';
import grooming from "../images/grooming.jpeg";
import boarding from "../images/boarding.jpeg";
import daycare from "../images/daycare.jpeg";


const Home = () => {
  return (
    <HomeContainer>
      <div className="home-image" >
        <h2>
            A one-of-a-kind facility you have to see to believe. 
        </h2>
        <button>Book Now</button>
      </div>
      <div className="welcome-message">
        <h3>Welcome</h3>
        <hr className="lines"></hr>
        <p>Surrounded by 30 acres of pasture, our facility houses a 40-run boarding kennel and indoor arena.</p>
        <p>We also call Tellico our home. Our on-site residence allows us to take optimum care of your pet even when we are closed. We offer hours that provide convenience for you and close supervision of your pet, while still allowing some privacy for us. Please respect this by observing our business hours. </p>
        <p>We look forward to a visit from you and your pet!</p>
      </div>
      
      <div className="welcome-message">
        <h3>Services</h3>
        <hr className="lines"></hr>
      </div>

      <div className="card-container">
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img className="card-image" variant="top" src={boarding} />
          <Card.Body>
            <Card.Title className="card-title">Boarding</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img className="card-image" variant="top" src={daycare} />
          <Card.Body>
            <Card.Title className="card-title">Daycare</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img className="card-image" variant="top" src={grooming} />
          <Card.Body>
            <Card.Title className="card-title">Grooming</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 425px;
  }
  .home-image {
    background: url(${building}) no-repeat left top;
    background-size: 100%;
    flex: 1;
    height: 60vh;

    h2 {
      font-size: 2.3rem;
      margin-top: 8.5rem;
      padding: 0 3rem 0 1.5rem;
      color: #ffffff;
      font-family: 'Oswald';
    }
    button{
      margin: 1rem 0 1.5rem 1.5rem;
      background: #e7e8e1;
      color: #627d57;
      
    
    }
  }

  .welcome-message {
    width: 90%;
    margin: 1.5rem 1rem 0 1rem;
    h2{
      font-size: 1.8rem;
    }
    .lines{
    border-top: 2px solid #6c7d57;
    width: 100%;
  }
  }
  .card-container {
    margin-bottom: 2rem;
  }
  .card-image {
    width: 286px;
    height: 180px;  
  }

  .card {
    margin: 1rem;
    box-shadow: 0px 30px 40px -50px rgba(0, 0, 0, 0.5);
    .card-title {
      font-family: 'Oswald', sans-serif;
      font-size: 1.5rem;
    }
  }

  Button {
        cursor: pointer;
        font-size: 1.1rem;
        padding: .5rem 1rem;
        transition: all 0.5s ease;
        font-family: 'Oswald', sans-serif;
        background: #627d57;
        color: #ffffff;
        &:hover{
            color: #bccebc;
            background: #ffffff;
        }
    }

`;

export default Home;
