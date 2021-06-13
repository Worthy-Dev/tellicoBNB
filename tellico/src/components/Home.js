import React from "react";
import building from "../images/mainBuilding.jpg";
import styled from "styled-components";
import { Card, Button } from 'react-bootstrap';
import grooming from "../images/grooming.jpg";
import boarding from "../images/boarding.jpg";
import daycare from "../images/daycare.jpg";

const Home = () => {
  return (
    <HomeContainer>
    
      <img src={building} alt="tellico building"></img>
      <div className="welcome-message">
        <h2>
            Tellico Bed & Biscuit is a one-of-a-kind facility you have to see to believe. 
        </h2>
        <p>Surrounded by 30 acres of pasture, the facility houses a 40-run boarding kennel, horse hotel, and indoor arena.</p>
        <p>We also call Tellico our home. Our on-site residence allows us to take optimum care of your pet even when we are closed. We offer hours that provide convenience for you and close supervision of your pet, while still allowing some privacy for us. Please respect this by observing our business hours. </p>
        <p>We look forward to a visit from you and your pet!</p>
      </div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={boarding} />
        <Card.Body>
          <Card.Title>Boarding</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={daycare} />
        <Card.Body>
          <Card.Title>Daycare</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={grooming} />
        <Card.Body>
          <Card.Title>Grooming</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 425px;
  }
`;

export default Home;
